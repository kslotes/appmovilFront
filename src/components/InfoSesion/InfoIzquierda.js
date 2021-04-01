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
            <div className="d-flex">
                <div className="p-2 col-3">
                    <Selector name="Sesion" opciones={this.state.opciones}></Selector>
                </div>
                <div className="p-2 col-3">
                    <Selector name="Aula" opciones={this.state.opciones}></Selector>
                </div>
                <div className="p-2 col-3">
                    <Selector name="Clase" opciones={this.state.opciones}></Selector>
                </div>
                <div className="p-2 col-5 ml-5">
                    <DateSelector name="Fecha" />
                </div>
            </div>
        );
    }
}

export default InfoIzquierda;
