import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 50%;
  position: relative;
  padding: 5rem 0;
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

  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
