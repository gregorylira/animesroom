import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

import { Visualizador } from "./pages/Visualizador";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visualizador" component={Visualizador} />
          <Route path="/contato" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
