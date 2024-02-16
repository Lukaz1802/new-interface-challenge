import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import './Form.css';

const FormHeader = () => {
    return (
        <Card>
            <Card.Title>
                <h4 style={ { color: 'blue', marginLeft: 10 } }>Declaración Detallada</h4>
            </Card.Title>
            <Card.Header>
                <Form>
                    <Row>
                        <Form.Label style={ { fontSize: 20, display: 'table' } } column lg={ 1 }>
                            Organismo
                        </Form.Label>
                        <Col lg={ 2 }>
                            <Form.Select defaultValue="Choose...">
                                <option></option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Control />
                        </Col>
                    </Row>
                    <Row style={ { marginTop: 10 } }>
                        <Form.Label style={ { fontSize: 19, display: 'table' } } column lg={ 1 }>
                            Destinación
                        </Form.Label>
                        <Col lg={ 2 }>
                            <Form.Select defaultValue="SIRA">
                                <option>SIRA</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Control value={ "SISTEMA DE IMPORTACIONES DE LA REPUBLICA ARGENTINA" } />
                        </Col>
                    </Row>

                    <Row style={ { marginTop: 10 } }>
                        <Form.Label style={ { fontSize: 19, display: 'table' } } column lg={ 1 }>
                            Declaración
                        </Form.Label>
                        <Col lg={ 3 }>
                            <Form.Control value={ "23001SIRA000011@" } />
                        </Col>
                        <Form.Label style={ { fontSize: 13, display: 'table' } } column lg={ 1 }>
                            Procedicmiento
                        </Form.Label>
                        <Col lg={ 1 }>
                            <Form.Control value={ "N" } />
                        </Col>
                        <Form.Label style={ { fontSize: 13, display: 'table' } } column lg={ 1 }>
                            Despachante
                        </Form.Label>
                        <Col lg={ 1 }>
                            <Form.Control value={ "2017670183" } />
                        </Col>
                        <Col>
                            <Form.Control value={ "BUENADER ALVARO GERMAN" } />
                        </Col>
                    </Row>

                    <Row style={ { marginTop: 10 } }>
                        <Form.Label style={ { fontSize: 16, display: 'table' } } column lg={ 1 }>
                            Import/Export
                        </Form.Label>
                        <Col lg={ 2 }>
                            <Form.Control value={ "30655725829" } />
                        </Col>
                        <Col lg={ 4 }>
                            <Form.Control value={ "FALABELLA S.A" } />
                        </Col>
                        <Col lg={ 2 }>
                        </Col>
                        <Form.Label style={ { fontSize: 18, display: 'contents' } } column lg={ 1 } className='iva-label'>
                            IVA inscripto
                        </Form.Label>
                        <Col lg={ 1 }>
                            <Form.Select defaultValue="S">
                                <option>S</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row style={ { marginTop: 10 } }>
                        <Form.Label style={ { fontSize: 16.5, display: 'table' } } column lg={ 1 }>
                            Compr./Vend.
                        </Form.Label>
                        <Col lg={ 5 }>
                            <Form.Control value={ "30655725829" } />
                        </Col>
                        <Col lg={ 1 }>
                        </Col>
                        <Form.Label style={ { fontSize: 13, display: 'contents' } } column lg={ 1 }>
                            Pais Proc./Dest.
                        </Form.Label>
                        <Col lg={ 1 }>
                            <Form.Select defaultValue="">
                                <option></option>
                            </Form.Select>
                        </Col>
                        <Form.Label style={ { fontSize: 13.5, display: 'contents' } } column lg={ 1 }>
                            Aduana Dest./Sal.
                        </Form.Label>
                        <Col lg={ 1 }>
                            <Form.Select defaultValue="">
                                <option></option>
                            </Form.Select>
                        </Col>
                    </Row>

                </Form>

            </Card.Header>
        </Card>);
};

export default FormHeader;