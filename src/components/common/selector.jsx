const selector = ({ name, opciones, placeholder }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          {name}
        </label>
        <select className="custom-select" name={name}>
          <option value="" selected disabled>Indique</option>
          {opciones.map((opcion) => {
            return (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default selector;
