import komi from "../../../assets/komisan.jpg";
import g1 from "../../../assets/generico1.jpg";
import g2 from "../../../assets/generico2.jpg";
import g3 from "../../../assets/generico3.jpg";
import g4 from "../../../assets/generico4.jpg";
import { v4 } from "uuid";

export interface sliderProps {
  slider: string[];
}

export type slide = {
  image: string;
};

export const sliderData = [
  {
    key: v4(),
    content: <img src={komi} alt="1" />,
  },
  {
    key: v4(),
    content: <img src={g1} alt="2" />,
  },
  {
    key: v4(),
    content: <img src={g2} alt="3" />,
  },
  {
    key: v4(),
    content: <img src={g3} alt="4" />,
  },
  {
    key: v4(),
    content: <img src={g4} alt="5" />,
  },
];
