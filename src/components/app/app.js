import React from "react";
import './app.css'
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import PeoplePage from "../people-page/peoplePage";
import StarshipPage from "../../starshipPage/starshipPage";
import SwapiServices from "../../fetch";

export default class App extends Component{
    componentDidUpdate(){
        console.log(SwapiServices.getAllStarships())
    }
    render(){
        return<div className="App">
            <Header/>
            <RandomPlanet/>
            <PeoplePage/>
            <StarshipPage/>
        </div>
    }
}
