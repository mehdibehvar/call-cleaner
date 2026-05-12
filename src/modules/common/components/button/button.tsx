import { cn } from "@/utils/helpers";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-sm font-medium text-primary-foreground cursor-pointer border border-transparent hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 shadow-xs focus:outline-none px-3 flex items-center gap-2 justify-center  rounded-sm transition-colors duration-200",
  {
    variants: {
      size: {
        xs: "h-6",
        default: "h-8",
        md: "h-10", 
        lg: "h-12",
        icon: "size-10 p-0",
      },
      variant: {
        default: "bg-primary focus-visible:outline-primary-600",
        soft: "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300 focus-visible:outline-secondary-400",
        ghost:
          "bg-transparent border border-transparent hover:bg-secondary-100 text-gray-400 focus-visible:outline-secondary-400",
        outline:
          "bg-transparent border border-secondary-200 text-secondary-700 hover:bg-secondary-100 focus-visible:outline-secondary-400",
        surface:
          "bg-primary-100 text-secondary-foreground hover:bg-primary-200 focus-visible:outline-primary-400",
      },

      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: () => void;
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({
  className,
  variant = "default",
  ref,
  size = "default",
  onClick,
  asChild = false,
  ...props
}: ButtonProps) => {
  ///cn = “class names combiner”
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
      {...props}
    >
      {asChild ? <slot /> : props.children}
    </button>
  );
};

export default Button;
