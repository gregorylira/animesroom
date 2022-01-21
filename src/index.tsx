import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./global.scss";

import { CardAnime } from "./components/cardAnime";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardAnime
      imagem="https://cdn.myanimelist.net/images/characters/5/354941.jpg"
      nome="Komi-san wa, Comyushou desu."
      ultimoEpisodio="12"
      episodioNovo
      lancamento
    />
    <CardAnime
      imagem="https://cdn.myanimelist.net/images/anime/1943/117882.jpg"
      nome="Kobayashi-san Chi no Maidragon S: Nippon no Omotenashi - Attend wa Dragon Desu"
      ultimoEpisodio="12"
      lancamento={false}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
