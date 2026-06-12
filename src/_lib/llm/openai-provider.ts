import { ChatMessage, LLMProvider } from "@/types/llm";
import OpenAI from "openai";

const getClient = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
};

const toOpenAIMessages = (messages: ChatMessage[]) =>
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

export const openaiProvider: LLMProvider = {
  async *streamChat(messages: ChatMessage[]) {
    const client = getClient();
    const stream = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: toOpenAIMessages(messages),
      stream: true,
    });

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content;
      if (text) yield text;
    }
  },
};
