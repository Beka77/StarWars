import React, { Component } from "react";
import "./person-details.css";
import SwapiServices from "../../fetch";

export default class PersonDetails extends Component {
  swapiServices = new SwapiServices()
  state={
    person:{},
  }
  componentDidMount(){
    this.updatePerson();
  }
  updatePerson(){
    const {personId} = this.props;
    if(!personId){
      return
    }
    this.swapiServices.getPerson(personId)
    .then((person)=>{
      this.setState({person})
    })
  }
  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePerson()
    }
  }
  render() {
    const {person:{id,name,gender,birthYear,eyeColor}}=this.state
    if(!this.state.person){
      return <span>Select a person from list</span>
    }
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
        <div className=" card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Birth year</span>
                    <span>{birthYear}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">eye Color</span>
                    <span>{eyeColor}</span>
                </li>
                
            </ul>
        </div>
      </div>
    );
  }
}
