import React from 'react';
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/es/Container";

export default class Repos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            headers: ["#", "Name","Creator","language"],
            elements: []
        };

    }

    clickMe(e){
        this.props.onClickz(e);
    }

    render() {
        const props= this.props;
        const { headers } = this.state;
        return (
            <Container {...props} className="reposBox mt-2">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        {headers.map(task=><td>{task}</td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {props.elements.map(({name,owner,language,fullName},i) =>
                        <tr key={"repos"+i} data-id={fullName} onClick={this.clickMe.bind(this)}>
                            <th scope="row">{i}</th>
                            <td>{name}</td>
                            <td>{owner}</td>
                            <td>{language}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        )
    }


}