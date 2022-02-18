import React from "react";
import { Container } from "./styles";

export function GoogleLogin() {
  function nav() {
    window.open("https://www.animeschendule.fun/", "_blank");
  }

  return (
    <Container>
      <input type="button" value="login" onClick={nav} />
    </Container>
  );
}
