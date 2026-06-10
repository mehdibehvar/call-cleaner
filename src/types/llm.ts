export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export interface LLMProvider {
  streamChat(messages: ChatMessage[]): AsyncGenerator<string>;
}