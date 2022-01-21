import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import "./global.scss";

import {CardAnime} from './components/cardAnime';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardAnime 
      imagem='https://cdn.myanimelist.net/images/characters/5/354941.jpg?_gl=1*rlsxe3*_ga*MTE0NDQ3NDg5LjE2MzQ4MzYyOTE.*_ga_26FEP9527K*MTY0Mjc3OTU1OS4xMC4xLjE2NDI3Nzk4OTIuMjk.' 
      nome= "Komi-san wa, Comyushou desu." genres="Comedy, Slice of Life." 
      estudio='OLM' duracao='24 min' ultimoEpisodio='12' 
      episodioNovo 
    />
  </React.StrictMode>,
  document.getElementById('root')
);
