import React from "react";

/* -----------------------------
   Types (Design System Layer)
------------------------------*/

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerVariant =
  | "primary"
  | "muted"
  | "white"
  | "danger"
  | "success";

type SpinnerMode = "inline" | "overlay";

type SpinnerProps = {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  mode?: SpinnerMode;
  label?: string;
  className?: string;
};

/* -----------------------------
   Design Tokens
------------------------------*/

const sizeMap: Record<SpinnerSize, number> = {
  sm: 16,
  md: 24,
  lg: 40,
};

const colorMap: Record<SpinnerVariant, string> = {
  primary: "text-primary",
  muted: "text-gray-400",
  white: "text-white",
  danger: "text-red-500",
  success: "text-green-500",
};

/* -----------------------------
   Spinner Icon (Primitive)
------------------------------*/

type SpinnerIconProps = {
  size: number;
  colorClass: string;
  className?: string;
};

const SpinnerIcon: React.FC<SpinnerIconProps> = ({
  size,
  colorClass,
  className,
}) => {
  return (
    <svg
      aria-hidden="true"
      className={`animate-spin ${colorClass} ${className ?? ""}`}
      style={{ width: size, height: size }}
      viewBox="0 0 100 101"
      fill="none"
    >
      {/* background ring */}
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
        fill="currentColor"
        opacity="0.15"
      />

      {/* spinning arc */}
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );
};

/* -----------------------------
   Spinner Component (API Layer)
------------------------------*/

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "primary",
  mode = "inline",
  label,
  className,
}) => {
  const dimension = sizeMap[size];
  const colorClass = colorMap[variant];

  if (mode === "overlay") {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
        <SpinnerIcon size={dimension} colorClass={colorClass} />
        {label && (
          <p className="mt-3 text-sm text-white/80">{label}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${className ?? ""}`}
    >
      <SpinnerIcon size={dimension} colorClass={colorClass} />

      {label && (
        <p className="mt-2 text-sm text-gray-500 text-center">
          {label}
        </p>
      )}
    </div>
  );
};

export default Spinner;