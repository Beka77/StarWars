import React from "react";
import './app.css'
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import PersonDetails from "../person-details/person-details";
import Header from "../header/header";
import ItemList from "../item -list/item-list";

export default class App extends Component{
    render(){
        return<div className="App">
            <Header/>
            <RandomPlanet/>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>

        </div>
    }
}
