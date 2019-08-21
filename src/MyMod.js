import React from 'react';
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class MyMod extends React.Component{

    render() {
        const props= this.props;
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Repositorio
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">

                            <Col xs={12} md={4}>
                                <h2>Información del Repo</h2>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Autor</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Armando</code>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Licencia</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Armando</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Tema</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Armando</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Fecha de Creación</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Armando</code>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={4} style={{'max-height': 'calc(50vh - 210px)', 'overflow-y': 'auto'}}>
                                <h2>Comments</h2>
                                <Container >
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Usuario</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Armando</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Fecha Creación</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>2017/03/04</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Comentario</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Esto es un comentario</code>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col xs={12} md={4} style={{'max-height': 'calc(50vh - 210px)', 'overflow-y': 'auto'}}>
                                <h2>Commits</h2>
                                <Container >
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Usuario</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Armando</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Fecha Creación</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>2017/03/04</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code>Descripcion</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>Esto es un comentario</code>
                                    </Col>
                                </Row>
                            </Container>
                                <Container >
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Usuario</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Armando</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Fecha Creación</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>2017/03/04</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Descripcion</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Esto es un comentario</code>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container >
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Usuario</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Armando</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Fecha Creación</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>2017/03/04</code>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <code>Descripcion</code>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <code>Esto es un comentario</code>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}


