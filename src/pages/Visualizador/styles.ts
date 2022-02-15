import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  #disqus_thread {
    width: 70%;
    margin: 0 9%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 70%;
  margin: 6% 9%;

  h2 {
    font-size: 1.5rem;
    color: var(--text);
    margin-bottom: 1rem;
  }

  aside {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
    height: 600px;

    iframe {
      width: 90rem;
      height: 37.5rem;
    }
    .episodios-direita-video {
      max-height: 600px;
      width: 50%;
      overflow: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .botões-next-previous {
    width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    button {
      padding: 1rem 1.5rem;
      border-radius: 0.25rem;
      border: 0;
      background: var(--red);
      color: var(--text);
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
export const Recomendados = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: var(--text);
  width: 100%;

  .lista-recomendados {
    overflow: scroll;
    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    gap: 1rem;

    img {
      object-fit: cover;
      margin-bottom: 0.25rem;
      border-radius: 0.25rem;
    }
    span {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
  }
`;
