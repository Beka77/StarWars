import { Component } from "react";
import StarShipDetails from "../components/starship-details/starship-details"
import SwapiServices from "../fetch";
import ItemList from "../components/item -list/item-list";
import ErrorIndicator from "../components/ErrorIndicator/errorIndicator";

export default class StarshipPage extends Component{
    swapiServices = new SwapiServices()
    state = {
        selectedStarship: null,
        hasError: false,
    };
    componentDidCatch() {
        console.log("componentDidCatch");
        this.setState({ hasError: true });
    };
    onStarshipSelected = (selectedStarship) =>{
        this.setState({selectedStarship})
    };
    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className="row md2">
                <div className="col-md-6">
                    <ItemList onitemselected = {this.onStarshipSelected}
                    getData = {this.swapiServices.getAllStarships}
                    renderItem = {({name,madel,length}) => `${name}(${madel},${length})`}  />
                </div>
                <div className="col-md-6">
                    <StarShipDetails    starshipId = {this.state.selectedStarship}  />
                </div>
            </div>
        );
    }
}