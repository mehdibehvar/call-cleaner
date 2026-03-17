import { cn } from "@/utils/helpers";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-sm font-medium text-primary-foreground   border border-transparent hover:bg-primary-600 focus:ring-1 focus:ring-primary-600  focus:outline-none flex items-center justify-center leading-5 rounded-sm",
  {
    variants: {
      size: {
        xs: "size-6",
        default: "size-8",
      },
      variant: {
        default: "bg-primary",
        soft: "bg-secondary-100 text-secondary-foreground hover:bg-secondary-200 hover:opacity-50",
        ghost:
          "bg-transparent  border border-transparent hover:bg-secondary-100 focus:ring-4 focus:ring-secondary-300 focus:outline-none",
        outline:
          "bg-transparent border border-secondary-200 text-secondary-700 hover:bg-secondary-100 focus:ring-4 focus:ring-secondary-300 focus:outline-none",
        surface:
          "bg-secondary-100 text-secondary-foreground hover:bg-secondary-200 hover:opacity-50 focus:ring-4 focus:ring-secondary-300 focus:outline-none",
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

const IconButton = ({
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

export default IconButton;
