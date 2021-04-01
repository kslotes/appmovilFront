import Button from "react-bootstrap/Button";
import InfoSesion from "./InfoSesion/InfoSesion";
import StyledContainer from "./StyledContainer";
import StyledTable from "./StyledTable/StyledTable";
import { Link } from "react-router-dom";


const MenuAsistencia = () => {
      return (
            <div className="col-12">
                  <h3>Registro Asistencia</h3>
                  <InfoSesion />
                  <StyledTable />
                  <Button variant="primary" className="align-self-start border border-primary">Nuevo Ingreso</Button>
                  <br />
                  <Button variant="success" className="float-right mt-5" onClick={() => { alert("Confirmadisimo") }}>Confirmar Asistencia</Button>
                  <Link to="/">
                        <Button variant="danger" className="mt-5">Cerrar</Button>
                  </Link>
            </div>
      );
};

export default MenuAsistencia;
