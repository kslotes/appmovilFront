import Inicio from "./components/Inicio";
import React, { Component } from "react";
import MenuAsistencia from "./components/MenuAsistencia";
import Login from "./components/Login";

import { Switch, Redirect, Route } from "react-router-dom";
import StyledContainer from "./components/StyledContainer";

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Switch>
          <Route path="/inicio" component={Inicio}></Route>
          <Route path ="/login" component= {Login}></Route>
          <Route path="/menu" component={MenuAsistencia}></Route>
          <Redirect from="/" to="/inicio" />
        </Switch>
      </StyledContainer>
    );
  }
}

export default App;
