"use client";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/carousel.module.css";

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return; // Jalankan hanya jika emblaApi ada
    onSelect(); // Panggil onSelect sekali saat emblaApi tersedia
    emblaApi.on("select", onSelect); // Tambahkan event listener

    // Cleanup ketika emblaApi berubah atau komponen unmounts
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};
export default Carousel;
