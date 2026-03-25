"use client";
import { cn } from "@/utils/helpers";
import { useEffect, useState } from "react";

interface IProps {
  messages: string[];
  position?: string;
  status?: string;
  className?: string;
  time?: number;
}

const Toast = ({
  messages,
  position = "left-0",
  status = "danger",
  className,
  time = 2000,
}: IProps) => {
  const [show, setShow] = useState(true);
  const getStatus = (s: string) => {
    enum statusBg {
      warning = "bg-warnign",
      danger = "bg-danger",
      success = "bg-success",
    }
    return s == "success"
      ? statusBg.success
      : s == "warnign"
        ? statusBg.warning
        : statusBg.danger;
  };
  useEffect(() => {
    const settime = setTimeout(() => {
      setShow(false);
    }, time);

    return () => {
      clearTimeout(settime);
    };
  }, [time]);

  return (
    <div
      className={cn(
        className,
        "flex flex-col space-y-2 md:w-1/2  text-2xl text-gray-100 absolute top-0",
        position,
        show ? "" : "hidden",
      )}
    >
      {messages.map((msg, i) => (
        <p className={cn(getStatus(status), "p-4")} key={i}>
          {msg}
        </p>
      ))}
    </div>
  );
};

export default Toast;
