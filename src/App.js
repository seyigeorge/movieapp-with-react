import React from "react";
import { Switch, Route } from "react-router-dom";
import Stars from "./components/Stars"
import Phone from "./movie";
import Contact from './components/Contact';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Stars} />
        <Route exact path="/content" component={Contact} />

      </Switch>
    </React.Fragment>
  );
}

export default App;
