import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #3651a8;
  border: none;
  border-radius: 15px;
`;

function Inicio() {
  return (
    <div class="container">
      <div>
        <h1>¡Bienvenid@!</h1>
      </div>
      <h5>Para comenzar, presiona el botón</h5>
      <div className="row">
        <Link to="menu">
          <StyledButton>Comenzar Escaneo</StyledButton>
        </Link>
        <Link to="login">
          <StyledButton>Ingresar como Encargado </StyledButton>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
