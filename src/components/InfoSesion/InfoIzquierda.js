import FormControl from "react-bootstrap/FormControl";
import DateSelector from "../common/dateSelector";
import Selector from "../common/selector";
import React, { Component } from "react";

class InfoIzquierda extends Component {
  state = {
    opciones: [1, 2, 3, 4],
    aula: {},
    sesion: {},
  };
  render() {
    return (
      <div className="row">
        <div className="p-2">
          <Selector name="Sesiones" opciones={this.state.opciones}></Selector>
        </div>
        <div className="p-2">
          <Selector name="Aulas" opciones={this.state.opciones}></Selector>
        </div>
        <div className="p-2">
          <DateSelector name="Fecha" />
        </div>
      </div>
    );
  }
}

export default InfoIzquierda;
