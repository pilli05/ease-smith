import React from "react";
import { carouselList } from "../../constant/carouselList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselComponent.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
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

const CarouselComponent = () => {
  return (
    <div>
      <Carousel responsive={responsive} className="z-10">
        {carouselList && carouselList.length > 0
          ? carouselList.map((carousel) => (
              <div key={carousel.id}>
                <div className="flex flex-col items-center p-2">
                  <img src={carousel.imgUrl} alt={carousel.id} />
                  <p className="text-center text-[#838383] font-[500] text-sm leading-5 mt-3">
                    {carousel.description}
                  </p>
                </div>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
