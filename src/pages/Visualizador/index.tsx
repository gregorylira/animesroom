import { useParams } from "react-router-dom";
import { CardAnime } from "../../components/CardAnime";
import { EpisodiosRigthVideo } from "../../components/EpisodiosRigthVideo";
import { Header } from "../../components/Header";
import { Container, Content, Recomendados } from "./styles";

import generico1Img from "../../assets/generico1.jpg";

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
        <div id="disqus_thread"></div>
        {
          /**
           *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
           *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
          /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
          (function () {
            // DON'T EDIT BELOW THIS LINE
            var d = document,
              s = d.createElement("script");
            s.src = "https://animesroom.disqus.com/embed.js";
            s.setAttribute("data-timestamp", new Date().toDateString());
            (d.head || d.body).appendChild(s);
          })()
        }
        <noscript>
          Please enable JavaScript to view the{" "}
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
      </Container>
    </>
  );
}
