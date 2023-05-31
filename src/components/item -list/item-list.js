import React, { Component } from "react";
import'./item-list.css';
import SwapiServices from "../../fetch";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component{
    swapiServices = new SwapiServices();
    state = {
        peopleList : null,
    };
    componentDidMount(){
        this.swapiServices
        .getAllPeople()
       .then((peopleList)=>{
        this.setState({
            peopleList
        })
       });
    }
    renderItems(arr){
        return arr.map(({id, name})=>{
            return <li className="list-group-item"  key={id} onClick={()=>{
                this.props.onitemselected(id)
            }}>{name}</li>
        })
    }
    render(){
        const {peopleList}=this.state;
        if(!peopleList){
            return<Spinner/>
        }
        const items = this.renderItems(peopleList)
        return(<ul className="Item-list list-group">
            {items}
        </ul>
    )}
}