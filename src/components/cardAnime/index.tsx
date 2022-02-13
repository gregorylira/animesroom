import { Container } from "./style";
import lancamento from "../../assets/tag-lancamento.png";

type cardAnimeProps = {
  children?: React.ReactNode;
  type?: "destaque" | "normal" | "recente";
  nome: string;
  imagem?: string;
  ultimoEpisodio?: string;
};

export function CardAnime(props: cardAnimeProps) {
  return (
    <Container type={props.type}>
      <image>
        <img className="animeImage" src={props.imagem} alt={props.nome} />
      </image>

      <span className="nomeAnime">{props.nome}</span>
      {props.ultimoEpisodio && (
        <span className="episodio"> Episodio {props.ultimoEpisodio}</span>
      )}
    </Container>
  );
}
