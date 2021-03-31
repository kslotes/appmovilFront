import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import StyledContainer from './StyledContainer';

const StyledButton = styled(Button)`
      padding: 1rem;
      font-size: 1.5rem;
      background-color: #3651a8;
      border: none;
      border-radius: 15px;
`

function Inicio() {
      return (
                  <StyledContainer>
                       <h1>¡Bienvenid@!</h1>
                       <br></br>
                       <h5>Para comenzar, presiona el botón</h5>
                       <hr></hr>
                       <StyledButton variant="primary" onClick={() => {alert('Presionadisimo')}}>Comenzar Escaneo</StyledButton>{' '}
                  </StyledContainer>
      );
}

export default Inicio;
