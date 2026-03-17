"use client";
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

type CarouselApi = UseEmblaCarouselType[1];
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: CarouselApi | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    // تغییر: تابع onSelectHandler برای اطمینان از اینکه همیشه emblaApi جدید را استفاده کند
    const onSelectHandler = (): void => onSelect(emblaApi);
    onSelectHandler();

    emblaApi.on('reInit', onSelectHandler).on('select', onSelectHandler);

    // پاکسازی event handlers در زمان unmount یا تغییر emblaApi
    return (): void => {
      emblaApi.off('reInit', onSelectHandler).off('select', onSelectHandler);
    };
  }, [emblaApi, onSelect, onInit]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type DotButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  key: number;
  onClick: () => void;
  className: string;
};

export const DotButton: React.FC<DotButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
