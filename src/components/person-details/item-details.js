import React, { Component } from "react";
import "./person-details.css";
import SwapiServices from "../../fetch";

const Record = ({item, field,label})=>{
  return <li className="list-group-item">
  <span className="term">{field}</span>
  <span>{label}</span>
</li>
}
export {Record}

export default class ItemDetails extends Component {
  swapiServices = new SwapiServices()
  state={
    item:{},
    image: null,
  }
  componentDidMount(){
    this.updateItem();
  }
  updateItem(){
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId){
      return
    }
    getData(itemId)
    .then((item)=>{
      this.setState({item,
      image: getImageUrl(item)})
    })
  }
  componentDidUpdate(prevProps){
    if(this.props.itemId != prevProps.itemId){
      this.updatePerson()
    }
  }
  renDerItems(arr) {
    return arr.map((item) => {
      const {fieild,label } = item;

      return (
        <li className="list-group-item">
  <span className="term">{fieild}</span>
  <span>{label}</span>
</li>
      );
    });
  }
  render() {
    const {item,image}=this.state;
    const {name,gender,birthYear,eyeColor} = item
    if(!this.state.item){
      return <span>Select a person from list</span>
    }
    return (
      
      <div className="person-details card">
        <img
          className="person-image"
          src={image}
          alt=""
        />
        <div className=" card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {this.props.children}                
            </ul>
        </div>
      </div>
    );
  }
}
