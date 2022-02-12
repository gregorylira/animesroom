import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30%;

  div {
    transition: all 500ms;
  }
  img {
    width: 33.125rem;
    height: 18.75rem;
    position: absolute;
    top: 5rem;
    object-fit: cover;
  }

  .center {
    left: calc(50% - 16rem);
    transform: scale(1);
    z-index: 3;
    transition: 450ms ease 0s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .LeftOne {
    z-index: 2;
    transform: translateX(-100%) scale(0.85);
    transition: 450ms ease 0s;
    &:hover {
      transform: translateX(-100%) scale(0.9);
    }
  }

  .RightOne {
    z-index: 2;
    transform: translateX(0%) scale(0.85);
    transition: 450ms ease 0s;
    &:hover {
      transform: translateX(0%) scale(0.9);
    }
  }

  .LeftTwo {
    z-index: 1;
    transform: translateX(-150%) scale(0.7);
    transition: 450ms ease 0s;
    &:hover {
      transform: translateX(-150%) scale(0.75);
    }
  }

  .RightTwo {
    z-index: 1;
    transform: translateX(50%) scale(0.7);
    transition: 450ms ease 0s;
    &:hover {
      transform: translateX(50%) scale(0.75);
    }
  }
`;
