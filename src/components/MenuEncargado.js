import React from 'react'
import StyledTable from './StyledTable/StyledTable'
import InfoSesion from './InfoSesion/InfoSesion'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const MenuEncargado = () => {
      return (
            <div className="col-12">
                  <h3>Menu Encargado</h3>
                  <InfoSesion />
                  <StyledTable />
                  <Link to="/">
                        <Button variant="danger" className="mt-5">Cerrar</Button>
                  </Link>
            </div>
            
      );
};

export default MenuEncargado