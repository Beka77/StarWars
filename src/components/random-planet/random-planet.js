import React, { Component } from "react";
import R2d2 from "../img/R2-D2.jpg";
import "./random-planet.css";
import SwapiServices from "../../fetch";

class RandomPlanet extends Component {
  swapiService = new SwapiServices();
  state = {
    id: null,
    name: null,
    population: null,
    rotationperion: null,
    diameter: null,
  };
  constructor(){
    super();
    this.updatePlanet()
  }
  updatePlanet() {
    const id = 10;
    this.swapiService.getPlanets(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationperion: planet.rotation_period,
        diameter: planet.diameter,
      });
    });
  }

  render() {
    const {id, name, population, rotationperion, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet_image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>:{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>:{rotationperion}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>:{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
