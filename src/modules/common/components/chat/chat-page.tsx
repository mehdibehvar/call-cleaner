"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@/hooks/use-chat";
import { MessageBubble } from "./message-bubble";
import { ChatInput } from "./chat-input";

export default function ChatPage() {
  const { messages, isStreaming, error, sendMessage, stopStreaming, clearHistory } =
    useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const latestAssistantId =
    messages.findLast((m) => m.role === "assistant")?.id ?? null;

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L9 5.5H13.5L9.75 8.5L11.25 13L7 10L2.75 13L4.25 8.5L0.5 5.5H5L7 1Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Claude
          </span>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Clear chat
          </button>
        )}
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <EmptyState onSend={sendMessage} />
          ) : (
            messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLatestAssistant={message.id === latestAssistantId && isStreaming}
              />
            ))
          )}

          {error && (
            <div className="flex justify-center">
              <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                {error}
              </p>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input */}
      <footer className="px-4 pb-6 pt-2">
        <div className="max-w-2xl mx-auto">
          <ChatInput
            onSend={sendMessage}
            onStop={stopStreaming}
            isStreaming={isStreaming}
          />
          <p className="text-center text-[11px] text-gray-400 mt-3">
            Claude can make mistakes. Check important information.
          </p>
        </div>
      </footer>
    </div>
  );
}

function EmptyState({ onSend }: { onSend: (msg: string) => void }) {
  const suggestions = [
    "Explain React Server Components",
    "Write a TypeScript utility type",
    "Debug my Next.js 404 error",
    "Summarize the App Router changes",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          How can I help you?
        </h1>
        <p className="text-sm text-gray-500">Ask anything. I'm ready.</p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full max-w-md">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onSend(s)}
            className="text-left text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors leading-relaxed"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}