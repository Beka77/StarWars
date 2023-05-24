import React from "react";
import './app.css'
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import PersonDetails from "../person-details/person-details";

export default class App extends Component{
    render(){
        return<div className="App">
            <RandomPlanet/>
            <PersonDetails/>

        </div>
    }
}
