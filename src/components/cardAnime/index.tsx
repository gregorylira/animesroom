import "./style.scss";
import lancamento from "../../assets/tag-lancamento.png";

type cardAnimeProps = {
  children?: React.ReactNode;
  nome: string;
  imagem?: string;
  episodioNovo?: boolean;
  ultimoEpisodio: string;
  lancamento: boolean;
};

export function CardAnime(props: cardAnimeProps) {
  function handleClick() {
    console.log("clicou");
  }
  return (
    <div className="card-anime" onClick={handleClick}>
      <img src={props.imagem} alt={props.nome} />
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
    </div>
  );
}
