import React from "react";
import { Header } from "../../components/Header";
import { GoogleLogin } from "../../components/Login Components/GoogleLogin";
import { Container } from "./styles";

export function Login() {
  return (
    <>
      <Header />
      <Container>
        <GoogleLogin />
      </Container>
    </>
  );
}
