import React from "react";
import SliderContainer, { SliderItem } from "./Slider";
import Image from "next/image";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/clogo.png"
          width={150}
          height={50}
          alt="Rent a riff"
          style={{
            objectFit: "cover",
            display: "inline-block",
          }}
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
