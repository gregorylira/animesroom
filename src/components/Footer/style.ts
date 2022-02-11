import styled from "styled-components";

export const Foot = styled.footer`
  width: 100%;
  bottom: 0rem;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text);
  position: absolute;
  bottom: 0;

  .sociais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .title {
      font-size: 1.2rem;
    }

    .cicle {
      display: flex;
      flex-direction: row;
      div {
        cursor: pointer;
        margin: 1rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: gray;
      }
    }
  }

  .footer {
    padding: 0.5rem;
    border-top: 1px solid var(--border);
    text-align: center;
  }
`;
