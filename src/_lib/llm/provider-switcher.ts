import { LLMProvider } from "@/types/llm";
import { openaiProvider } from "./openai-provider";
import { anthropicProvider } from "./antropic-provider";
import { grokProvider } from "./grok-provider";
import { geminiProvider } from "./gemini";

export function getProvider(provider: string): LLMProvider {
  switch (provider) {
    case "openai":
      return openaiProvider;
    case "anthropic":
      return anthropicProvider;
       case "grok":
      return grokProvider;
      case "gemini":
       return geminiProvider;
    default:
      return openaiProvider;
  }
}



