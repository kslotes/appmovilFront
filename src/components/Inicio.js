import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import StyledContainer from './StyledContainer'

const StyledButton = styled(Button)`
      padding: 1rem;
      font-size: 1.3rem;
      background-color: #3651a8;
      border: none;
      border-radius: 15px;
`

function Inicio() {
      return (
            <StyledContainer>
                  <h1>¡Bienvenid@!</h1><br/>
                  <h5>Para comenzar, presiona el botón</h5><br/>
                  <Link to="menu">
                        <StyledButton>Comenzar Escaneo</StyledButton>{' '}
                  </Link>
            </StyledContainer>
      );
}

export default Inicio;
