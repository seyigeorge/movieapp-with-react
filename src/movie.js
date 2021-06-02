import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';
import List from "./List";
import Contacts from './components/Contact';
import { Link } from 'react-router-dom';


class Phone extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            shoes: [],
        };
    }
    componentDidMount() {
        this.setState({loading: true})
        let initialPlanets = [];
        fetch('https://swapi.dev/api/films/')
            .then(response => {
                return response.json();
            }).then(data => {
            initialPlanets = data.results.map((planet) => {
                return planet;
            });
            debugger;
            console.log(initialPlanets);
            this.setState({
                loading: false,
                shoes: initialPlanets,
            });
        });
    }
    render() {
        return (
            <div>
                 <List state={this.state}/>      
            </div>
            
         );
    }
}

export default Phone;

