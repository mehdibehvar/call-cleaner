"use client";
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { CarouselApi } from '../types';


type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const usePrevNextButtons = (
  emblaApi: CarouselApi | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelectHandler = (): void => onSelect();
    onSelectHandler();
    emblaApi.on('reInit', onSelectHandler).on('select', onSelectHandler);

    return (): void => {
      emblaApi.off('reInit', onSelectHandler).off('select', onSelectHandler);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => (
  <button type="button" {...restProps}>
    {children}
  </button>
);

export const PrevButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
);
export const NextButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
);
