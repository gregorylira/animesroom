import { useParams } from "react-router-dom";
import { EpisodiosRigthVideo } from "../../components/EpisodiosRigthVideo";
import { Header } from "../../components/Header";
import { Container, Content, Recomendados } from "./styles";

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
          </Recomendados>
        </Content>
      </Container>
    </>
  );
}
