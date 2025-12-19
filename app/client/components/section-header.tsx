"use client";

import { cn } from "@/app/utils/helpers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SectionHeader = ({ title }: { title: string }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);//Only trigger once (for animations)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "-50px 0px", // Optional offset
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-start items-center w-full overflow-hidden"
    >
      <div
        className={cn(
          "bg-linear-to-r from-secondary-200/90 via-secondary-100/80 to-secondary-100/70",
          isInView ? "animate-shrink-from-right p-0" : "animate-grow-from-left",
          "flex items-center justify-start  overflow-visible rounded-sm"
        )}
      >
        <h1 className="ps-8 align-baseline  text-2xl font-bold text-nowrap whitespace-nowrap">
          {title}
        </h1>
      </div>
      <Image
        className="pointer-events-none scale-x-[-1] rotate-12 -translate-y-1"
        src="/icons/cleaner.png"
        width={38}
        height={38}
        alt=""
      />
    </div>
  );
};

export default SectionHeader;
