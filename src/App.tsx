import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./pages/Home";
import { Visualizador } from "./pages/Visualizador";


function App() {
  return (
    <>
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/visualizador" component={Visualizador} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
