import komi from "../../assets/komisan.jpg";
import g1 from "../../assets/generico1.jpg";
import g2 from "../../assets/generico2.jpg";
import g3 from "../../assets/generico3.jpg";
import g4 from "../../assets/generico4.jpg";

export interface sliderProps {
  slider: slide[];
}

export type slide = {
  image: string;
};

export const sliderData: slide[] = [
  {
    image: komi,
  },
  {
    image: g1,
  },
  {
    image: g2,
  },
  {
    image: g3,
  },
  {
    image: g4,
  },
];
