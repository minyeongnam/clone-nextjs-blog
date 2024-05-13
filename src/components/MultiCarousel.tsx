"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

interface Props {
  children: React.ReactNode;
}

/**
 * 라이브러리 사용시 직접적으로 사용하지 않고 컴포넌트로 한단계 추상화해주면 내부적으로 다른 라이브러리로 교체시 앱 자체에는 별도의 영향을 끼치지않는다.
 */

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      responsive={responsive}
      itemClass="multi-carousel"
    >
      {children}
    </Carousel>
  );
}
