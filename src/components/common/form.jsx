import React, { Component } from "react";
import Input from "../input";
import DropdownInput from "../dropdownInput";
import { getGenres } from "../../../starter-code/fakeGenreService";
import { Link } from "react-router-dom";

import Joi from "joi-browser";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    console.log(name, value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details : null;
  };

  validate = () => {
    const { data } = this.state;
    const errors = {};
    const { error } = Joi.validate(data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    for (let item of error.details)
      errors[item.path[0]] = "Este campo no debe estar vacío";
    return errors;
  };

  renderButton(label) {
    return (
      //Si se devuelve null se considera false, caso contrario true por defecto
      <button
        disabled={this.validate()}
        className="btn btn-secondary p-2"
        type="submit"
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, type, error) {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <Input
          value={data[name]}
          onChange={this.handleChange}
          type={type}
          name={name}
          label={label}
          error={errors[name]}
        />
      </div>
    );
  }
  renderDropdownInput(value, name, genres) {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <DropdownInput
          onChange={this.handleChange}
          name={name}
          genres={getGenres()}
          value={data[name]}
          error={errors[name]}
        />
      </div>
    );
  }
}

export default Form;
