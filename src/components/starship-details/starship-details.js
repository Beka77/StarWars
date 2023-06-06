import React, { Component } from "react";
import "./starship-details.css";
import SwapiServices from "../../fetch";

export default class StarShipDetails extends Component {
  swapiServices = new SwapiServices();
  state = {
    starship: {},
  };
  componentDidMount() {
    this.updateStarship();
  }
  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }
    this.swapiServices.getStarship(starshipId).then((starship) => {
      this.setState({ starship });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.starshipId !== prevProps.starshipId) {
      this.updateStarship();
    }
  }
  render() {
    const {
      starship: { id, name, madel, length },
    } = this.state;
    if (!this.state.starship) {
      return <span>Select a starship from list</span>;
    }
    return (
      <div className="starship-details card">
        <img
          className="starship-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt=""
        />
        <div className=" card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>{madel}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Length</span>
              <span>{length}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
