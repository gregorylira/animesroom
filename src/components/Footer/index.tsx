import React from "react";
import { Foot } from "./style";

export function Footer() {
  return (
    <Foot>
      <footer className="sociais">
        <span className="title">Redes Sociais</span>
        <div className="cicle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>

      <div className="footer">
        <span>Todos os direitos reservados a @</span>
      </div>
    </Foot>
  );
}
