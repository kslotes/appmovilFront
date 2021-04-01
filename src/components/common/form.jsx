import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
  };

  renderButton(label) {
    return (
      <button className="btn btn-secondary p-2" type="submit">
        {label}
      </button>
    );
  }
  renderInput(name, label, type) {
    const { data } = this.state;
    return (
      <div className="form-group">
        <input
          value={data[name]}
          onChange={this.handleChange}
          type={type}
          name={name}
          label={label}
        />
      </div>
    );
  }
}

export default Form;
