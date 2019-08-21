import React from 'react';
import './App.css';
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/es/FormControl";
import MyMod from "./MyMod";
import Button from "react-bootstrap/Button";


function App() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container className="App">
      <header className="App-header">
            <h1>Owners-Link Test</h1>
      </header>
        <Container>

            <Row className=" justify-content-center">
                <h2>Favor de poner su busqueda</h2>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="mb-2">
                    <FormControl  className="txtBuscar"/>
                </Col>
                <Col xs={6} md={2}>
                    <Button  className="btnSearch btn-primary btn-lg">Search</Button>
                </Col>
                <Col xs={6} md={2}>
                    <Button  className="btnClear btn-danger btn-lg">Clear</Button>
                </Col>

            </Row>
            <Container className="reposBox mt-2">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Creator</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr onClick={() => setModalShow(true)}>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr onClick={() => setModalShow(true)}>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr onClick={() => setModalShow(true)}>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
        <MyMod size="xl" show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default App;
