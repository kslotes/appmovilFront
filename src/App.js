import Inicio from "./components/Inicio";
import React, { Component } from "react";
import MenuAsistencia from "./components/MenuAsistencia";
import Login from "./components/Login";
import MenuEncargado from './components/MenuEncargado';

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
          <Route path="/encargado" component={MenuEncargado}/>
          <Redirect from="/" to="/inicio" />
        </Switch>
      </StyledContainer>
    );
  }
}

export default App;
