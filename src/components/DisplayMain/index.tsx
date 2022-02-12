import React from "react";
import { Destaque } from "../Destaque";
import { sliderData } from "../Destaque/data";
import { Main } from "./style";

export function DisplayMain() {
  return (
    <Main>
      <Destaque slider={sliderData}></Destaque>

      <div>Adicionados Recentemente</div>

      <div>Animes Recentes</div>
    </Main>
  );
}
