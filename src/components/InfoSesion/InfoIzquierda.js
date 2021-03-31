import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const InfoIzquierda = () => {
      return (

            <div className="float-left">
                  <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Sesion</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                              placeholder="Numero"
                              aria-label="Sesion"
                              aria-describedby="basic-addon1"
                              as="select"
                        >
                              <option selected disabled variant="secondary">Número</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                        </FormControl>
                  </InputGroup>
                  <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Aula</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                              placeholder="Numero"
                              aria-label="Sesion"
                              aria-describedby="basic-addon1"
                              as="select"
                        >
                              <option selected disabled variant="secondary">Número</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                        </FormControl>
                  </InputGroup>
                  <InputGroup>
                        <InputGroup.Prepend>
                              <InputGroup.Text id="basic-date">Fecha</InputGroup.Text>
                              <FormControl
                                    arial-label="Fecha"
                                    type="date"
                              />
                        </InputGroup.Prepend>
                  </InputGroup>
            </div>
      )
}

export default InfoIzquierda;