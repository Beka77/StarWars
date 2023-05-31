import React from "react";
import './app.css'
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import PersonDetails from "../person-details/person-details";
import Header from "../header/header";
import ItemList from "../item -list/item-list";

export default class App extends Component{
    state={
        selectedPerson:null
    }
    onpersonSelected = (id)=>{
        this.setState({
            selectedPerson:id
        })
    }
    render(){
        return<div className="App">
            <Header/>
            <RandomPlanet/>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onitemselected = {this.onpersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
            </div>

        </div>
    }
}