import Inicio from "./components/Inicio";
import React, { Component } from "react";
import MenuAsistencia from "./components/MenuAsistencia";
import { Switch, Redirect, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container">
        <div>
          <Switch>
            <Route path="/inicio" component={Inicio}></Route>
            <Route path="/menu" component={MenuAsistencia}></Route>
            <Redirect from="/" to="/inicio" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
