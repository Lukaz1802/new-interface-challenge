import React from 'react';
import { Button, ButtonGroup, Card, Col, Form, Nav, Row } from 'react-bootstrap';
import './Form.css';

const FormFooter = () => {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#montos">
          <Nav.Item>
            <Nav.Link href="#general" disabled>General</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#montos">Montos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              Información complementaria
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Facturas" disabled>
              Facturas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#CuenteDeTerceros" disabled>
              Cuenta de Terceros
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              FOB total
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Select defaultValue="Choose...">
                <option>DOL</option>
              </Form.Select>
            </Col>
            <Col lg={ 3 }>
              <Form.Control value={ "14.577,50" } />
            </Col>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Facilidad de Pago
            </Form.Label>
            <Col lg={ 1 }>
              <Form.Select defaultValue="Choose...">
                <option></option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Flete total
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Select defaultValue="Choose...">
                <option></option>
              </Form.Select>
            </Col>
            <Col lg={ 3 }>
              <Form.Control />
            </Col>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Ajuste a incluir
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Control value={ "10.000,00" } />
            </Col>
          </Row>

          <Row>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Seguro total
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Select defaultValue="Choose...">
                <option></option>
              </Form.Select>
            </Col>
            <Col lg={ 3 }>
              <Form.Control />
            </Col>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Ajuste a deducir
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Control />
            </Col>
          </Row>

          <Row style={ { marginTop: 20 } }>
            <Col lg={ 3 }>
            </Col>
            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Porcentaje total
            </Form.Label>
            <Col lg={ 1 }>
              <Form.Control />
            </Col>

            <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 2 }>
              Condic. Venta
            </Form.Label>
            <Col lg={ 2 }>
              <Form.Select defaultValue="Choose...">
                <option></option>
              </Form.Select>
            </Col>
            <Col style={ { marginLeft: '50px' } } className='buttonGroup'>
              <ButtonGroup vertical>
                <Button variant='secondary'>Almacenar</Button>
                <Button variant='success'>Aceptar</Button>
                <Button variant='danger'>Cancelar</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormFooter;