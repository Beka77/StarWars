import React, { Component } from "react";
import "./app.css";
import Header from "../header/header";
import SwapiServices from "../../fetch";
import { SwapiServiceProvider } from "../swapi-services-context";
import RandomPlanet from "../random-planet/random-planet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList,
} from "../sw_components";
import Row from "../row/row";
import PeoplePage from "../pages/peoplePage";

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
    // const planet = this.state.showRandomPlanet ? <RandomPlanet updateInterval ={20000} /> : null;

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
      <SwapiServiceProvider value={this.swapiServices}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <RandomPlanet updateInterval={20000} />
            <Routes>  
              <Route path="/" 
              render={()=><h2>Welcome to StarWars page </h2>} 
              exact/>
              <Route path="/people" element={<PeoplePage />} />
              <Route
                path="/people/:id"
                element= {<PersonDetails itemId={this.state.selectedItem} />
                }
              />

              <Route path="/starships" element={<PeoplePage />} />
              <Route path="/planets" element={<PeoplePage />} />
            </Routes>
            {/* <PeoplePage/>
          <Row left={<PlanetList />} rigth={<PlanetDetails itemId={11} />} />
          <Row left={<StarshipList />} rigth={<StarshipDetails itemId={9} />} /> */}
          </div>
        </BrowserRouter>
      </SwapiServiceProvider>
    );
  }
}
