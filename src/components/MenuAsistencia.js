import Button from "react-bootstrap/Button";
import InfoSesion from "./InfoSesion/InfoSesion";
import StyledContainer from "./StyledContainer";
import StyledTable from "./StyledTable/StyledTable";

const MenuAsistencia = () => {
  return (
    <StyledContainer>
      <InfoSesion />
      <StyledTable />
      <Button
        variant="primary"
        className="align-self-start border border-primary"
      >
        {" "}
        Nuevo Ingreso
      </Button>
    </StyledContainer>
  );
};

export default MenuAsistencia;
