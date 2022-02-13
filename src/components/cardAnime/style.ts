import styled from "styled-components";

interface CardAnimeProps {
  type?: "destaque" | "normal" | "recente";
}

export const Container = styled.div<CardAnimeProps>`
  ${(props) =>
    props.type === "destaque" &&
    `
    
    width:  19.5rem;
    height: 35rem;
    margin: 8px;

    image {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding-top: 0.1rem;
      cursor: pointer;
    }
  
    .animeImage {
      border-radius: 0.2rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .episodio{
      display: none;
    }
    
    .nomeAnime{
      background-color: var(--text-body);
      position: absolute;
      bottom: 5.5rem;
      color: var(--text);
      font-size: 2rem;
      text-align: left;
      padding-left: 1rem;
      width: 100%;
      height: 6rem;
      max-height: 6rem;
      max-width: 20rem;
      overflow: hidden;
    }
  
    &:hover {
      .animeImage {
        filter: saturate(135%);
      }
    }
    `}

  ${(props) =>
    props.type === "recente" &&
    `
    width: 20rem;
    height: 15rem;
    margin: 8px;

    image {
      width: 90%;
      height: 75%;
      margin: 0 auto;
      padding-top: 0.1rem;
      cursor: pointer;
    }
  
    .animeImage {
      border-radius: 23px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .nomeAnime,
    .episodio {
      color: var(--text);
      font-size: 1.1rem;
      text-align: left;
      padding-left: 1rem;
      max-height: 2rem;
      max-width: 98%;
      overflow: hidden;
    }
  
    .episodio {
      color: var(--border);
    }
  
    &:hover {
      .animeImage {
        filter: saturate(135%);
        transform: scale(0.95);
        transition: all 450ms ease;
      }
    }
    
  `}

  ${(props) =>
    props.type === "normal" &&
    `
    img{
      width: 270px;
      height: 400px;
    }
  `}

  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;
