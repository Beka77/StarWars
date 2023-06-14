import React from "react";
import "./app.css";
import { Component } from "react";
// import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
// import PeoplePage from "../people-page/peoplePage";
import SwapiServices from "../../fetch";
// import Row from "../row/row";
// import ItemDetails from "../person-details/item-details";
// import ItemList from "../item -list/item-list";
import { SwapiServiceProvider } from "../swapi-services";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  // PlanetList,
  StarshipDetails,
  // StarshipList
} from '../sw_components'
export default class App extends Component {
  swapiServices = new SwapiServices();
  state = {
    selectedItem: null,
    hasError: false,
    showRandomPlanet: true,
  };
  // toggleRandomPlanet = () => {
  //   this.setState((state) => {
  //     return { showRandomPlanet: !state.showRandomPlanet };
  //   });
  // };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const { getPerson, getStarship, getPersonimage, getStarshipimage } =
      this.swapiServices;
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
   
    // const starShipDetails = (
    //   <ItemDetails
    //     itemId={5}
    //     getData={getStarship}
    //     getImageUrl={getStarshipimage}
    //   >
    //     <Record field="madel" label="Model" />
    //     <Record field="length" label="Length" />
    //   </ItemDetails>
    // );
    return (
      <SwapiServiceProvider value={this.swapiServices} >
      <div className="App">
        <Header />
        <PersonDetails itemId={11}/>
        <PlanetDetails itemId={5}/>
        <StarshipDetails itemId={9}/>
        <PersonList></PersonList>
      </div>
      </SwapiServiceProvider>
    );
  }
}
