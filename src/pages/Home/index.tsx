import React from "react";
import { DisplayMain } from "../../components/DisplayMain";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <DisplayMain></DisplayMain>
      <Footer></Footer>
    </Container>
  );
}
