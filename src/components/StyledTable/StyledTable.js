import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

const StyledTab = styled(Table)`
      background: rgba(220, 220, 220);
      font-size: 18px;
      border: none;
      border-radius: 15px;
`


const StyledTable = () => {

      const campos = ["ID", "Nombre", "Apellido", "Presente", "Acciones"]
      const registros = [
            {
                   id: 1,
                   nombre: 'Agustin',
                   apellido: 'Moro'
            },
            {
                  id: 2,
                  nombre: 'Gustavo',
                  apellido: 'Iglesias',
            },
            {
                  id: 3,
                  nombre: 'Thomas',
                  apellido: 'Diaz',
            }
      ]

      return (
            <StyledTab striped borderless className="text-center">
                  <TableHeader campos={campos}/>
                  <TableBody registros={registros}/>
            </StyledTab>
      )
}

export default StyledTable;