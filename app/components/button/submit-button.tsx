import { useFormStatus } from "react-dom";
import Button from "./button";
import { cn } from "@/utils/helpers";

const SubmitButton = ({ children, pendingText, className, ...props }: any) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn(pending && "opacity-70 cursor-not-allowed", className)}
      {...props}
    >
      {pending && <span className="animate-spin mr-2">⏳</span>}
      {pending ? pendingText : children}
    </Button>
  );
};

export default SubmitButton;
