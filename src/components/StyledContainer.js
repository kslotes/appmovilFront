import Container from 'react-bootstrap/Container';
import styled from 'styled-components'


const StyledCont = styled(Container)`
      background-color: rgba(255, 255, 255, 0.3);
      padding: 3rem 5rem 5rem 5rem;
      width: 90%;
      border-radius: 15px;
      margin: auto;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
`
const StyledContainer = ({children}) => {
      return (
            <StyledCont>
                  {children}
            </StyledCont>

      )
}
export default StyledContainer;