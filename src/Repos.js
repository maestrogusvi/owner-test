import React from 'react';

export default class Repos extends React.Component{

    constructor(){
        super();
        this.state=({
                repos:[]
            });
    }

    async  getR(search){
        let url="https://api.github.com/";
        let urlSearch="search/repositories/?q="+search;
        let response= await fetch(url+urlSearch);
        let r= await response.json();
            this.setState({
                repos:r
            });
    }

}