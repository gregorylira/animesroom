import komi from "../../assets/komisan.jpg";
import g1 from "../../assets/generico1.jpg";
import g2 from "../../assets/generico2.jpg";
import g3 from "../../assets/generico3.jpg";
import g4 from "../../assets/generico4.jpg";

export interface sliderProps {
  slider: string[];
}

export type slide = {
  image: string;
};

export const sliderData = [komi, g1, g2, g3, g4];
