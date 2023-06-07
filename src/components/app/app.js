import React from "react";
import './app.css'
import { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import PeoplePage from "../people-page/peoplePage";
import SwapiServices from "../../fetch";
import ErrorBoundry from "../ErrorIndicator/errorBoundry";

export default class App extends Component{
    swapiServices = new SwapiServices()
    state = {
      selectedPerson: null,
      hasError: false,
      showRandomPLanet: true,
    };
    toggleRandomPlanet = () =>{
      this.setState((state)=>{
        return {showRandomPLanet: !state.showRandomPLanet}
      })
    }
    componentDidCatch() {
      console.log("componentDidCatch");
      this.setState({ hasError: true });
    }
    onPersonSelected = (selectedPerson) => {
      this.setState({ selectedPerson });
    };
    
      
    render(){
       const planet = this.state.showRandomPLanet?   <RandomPlanet/>: null
        return<ErrorBoundry className="App">
            <Header/>
            <PeoplePage/>
        </ErrorBoundry>
    }
}
