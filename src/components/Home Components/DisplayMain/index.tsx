import { Adicionados } from "../Adicionados";
import Destaque from "../Destaque";
import { Recentes } from "../Recentes";
import { Main } from "./style";

export function DisplayMain() {
  return (
    <Main>
      <Destaque />

      <Recentes></Recentes>

      <Adicionados></Adicionados>
    </Main>
  );
}
