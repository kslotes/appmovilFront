import Table from "react-bootstrap/Table";
import styled from "styled-components";

const StyledTab = styled(Table)`
  background: rgba(180, 180, 180);
  font-size: 18px;
  border: none;
  border-radius: 15px;
`;
const StyledTable = () => {
  return (
    <StyledTab striped borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Thomas</td>
          <td>Diaz</td>
          <td>1 2 3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Gustavo</td>
          <td>Iglesias</td>
          <td>1 2 3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Agustin</td>
          <td>Moro</td>
          <td>1 2 3</td>
        </tr>
      </tbody>
    </StyledTab>
  );
};

export default StyledTable;
