import InfoIzquierda from "./InfoIzquierda";
import InfoDerecha from "./InfoDerecha";
import { FileEarmarkRuled } from "react-bootstrap-icons";

const InfoSesion = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="mr-auto">
          <InfoIzquierda />
        </div>
        <div className="mr-auto">
          <InfoDerecha></InfoDerecha>
        </div>
      </div>
    </div>
  );
};

export default InfoSesion;
