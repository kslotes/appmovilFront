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
      return (
            <StyledTab striped borderless className="text-center">
                  <TableHeader/>
                  <TableBody/>
            </StyledTab>
      )
}

export default StyledTable;