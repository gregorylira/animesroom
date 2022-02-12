import React from "react";
import { Container } from "./style";
import g3 from "../../../assets/generico3.jpg";
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
          nome="test"
          imagem={g3}
          episodioNovo={false}
          ultimoEpisodio="3"
          lancamento={false}
        />

        <CardAnime
          type="destaque"
          nome="test"
          imagem={g3}
          episodioNovo={false}
          ultimoEpisodio="3"
          lancamento={false}
        />
        <CardAnime
          type="destaque"
          nome="test"
          imagem={g3}
          episodioNovo={false}
          ultimoEpisodio="3"
          lancamento={false}
        />
        <CardAnime
          type="destaque"
          nome="test"
          imagem={g3}
          episodioNovo={false}
          ultimoEpisodio="3"
          lancamento={false}
        />
      </div>
    </Container>
  );
}
