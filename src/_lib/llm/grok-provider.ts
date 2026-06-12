import { ChatMessage, LLMProvider } from "@/types/llm";

const BASE_URL = "https://api.x.ai/v1/chat/completions";

type GrokChatChunk = {
  choices?: Array<{
    delta?: { content?: string };
    message?: { content?: string };
  }>;
  error?: { message?: string };
};

const toGrokMessages = (messages: ChatMessage[]) =>
  messages
    .filter(
      (message) =>
        ["user", "assistant", "system"].includes(message.role) &&
        typeof message.content === "string" &&
        message.content.trim().length > 0
    )
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));

const getChunkText = (chunk: GrokChatChunk) =>
  chunk.choices?.[0]?.delta?.content ?? chunk.choices?.[0]?.message?.content;

const parseErrorMessage = async (res: Response) => {
  const text = await res.text();

  try {
    const json = JSON.parse(text) as GrokChatChunk;
    return json.error?.message || text;
  } catch {
    return text;
  }
};

export const grokProvider: LLMProvider = {
  async *streamChat(messages: ChatMessage[]) {
    if (!process.env.XAI_API_KEY) {
      throw new Error("XAI_API_KEY is not configured");
    }

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.XAI_MODEL || "latest",
        messages: toGrokMessages(messages),
        stream: true,
      }),
    });

    if (!res.ok) {
      throw new Error(await parseErrorMessage(res));
    }

    if (!res.body) throw new Error("No response body");

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Grok streams as SSE-like chunks
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;

        const jsonStr = trimmedLine.startsWith("data:")
          ? trimmedLine.slice("data:".length).trim()
          : trimmedLine;

        if (jsonStr === "[DONE]") return;

        try {
          const json = JSON.parse(jsonStr) as GrokChatChunk;
          const token = getChunkText(json);

          if (token) yield token;
        } catch {
          // Keep buffering if a JSON object arrives split across chunks.
          buffer = `${jsonStr}\n${buffer}`;
        }
      }
    }

    const remaining = buffer.trim();
    if (remaining && remaining !== "[DONE]") {
      const json = JSON.parse(remaining) as GrokChatChunk;
      const token = getChunkText(json);
      if (token) yield token;
    }
  },
};
