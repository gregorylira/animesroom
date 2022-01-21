import './style.scss'

type cardAnimeProps = {
    children?: React.ReactNode;
    nome: string;
    genres: string;
    estudio: string;
    duracao: string;
    imagem?: string;
    episodioNovo?: boolean;
    ultimoEpisodio: string;
}


export function CardAnime (props: cardAnimeProps) {
    function handleClick(){
        console.log('clicou')
    }
    return (
        <div className="card-anime" onClick={handleClick}>
            <img src={props.imagem} alt={props.nome} />
            <span className="title">{props.nome}</span>
            <div className="card-anime-content">
                <span>Genres: {props.genres}</span>
                <span>Estudio: {props.estudio}</span>
                <span>duracao: {props.duracao}</span>
            </div>
            <footer>
                Episodio{props.episodioNovo && " Novo"}
                <span>{props.ultimoEpisodio}</span>
            </footer>
        </div>
    )
}