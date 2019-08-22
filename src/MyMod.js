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
            <Modal {...props}  aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Repositorio
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">

                            <Col xs={12} md={6}>
                                <h2>Información del Repo</h2>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code class="text-primary">Autor</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>{props.owner}</code>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code class="text-primary">Name</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>{props.clickElement.name}</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code class="text-primary">Language</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>{props.clickElement.language}</code>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <code class="text-primary">Fecha de Creación</code>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <code>{props.clickElement.created}</code>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} style={{'max-height': 'calc(60vh - 210px)', 'overflow-y': 'auto'}}>
                                <h2>Comments</h2>
                                <Container >
                                    {props.comments.map(({user,body,date}) =>
                                        <Container className="border border-primary" >
                                            <Row>
                                                <Col xs={12} sm={6}>
                                                    <code class="text-primary">Usuario</code>
                                                </Col>
                                                <Col xs={12} sm={6}>
                                                    <code>{user}</code>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6}>
                                                    <code class="text-primary">Fecha Creación</code>
                                                </Col>
                                                <Col xs={12} sm={6}>
                                                    <code>{date}</code>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6}>
                                                    <code class="text-primary">Comentario</code>
                                                </Col>
                                                <Col xs={12} sm={6}>
                                                    <code>{body}</code>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )}
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


