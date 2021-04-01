import React from "react";
const input = ({ value, name, label, onChange, type }) => {
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
    </div>
  );
};

export default input;
