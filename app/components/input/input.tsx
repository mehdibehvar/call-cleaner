import React, { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/helpers";
const inputVariants = cva(
  "w-full text-gray bg-gray-50 outline-none transition-colors duration-200 placeholder:text-gray-400 placeholder:text-md focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-light disabled:text-gray-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "rounded-sm border-none",
        rounded: "rounded-full",
        outline: "border border-gray-300 rounded-sm",
        "outline-rounded":
          "border border-gray-300 rounded-full placeholder:text-gray-dark",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        base: "h-12 px-3  text-md",
        lg: "h-14 px-5 text-lg",
      },
      defaultVariants: { variant: "default", size: "base" },
    },
  }
);
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  size?: "sm" | "base" | "lg";
  containerClassName?: string;
  labelClassName?: string;
  dir?: "ltr" | "rtl";
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: any) => void;
  variant?: "default" | "rounded" | "outline" | "outline-rounded";
  labelLeft?: string;
  labelRight?: string;
  value?: string;
  iconActionHandler?: () => void;
  error:string | undefined;
 
}

const Input = ({
  label,
  labelLeft,
  labelRight,
  ref,
  variant = "default",
  iconLeft,
  iconRight,
  size = "base",
  className,
  containerClassName,
  labelClassName,
  iconActionHandler,
  dir = "ltr",
  required,
  error,
  ...props
}: InputProps) => {
  // Auto-detect RTL from document or use provided dir
  const isRTL = dir === "rtl";

  return (
    <div className={cn("flex flex-col gap-1 w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={cn(
            "text-sm font-medium text-gray-700",
            isRTL?"text-right":"text-left", 
            labelClassName
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {/* IconRight appears on the left in RTL, right in LTR */}
        {iconRight && (
          <i
            onClick={iconActionHandler}
            className={cn(
              "absolute flex items-center  text-gray-500 right-3 cursor-pointer",
              iconRight
            )}
          ></i>
        )}
        {labelRight && (
          <span className={cn("absolute text-gray-500 right-3")}>
            {labelRight}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            inputVariants({ variant, size, className }),
            // Adjust padding based on icon presence and RTL
            isRTL
              ? cn(iconLeft && "pe-10", iconRight && "ps-10")
              : cn(iconLeft && "ps-10", iconRight && "pe-10"),
            labelLeft && "pl-13",
            labelRight && "pr-16"
          )}
          dir={isRTL ? "rtl" : "ltr"}
          {...props}
        />
        {/* IconLeft appears on the right in RTL, left in LTR */}
        {iconLeft && (
          <span
            className={cn(
              "absolute flex items-center pointer-events-none text-gray-500 left-3"
            )}
          >
            <i onClick={iconActionHandler} className={iconLeft}></i>
          </span>
        )}
        {labelLeft && (
          <span className={cn("absolute text-gray-500 left-3")}>
            {labelLeft}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
