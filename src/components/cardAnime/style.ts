import styled from "styled-components";

interface CardAnimeProps {
  type?: "destaque" | "normal" | "recente";
}

export const Container = styled.div<CardAnimeProps>`
  ${(props) =>
    props.type === "destaque" &&
    `
    width: 18.75rem;
    height: 25rem;
    margin: 8px;
    `}

  ${(props) =>
    props.type === "recente" &&
    `
    width: 18.75rem;
    height: 12.5rem;
    margin: 8px;
    
  `}

  ${(props) =>
    props.type === "normal" &&
    `
    margin: 30px;
  `}
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  border-radius: 23px;

  overflow: hidden;

  cursor: pointer;

  img {
    transition: height 1.2s;
    width: 100%;
    height: 65%;
    object-fit: cover;
  }
  .title {
    color: #fff;
    font-size: 1rem;
    text-align: center;
    margin: 13px 30px 0px 30px;
    max-height: 3.3rem;
    overflow: hidden;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 5px;
    color: #fbbbbb;
    text-align: center;
    padding-top: 10px;

    span {
      padding-bottom: 5px;
    }
  }
  .em-lancamento {
    position: relative;
    display: none;
    top: -17rem;
    transform: translateY(-17rem);
    width: 13rem;
    height: 30px;
    object-fit: cover;
  }
  .finalizado {
    display: none;
  }

  &:hover {
    .em-lancamento {
      display: inline;
      transform: translateY(-6rem);
    }
    .title {
      display: none;
    }
    footer {
      display: none;
    }

    img {
      filter: saturate(135%);
    }
    .animeImage {
      height: 400%;
    }
  }
`;
