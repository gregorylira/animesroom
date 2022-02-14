import styled from "styled-components";

export const Container = styled.div`
  width: 65rem;
  height: 85rem;
  top: 50%;
  left: 50%;
  margin: 5rem auto;
  padding-bottom: 5rem;
`;

export const Tittle = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  color: var(--text);
  h1 {
    font-size: 6rem;
  }
  h3 {
    padding-top: 2rem;
    font-size: 3rem;
  }
`;

export const InputForm = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 2.3125rem;
  background-color: var(--background-header);

  .form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    input,
    textarea {
      border-radius: 1rem;
      background-color: #d5d5d5;
      margin: 2rem;
      padding: 0.5rem 0;
      padding-left: 0.6rem;
      font-size: 1.5rem;
      font-style: italic;
    }
    input::placeholder,
    textarea::placeholder {
      color: var(--border);
    }

    input {
      padding: 2rem 0;
      padding-left: 0.6rem;
      width: 80%;
      height: 3rem;
    }

    input[type="submit"] {
      padding: 0;
      width: 20%;
      height: 6rem;
      font-size: 1.5rem;
      color: var(--preto);

      &:hover {
        background-color: var(--text);
      }
    }
    textarea {
      width: 80%;
      height: 15rem;
    }

    input:focus,
    textarea:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
`;
