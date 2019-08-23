import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/es/Container";

export default class Search extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            elements:[],
            error:null
        }
        ;

    }

    handleChange(event) {
        this.setState({inputValue: event.target.value})
    }


    getRepos() {
        const apiUrl = 'http://localhost/owner-test/src/API/repos.php';

        const formData = new FormData();
        formData.append('buscar', this.state.inputValue);

        const options = {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json'}
        }
        fetch(apiUrl, options)
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else return response.json();
            })
            .then((data) => {
                this.setState({
                    elements: data
                });
                this.props.onFilterTextChange(data);
            })
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ requestFailed: true });
            });

    }

    render() {

        return(
            <Container>
                <Row className=" justify-content-center">
                    <h2>Favor de poner su busqueda</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="mb-2">
                        <FormControl value={this.state.inputValue} onChange={this.handleChange.bind(this)} className="txtBuscar"/>
                    </Col>
                    <Col xs={6} md={2}>
                        <Button  onClick={this.getRepos.bind(this)} className="btnSearch btn-primary btn-lg">Search</Button>
                    </Col>
                </Row>
            </Container>

        )
    }

}