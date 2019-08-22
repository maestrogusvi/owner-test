import React from 'react';
import Container from "react-bootstrap/es/Container";
import Search from "./Search";
import Repos from "./Repos";
import MyMod from "./MyMod";

export default class Principal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            modalShow:false,
            setModalShow:false,
            owner:'',
            clickElement:{},
            comments:[],
            error:null
        };
        this.handleChangeElements = this.handleChangeElements.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    handleChangeElements(elements) {
        this.setState({
            elements: elements
        });
    }

    openModal(i){
        const res=this.state.elements.find(repo => repo.fullName === i.currentTarget.dataset.id);
        this.setState({ modalShow: true ,
            owner:i.currentTarget.dataset.id,
            clickElement:res
        });

        this.getComments(res.owner,res.name);

    }
    getComments(owner,name) {
        const apiUrl = 'http://localhost/owner-test/src/API/comments.php';

        const formData = new FormData();
        formData.append('owner', owner);
        formData.append('repo', name);
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
                    comments: data
                });
            })
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ error: true });
            });

    }

     render() {

        return (
            <Container className="App">
                <header className="App-header">
                    <h1>Owners-Link Test</h1>
                </header>
                <Container>


                    <Search onFilterTextChange={this.handleChangeElements}/>
                    <Repos elements={this.state.elements} onClickz={this.openModal}/>
                </Container>
                <MyMod size="xl" show={this.state.modalShow} owner={this.state.owner} clickElement={this.state.clickElement} comments={this.state.comments} onHide={() => this.setState({ modalShow:false })} />
            </Container>
        )
    }
}