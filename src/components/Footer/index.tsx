import React from "react";
import { Foot } from "./style";

export function Footer() {
  return (
    <Foot>
      <div className="sociais">
        <span className="title">Redes Sociais</span>
        <div className="cicle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="footer">
        <span>Todos os direitos reservados a @</span>
      </div>
    </Foot>
  );
}
