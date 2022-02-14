import styled from "styled-components";

export const Foot = styled.footer`
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: auto;
  border-top: 1px solid var(--border);
  text-align: center;
  background-color: var(--background-header);
  color: var(--text);

  .sociais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .title {
      text-align: center;
      font-size: 1.6rem;
      padding-bottom: 0.5rem;
    }

    .cicle {
      display: flex;
      flex-direction: row;
      padding-bottom: 5rem;
      div {
        cursor: pointer;
        margin: 1rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--border);
      }
    }
  }

  .footer {
    padding: 0.5rem;
    border-top: 1px solid var(--border);
    text-align: center;
  }
`;
