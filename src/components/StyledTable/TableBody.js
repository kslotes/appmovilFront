import { TdAcciones } from './TdAcciones'
import {Check2Square} from 'react-bootstrap-icons';

export const TableBody = ({registros}) => {
      console.log(registros)
      return (
            <tbody>
                  <tr>
                        <td>{registros[0].id}</td>
                        <td>{registros[0].nombre}</td>
                        <td>{registros[0].apellido}</td>
                        <td><Check2Square/></td>
                        <TdAcciones />
                  </tr>
                  <tr>
                        <td>{registros[1].id}</td>
                        <td>{registros[1].nombre}</td>
                        <td>{registros[1].apellido}</td>
                        <td><Check2Square/></td>
                        <TdAcciones />
                  </tr>
                  <tr>
                        <td>{registros[2].id}</td>
                        <td>{registros[2].nombre}</td>
                        <td>{registros[2].apellido}</td>
                        <td><Check2Square/></td>
                        <TdAcciones />
                  </tr>
            </tbody>
      )
}