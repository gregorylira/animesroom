import { CardAnime } from "../../components/CardAnime";
import { EpisodiosRigthVideo } from "../../components/Visualizador Components/EpisodiosRigthVideo";
import { Header } from "../../components/Header";
import { Container, Content, Recomendados } from "./styles";
import { DisqusComments } from "../../components/Visualizador Components/Disqus";
import g1 from "../../assets/generico1.jpg";

export function Visualizador() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h2>Titulo Generico de Anime</h2>
          <aside>
            <iframe
              title="random"
              allowFullScreen
              src="https://www.blogger.com/video.g?token=AD6v5dy4kxpY4VJWUXJz_bgFufAB-Lft26wXIsTUhWt9n5z8_iKsHnbDOIBYYIc0j4TqsbmxFgxrn9OnKoUZcwAxQhQqZsHIprdEJTLsEtn_NsthM4Rd8_3NfACzk0aiLREQdZLUCs0"
            ></iframe>

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
                    imagem={g1}
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
