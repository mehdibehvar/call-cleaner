import { getProvider } from "@/_lib/llm/provider-switcher";
import { NextRequest } from "next/server";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Unknown chat API error";

export async function POST(req: NextRequest) {
  try {
    const { messages, provider = "openai" } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 });
    }

    const llm = getProvider(provider);

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const token of llm.streamChat(messages)) {
            controller.enqueue(encoder.encode(token));
          }
          controller.close();
        } catch (error) {
          const message = getErrorMessage(error);
          console.error("Chat stream error:", error);
          controller.enqueue(encoder.encode(`\n\nChat error: ${message}`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(getErrorMessage(error), { status: 500 });
  }
}
