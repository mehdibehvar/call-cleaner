import { cn } from "@/utils/helpers";

const FormCard = ({ children, title, className }: any) => {
  return (
    <div className={cn("max-w-3xl mx-auto p-6", className)}>
      <div className="dark:bg-gray-600 backdrop-blur-sm rounded-lg shadow-md border border-gray-100 dark:border-gray-600">
        <div className="px-6 py-8 *:space-y-2">
          <h1 className="text-2xl font-semibold mb-4"> {title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
