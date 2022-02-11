import { Container } from "./style";
import lancamento from "../../assets/tag-lancamento.png";

type cardAnimeProps = {
  children?: React.ReactNode;
  type?: "destaque" | "normal" | "recente";
  nome: string;
  imagem?: string;
  episodioNovo?: boolean;
  ultimoEpisodio: string;
  lancamento?: boolean;
};

export function CardAnime(props: cardAnimeProps) {
  // function handleClick() {
  //   console.log("clicou");
  // }
  return (
    <Container type={props.type}>
      <img className="animeImage" src={props.imagem} alt={props.nome} />
      <img
        className={`${props.lancamento ? "em-lancamento" : "finalizado"}`}
        src={lancamento}
        alt={props.nome}
      />
      <span className="title">{props.nome}</span>
      <footer>
        Episodio{props.episodioNovo && " Novo"}
        <span>{props.ultimoEpisodio}</span>
      </footer>
    </Container>
  );
}
