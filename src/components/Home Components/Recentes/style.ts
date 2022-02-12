import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  height: 50%;
  position: relative;
  padding-top: 30rem;

  .title {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 8.7rem;
    font-size: 2rem;

    .more {
      cursor: pointer;
      font-size: 2rem;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
