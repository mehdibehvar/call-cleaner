"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Props = {
  onSend: (message: string) => void;
  onStop: () => void;
  isStreaming: boolean;
  disabled?: boolean;
};

export function ChatInput({ onSend, onStop, isStreaming, disabled }: Props) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  const handleSend = () => {
    if (!value.trim() || isStreaming) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm focus-within:border-gray-400 transition-colors">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Claude…"
        rows={1}
        disabled={disabled}
        className="flex-1 resize-none text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none leading-relaxed max-h-40 disabled:opacity-50"
      />

      {isStreaming ? (
        <button
          onClick={onStop}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
          title="Stop generating"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <rect width="10" height="10" rx="1" />
          </svg>
        </button>
      ) : (
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          title="Send"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 12V2M7 2L2 7M7 2l5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}