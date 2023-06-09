import React, { Component } from "react";
import "./random-planet.css";
import PropTypes from 'prop-types'
import SwapiServices from "../../fetch";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../ErrorIndicator/errorIndicator";

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval:10000,
  }
  static propTypes ={
    updateInterval : PropTypes.number
  //   (props,propName, componentName)=>{
  //     const value = props[propName];
  //     if(value === 'number'&& !isNaN(value)){
  //       return null;
  //     }
  //     return new TypeError(`${componentName}:${propName} must be number`)
  //   }
  }
  swapiService = new SwapiServices();
  state = {
    planet: {},
    loading: true,
    error: false,
  }; 
  componentDidMount(){
    const {updateInterval} = this.props
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet,updateInterval)
  }
  onPLanetLoaded = (planet)=>{
    this.setState({planet,
    loading:false,
    error: false})
  }
  onError = ()=>{
    this.setState({error:true,
    loading: false,})
  }

  updatePlanet =()=> {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
    .getPlanet(id)
    .then(this.onPLanetLoaded)
    .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;
    const hasData = !(loading || error)
    const errorMessage = error ?<ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/>: null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
    
      <div className="random-planet jumbotron rounded">
        {
          errorMessage
        }
        {spinner}
        {content}
      </div>

     );
  }
}

export default RandomPlanet;

const PlanetView = ({planet} )=>{
  const {id, name, population, rotationperiod, diameter } = planet;

  return  <React.Fragment> <img
  className="planet_image"
  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
  alt=""
/>


<div>
  <h4>{name}</h4>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <span className="term">Population</span>
      <span>{population}</span>
    </li>
    <li className="list-group-item">
      <span className="term">Rotation Period</span>
      <span>{rotationperiod}</span>
    </li>
    <li className="list-group-item">
      <span className="term">Diameter</span>
      <span>{diameter}</span>
    </li>
  </ul>
  <button className="btn-warning">Toggle random planet</button>
</div> </React.Fragment>
}