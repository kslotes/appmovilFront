import React, { Component } from "react";
const Input = ({ value, name, label, error, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
