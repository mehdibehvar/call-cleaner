"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@/hooks/use-chat";
import { MessageBubble } from "./message-bubble";
import { ChatInput } from "./chat-input";
import Button from "../button/button";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function ChatBot() {
  const { messages, isStreaming, error, sendMessage, stopStreaming, clearHistory, sendHardcoded } =
    useChat();
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const latestAssistantId =
    messages.findLast((m) => m.role === "assistant")?.id ?? null;

  if (!isOpen) {
    return (
      <Button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-xl shadow-gray-900/20 transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />
      </Button>
    );
  }

  return (
    <aside
      aria-label="AI chat"
      className="fixed bottom-4 left-4 right-4 top-16 z-50 flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/20 md:left-auto md:top-auto md:h-[720px] md:max-h-[calc(100vh-3rem)] md:w-[420px]"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center">
             <StarIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
         AI Chat
          </span>
        </div>
        <div className="flex items-center gap-3">
          {messages.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={clearHistory}
              className="h-auto px-0 text-xs text-gray-400 shadow-none transition-colors hover:bg-transparent hover:text-gray-600"
            >
              Clear chat
            </Button>
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI chat"
            className="h-8 w-8 rounded-full p-0 text-gray-400 shadow-none transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            <XMarkIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <EmptyState onSuggest={sendHardcoded} />
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
            AI can make mistakes. Check important information.
          </p>
        </div>
      </footer>
    </aside>
  );
}

interface EmptyStateProps {
  onSuggest: (question: string, answer: string) => void;
}

function EmptyState({ onSuggest }: EmptyStateProps) {
const SUGGESTIONS: { question: string; answer: string }[] = [
  {
    question: "Explain about call cleaner app",
    answer:
      "Call Cleaner is a smart call management app designed to give you full control over your incoming calls. It automatically identifies and filters unwanted calls — including spam, telemarketers, and robocalls — so you only hear from people that matter. It's built for simplicity: no complex setup, just install and stay protected.",
  },
  {
    question: "How does the call cleaner work?",
    answer:
      "Call Cleaner works by cross-referencing incoming calls against a continuously updated database of known spam numbers. When a suspicious call is detected, the app silently blocks or flags it before your phone even rings. You can also create your own allow/block lists for full customization. Everything happens on-device, so your call data stays private.",
  },
  {
    question: "What are the benefits of using call cleaner?",
    answer:
      "The main benefits of Call Cleaner are:\n\n• 🚫 Block spam & robocalls automatically\n• 🔕 Stop unwanted interruptions during work or sleep\n• 🔒 Privacy-first — no call data sent to the cloud\n• ⚡ Real-time protection with zero performance impact\n• 🎛️ Custom rules for contacts, area codes, and number patterns\n• 📊 Call history log so you always know what was blocked and why",
  },
  {
    question: "Can you give me a quick summary of the call cleaner app?",
    answer:
      "Sure! Call Cleaner is your all-in-one defense against unwanted calls. It silently blocks spam, telemarketers, and robocalls in real time — without you lifting a finger. It's lightweight, privacy-focused, and fully customizable. Think of it as a smart filter that sits between you and the noise.",
  },
];

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          How can I help you?
        </h1>
        <p className="text-sm text-gray-500">Ask anything. I&apos;m ready.</p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full max-w-md">
            {SUGGESTIONS.map(({ question, answer }) => (
          <Button
            key={question}
            type="button"
            variant="outline"
            size="default"
            onClick={() => onSuggest(question, answer)}
            className="h-auto justify-start rounded-xl border-gray-200 bg-gray-50 px-3 py-2.5 text-left text-xs leading-relaxed text-gray-600 shadow-none transition-colors hover:bg-gray-100"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}
