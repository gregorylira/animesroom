import { useState } from "react";
import { Container } from "./style";
import { sliderProps } from "./data";

interface sliderCurrent {
  leftTwo: number;
  leftOne: number;
  center: number;
  rightOne: number;
  rightTwo: number;
}

const sliderStart = {
  leftTwo: 0,
  leftOne: 1,
  center: 2,
  rightOne: 3,
  rightTwo: 4,
};

export function Destaque({ slider }: sliderProps) {
  const [current, setCurrent] = useState<sliderCurrent>(sliderStart);

  const length = slider.length;

  const nextSlide = () => {
    setCurrent({
      leftTwo: current.leftTwo === length - 1 ? 0 : current.leftTwo + 1,
      leftOne: current.leftOne === length - 1 ? 0 : current.leftOne + 1,
      center: current.center === length - 1 ? 0 : current.center + 1,
      rightOne: current.rightOne === length - 1 ? 0 : current.rightOne + 1,
      rightTwo: current.rightTwo === length - 1 ? 0 : current.rightTwo + 1,
    });
  };

  const prevSlide = () => {
    setCurrent({
      leftTwo: current.leftTwo === 0 ? length - 1 : current.leftTwo - 1,
      leftOne: current.leftOne === 0 ? length - 1 : current.leftOne - 1,
      center: current.center === 0 ? length - 1 : current.center - 1,
      rightOne: current.rightOne === 0 ? length - 1 : current.rightOne - 1,
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
          <section key={index}>
            <div>
              {index === current.center && (
                <img src={item.image} alt="slider" className="center" />
              )}
            </div>

            <div>
              {index === current.leftOne && (
                <img
                  src={item.image}
                  alt="slider"
                  className="LeftOne"
                  onClick={prevSlide}
                />
              )}
            </div>

            <div>
              {index === current.rightOne && (
                <img
                  src={item.image}
                  alt="slider"
                  className="RightOne"
                  onClick={nextSlide}
                />
              )}
            </div>

            <div>
              {index === current.leftTwo && (
                <img
                  src={item.image}
                  alt="slider"
                  className="LeftTwo"
                  onClick={prevSlide}
                />
              )}
            </div>

            <div>
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
