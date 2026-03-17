import { cn } from "@/utils/helpers";
import { cva } from "class-variance-authority";
import type React from "react";
const inputVariants = cva(
  "w-full text-gray bg-gray-50 outline-none transition-colors duration-200 placeholder:text-gray-300 placeholder:text-md focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-light disabled:text-gray-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "rounded-sm border-none",
        outline: "border border-gray-300 rounded-sm",
      },
      size: {
        sm: "",
        base: "",
        lg: "",
      },
      defaultVariants: { variant: "default", size: "base" },
    },
  },
);
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder?: string;
  type?: string;
  className?: string;
  isRtl?: boolean;
  label: string;
  labelClassName?: string;
  required?: false;
  error?: string;
  rows?: number;
  variant?: "default" | "outline";
  size?: "sm" | "base" | "lg";
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "type here ..",
  className,
  variant = "default",
  size = "base",
  isRtl = false,
  labelClassName,
  required,
  label,
  rows = 5,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={cn(
            "text-sm font-medium text-gray-700",
            isRtl ? "text-right" : "text-left",
            labelClassName,
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={cn(inputVariants({ variant, size, className }))}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
export default TextArea;
