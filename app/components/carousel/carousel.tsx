"use client";
import { cn } from "@/utils/helpers";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
type item = {
  id: number;
  src: string;
  alt: string;
  title: string;
  url: string;
};
interface CarouselProps {
  items: any[];
  className?: string;
}
export function Carousel({ items, className }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div
      className={cn(className, "embla overflow-hidden w-full")}
      ref={emblaRef}
    >
      <div className="embla__container flex gap-1">
        {items.map((item, index) => (
          <div className="shrink-0  basis-full" key={item.id}>
            <div className="embla__slide relative aspect-video overflow-hidden rounded-md bg-gray-200">
              <Image src={item.src} alt={item.alt} fill loading="eager" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
