"use client"; // Error boundaries must be Client Components

import Button from "@/components/button/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error boundary: ", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 flex flex-col gap-4 basis-1/2">
        <h2>Something went wrong!</h2>
        <Button
          variant={"soft"}
          size={"md"}
          className="w-full bg-danger"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
