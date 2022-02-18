import React from "react";
import { Link } from "react-router-dom";
import { Head, Login, Title } from "./styles";

export function Header() {
  return (
    <Head>
      <Title>
        <Link className="link" to="/">
          ANIMES <span>ROOM</span>
        </Link>
        <Link className="contato" to="/contato">
          Contato
        </Link>
        <Link className="visualizador" to="/visualizador">
          Visualizador
        </Link>
      </Title>
      <Link className="login" to="/login">
        <Login></Login>
      </Link>
    </Head>
  );
}
