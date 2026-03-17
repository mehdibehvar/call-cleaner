"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/utils/helpers";
type item = {
  order?: number;
  caption?: string;
  url: string;
};
interface CarouselProps {
  items: any[];
  className?: string;
  loading?: "eager" | "lazy";
}
export function Carousel({
  items,
  className,
  loading = "eager",
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div
      className={cn(className, "embla overflow-hidden w-full")}
      ref={emblaRef}
    >
      <div className="embla__container flex gap-1">
        {items.map((item, index) => (
          <div className="shrink-0  basis-full" key={index}>
            <div className="embla__slide relative aspect-video overflow-hidden rounded-md bg-gray-200 ">
              <Image src={item.url} alt={item.caption} fill loading={loading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
