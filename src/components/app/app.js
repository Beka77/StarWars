import React from "react";
import "./app.css";
import { Component } from "react";
import Header from "../header/header";
import SwapiServices from "../../fetch";
import { SwapiServiceProvider } from "../swapi-services";
import RandomPlanet from "../random-planet/random-planet";
import Row from "../row/row";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList,
} from "../sw_components";
import PeoplePage from "../pages/peoplePage";
import StarshipPage from "../pages/starshipPage";
import PlanetPage from "../pages/planetPage";
export default class App extends Component {
  swapiServices = new SwapiServices();
  state = {
    selectedItem: null,
    hasError: false,
    showRandomPlanet: true,
  };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <SwapiServiceProvider value={this.swapiServices}>
        <div className="App">
          <Header />
          {planet}
          <PeoplePage />
          <StarshipPage />
          <PlanetPage />
          <Row left={<PlanetList />} rigth={<PlanetDetails itemId={11} />} />
          <Row
            left={<StarshipList />}
            rigth={<StarshipDetails itemId={11} />}
          />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
