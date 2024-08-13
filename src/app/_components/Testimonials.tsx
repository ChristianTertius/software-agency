import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./Carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Budi Santoso">
        Rent a Riff is one of the goodnest and the fastest online rent store
        that i&apos;ve use, they are so kind, and warm for building something
        people want.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
