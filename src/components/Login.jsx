import React, { Component } from 'react';
import React, { Component } from 'react';

class Login extends Component {
    state = {
        data: { username: "", password: "" },
        errors: {},
      };
      schema = {
        username: Joi.string().required().label("Nombre de usuario"),
        password: Joi.string().required().label("Contraseña"),
      };

   render() {
    return (
      <div className="container w-50">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div>
                <h1>Vidly Login</h1>
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
