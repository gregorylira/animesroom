import React from "react";
import { Destaque } from "../Destaque";
import { sliderData } from "../Destaque/data";
import { Recentes } from "../Recentes";
import { Main } from "./style";

export function DisplayMain() {
  return (
    <Main>
      <Destaque slider={sliderData}></Destaque>

      <Recentes></Recentes>

      <div>Animes Recentes</div>
    </Main>
  );
}
