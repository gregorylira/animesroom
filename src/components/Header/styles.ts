import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  background-color: var(--background-header);
`;

export const Title = styled.div`
  font-size: 1.5rem;
  padding-left: 2rem;
  width: 20rem;
  color: var(--red);

  span {
    color: var(--text);
    opacity: 35%;
  }
`;

export const Login = styled.div`
  cursor: pointer;
  margin: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--border);
`;
