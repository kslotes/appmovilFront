export const TableHeader = ({campos}) => {
      return (
            <thead>
                  <tr>
                        <th>{campos[0]}</th>
                        <th>{campos[1]}</th>
                        <th>{campos[2]}</th>
                        <th>{campos[3]}</th>
                        <th>{campos[4]}</th>
                  </tr>
            </thead>
      )
}