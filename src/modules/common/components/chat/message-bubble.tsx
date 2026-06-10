import { Message } from "@/hooks/use-chat";

type Props = {
  message: Message;
  isLatestAssistant: boolean;
};

export function MessageBubble({ message, isLatestAssistant }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mr-3 mt-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5C14.5 4.41 11.59 1.5 8 1.5zm0 2.5a2 2 0 110 4 2 2 0 010-4zm0 9c-1.87 0-3.52-.95-4.5-2.4.02-1.49 3-2.3 4.5-2.3 1.49 0 4.47.81 4.5 2.3A5.48 5.48 0 018 13.5z"
              fill="#6B7280"
            />
          </svg>
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-gray-900 text-white rounded-br-sm"
            : "bg-gray-100 text-gray-800 rounded-bl-sm"
        }`}
      >
        {message.content === "" && isLatestAssistant ? (
          <span className="flex gap-1 items-center h-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
          </span>
        ) : (
          <span className="whitespace-pre-wrap">{message.content}</span>
        )}
      </div>
    </div>
  );
}