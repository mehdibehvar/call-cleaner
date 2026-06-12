import { LLMProvider,ChatMessage } from "@/types/llm";

const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent";

export const geminiProvider: LLMProvider = {
  async *streamChat(messages: ChatMessage[]) {
    const res = await fetch(`${BASE_URL}?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      }),
    });
console.log("Gemini response status:", res);
    if (!res.body) throw new Error("No response body from Gemini");

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        try {
          const json = JSON.parse(line);

          const text =
            json?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (text) yield text;
        } catch {
          // ignore partial chunks
        }
      }
    }
  },
};