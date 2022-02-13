import React from "react";
import { Container } from "./style";
import g1 from "../../../assets/generico1.jpg";
import { CardAnime } from "../../CardAnime";

export function Adicionados() {
  return (
    <Container>
      <div className="title">
        <span>Anime Recentes</span>
        <span className="more">+</span>
      </div>

      <div className="list">
        <CardAnime
          type="destaque"
          nome="Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka?"
          imagem={g1}
          ultimoEpisodio="3"
        />

        <CardAnime type="destaque" nome="test" imagem={g1} ultimoEpisodio="3" />

        <CardAnime type="destaque" nome="test" imagem={g1} ultimoEpisodio="3" />

        <CardAnime type="destaque" nome="test" imagem={g1} ultimoEpisodio="3" />
      </div>
    </Container>
  );
}
