import { useParams } from "react-router-dom";
import { EpisodiosRigthVideo } from "../../components/EpisodiosRigthVideo";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function Visualizador() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h2>Titulo Generico de Anime</h2>
          <aside>
            <video controls>
              <source src="https://rr1---sn-2a5jpqvx5oqg5qx-gxje.googlevideo.com/videoplayback?expire=1644717032&ei=aPMHYpzkI5e30_wPycW12AI&ip=168.181.225.29&id=156d4a8ac0504e43&itag=18&source=blogger&mh=EL&mm=31&mn=sn-2a5jpqvx5oqg5qx-gxje&ms=au&mv=m&mvi=1&pl=24&susc=bl&mime=video/mp4&vprv=1&dur=1430.186&lmt=1621175183971088&mt=1644687905&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAI4qG69095zaAitoHXsCa-PEErO6eBkE6e1KV5HkUISmAiArb62r_WsnehnXGnST0ajPaipLA7_IxH94j1i-vqTUYw%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKgrCQ3xkwehplr7k9alVD1fTfGBsODQWsoNh3Zb5DvbAiEAnFu6V4hAOsBIXnnLb4NLlq2VJrOUz9DB5mugRTjuOVA%3D&cpn=mPsUFGUUmDKUDd5q&c=WEB_EMBEDDED_PLAYER&cver=1.20220208.01.00" />
            </video>

            <div className="episodios-direita-video">
              {Array.from({ length: 12 }).map((_, i) => {
                return <EpisodiosRigthVideo />;
              })}
            </div>
          </aside>
          <div className="botões-next-previous">
            <button>Episodio anterior</button>
            <button>Lista de episodios</button>
            <button>Proximo episodio</button>
          </div>
        </Content>
      </Container>
    </>
  );
}
