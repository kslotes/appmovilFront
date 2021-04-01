import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Nombre de usuario"),
    password: Joi.string().required().label("Contraseña"),
  };

  // validacion del schema si fuera necesario
  handleSubmit = (e) => {
    this.doSubmit();
  };
  doSubmit = () => {
    console.log("submitted");
  };

  //va actualizando el state en tiempo real, pensado para despues
  //cuando se haga submit, mando los parametros por url
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    console.log("estado actualizado");
  };

  render() {
    return (
      <div className="container w-50">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <div>
                <h2>Iniciar Sesión</h2>
              </div>
              {this.renderInput("username", "Nombre de usuario", "text")}
              {this.renderInput("password", "Contraseña", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
