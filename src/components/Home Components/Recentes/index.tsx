import React from "react";
import { Container, List } from "./style";
import { CardAnime } from "../../CardAnime";
import g4 from "../../../assets/generico4.jpg";

export function Recentes() {
  return (
    <Container>
      <div className="title">
        <span>Adicionados Recentemente</span>
        <span className="more">+</span>
      </div>

      <List>
        <CardAnime
          type="recente"
          nome="Naruto"
          imagem={g4}
          ultimoEpisodio="1"
        />

        <CardAnime
          type="recente"
          nome="Shingeki no Kyojin: The Final Season Part 2"
          imagem={g4}
          ultimoEpisodio="1"
        />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />

        <CardAnime type="recente" nome="test" imagem={g4} ultimoEpisodio="1" />
      </List>
    </Container>
  );
}
