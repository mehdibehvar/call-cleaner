import { cn } from "@/app/utils/helpers";

type IconProps = {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
};

const Icon = ({
  name,
  size = 24,
  color = "var(--color-text-800)",
  className,
}: IconProps) => {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        mask: `url(/icons/${name}.svg) no-repeat center / contain`,
        WebkitMask: `url(/icons/${name}.svg) no-repeat center / contain`,
      }}
      aria-hidden="true"
    />
  );
};

export default Icon;
