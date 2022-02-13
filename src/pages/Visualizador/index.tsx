import { useParams } from "react-router-dom";
import { CardAnime } from "../../components/CardAnime";
import { EpisodiosRigthVideo } from "../../components/Visualizador Components/EpisodiosRigthVideo";
import { Header } from "../../components/Header";
import { Container, Content, Recomendados } from "./styles";

import generico1Img from "../../assets/generico1.jpg";
import { DiscussionEmbed } from "disqus-react";
import { DisqusComments } from "../../components/Disqus";

export function Visualizador() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h2>Titulo Generico de Anime</h2>
          <aside>
            <video controls>
              <source src="https://content.jwplatform.com/videos/BfUwyoGX-ajYdByGU.mp4" />
            </video>

            <div className="episodios-direita-video">
              {Array.from({ length: 12 }).map((_, i) => {
                return <EpisodiosRigthVideo key={i} />;
              })}
            </div>
          </aside>
          <div className="botões-next-previous">
            <button>Episodio anterior</button>
            <button>Lista de episodios</button>
            <button>Proximo episodio</button>
          </div>
          <Recomendados>
            <h2>Recomendados</h2>
            <div className="lista-recomendados">
              {Array.from({ length: 15 }).map((_, i) => {
                return (
                  <CardAnime
                    key={i}
                    nome="Nome de Anime"
                    // ultimoEpisodio="28"
                    imagem={generico1Img}
                    type="normal"
                  />
                );
              })}
            </div>
          </Recomendados>
        </Content>
        <DisqusComments title="TesteVisualizador" />
      </Container>
    </>
  );
}
