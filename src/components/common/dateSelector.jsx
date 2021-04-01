import React from "react";
const dateSelector = ({ name }) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text">{name}</label>
      <input class="form-control" type="date" name={name} />
    </div>
  );
};

export default dateSelector;
