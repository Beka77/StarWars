import React, { Component } from "react";
import "./item-list.css";
import SwapiServices from "../../fetch";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiService = new SwapiServices();
  state = {
    peopleList: null,
  };
  componentDidMount() {
    this.swapiService
    .getAllStarships()
    .then((peopleList)=>{
        this.setState({
            peopleList
        })
    });
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  componentDidCatch(){

  }
  renderItems(arr){
    return arr.map((item)=>{
      const {id}  = item;
      const label = this.props.renderItem(item);
    
      return <li className="list-group-item" key = {id} 
        onClick={()=>this.props.onitemselected(id)}>{label}</li>
    })
  }
  render() {
    const {peopleList}=this.state;
    if(!peopleList){
        return <Spinner/>
    }
    const items = this.renderItems(peopleList)
    return (
      <ul className="Item-list list-group" >
        {items}
      </ul>
    );
  }
}
