import React, { useState } from "react";
import { Container } from "./style";

import { slide, sliderProps } from "./data";

interface sliderCurrent {
  center: number;
  leftOne: number;
  rightOne: number;
  leftTwo: number;
  rightTwo: number;
}

const sliderStart = {
  center: 2,
  leftOne: 1,
  rightOne: 3,
  leftTwo: 0,
  rightTwo: 4,
};

export function Destaque({ slider }: sliderProps) {
  const [current, setCurrent] = useState<sliderCurrent>(sliderStart);

  const length = slider.length;

  const nextSlide = () => {
    setCurrent({
      center: current.center === length - 1 ? 0 : current.center + 1,
      leftOne: current.leftOne === length - 1 ? 0 : current.leftOne + 1,
      rightOne: current.rightOne === length - 1 ? 0 : current.rightOne + 1,
      leftTwo: current.leftTwo === length - 1 ? 0 : current.leftTwo + 1,
      rightTwo: current.rightTwo === length - 1 ? 0 : current.rightTwo + 1,
    });
  };

  const prevSlide = () => {
    setCurrent({
      center: current.center === 0 ? length - 1 : current.center - 1,
      leftOne: current.leftOne === 0 ? length - 1 : current.leftOne - 1,
      rightOne: current.rightOne === 0 ? length - 1 : current.rightOne - 1,
      leftTwo: current.leftTwo === 0 ? length - 1 : current.leftTwo - 1,
      rightTwo: current.rightTwo === 0 ? length - 1 : current.rightTwo - 1,
    });
  };

  console.log(current);

  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }

  return (
    <Container>
      {slider.map((item, index) => {
        return (
          <section>
            <div
              key={index}
              className={index === current.center ? "slide active" : "slide"}
            >
              {index === current.center && (
                <img src={item.image} alt="slider" className="center" />
              )}
            </div>

            <div
              key={index}
              className={index === current.leftOne ? "slide active" : "slide"}
            >
              {index === current.leftOne && (
                <img
                  src={item.image}
                  alt="slider"
                  className="LeftOne"
                  onClick={prevSlide}
                />
              )}
            </div>

            <div
              key={index}
              className={index === current.rightOne ? "slide active" : "slide"}
            >
              {index === current.rightOne && (
                <img
                  src={item.image}
                  alt="slider"
                  className="RightOne"
                  onClick={nextSlide}
                />
              )}
            </div>

            <div
              key={index}
              className={index === current.leftTwo ? "slide active" : "slide"}
            >
              {index === current.leftTwo && (
                <img
                  src={item.image}
                  alt="slider"
                  className="LeftTwo"
                  onClick={prevSlide}
                />
              )}
            </div>

            <div
              key={index}
              className={index === current.rightTwo ? "slide active" : "slide"}
            >
              {index === current.rightTwo && (
                <img
                  src={item.image}
                  alt="slider"
                  className="RightTwo"
                  onClick={nextSlide}
                />
              )}
            </div>
          </section>
        );
      })}
    </Container>
  );
}
