import { Message } from "@/hooks/use-chat";
import { SparklesIcon } from "@heroicons/react/24/outline";
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
        <SparklesIcon  className="w-4 h-4 text-primary" />
        
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
          <span className="whitespace-pre-wrap break-all">{message.content}</span>
        )}
      </div>
    </div>
  );
}