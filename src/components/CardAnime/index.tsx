import { Container } from "./style";

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
      <div className="image">
        <img className="animeImage" src={props.imagem} alt={props.nome} />
      </div>

      <span className="nomeAnime">{props.nome}</span>
      {props.ultimoEpisodio && (
        <span className="episodio"> Episodio {props.ultimoEpisodio}</span>
      )}
    </Container>
  );
}
