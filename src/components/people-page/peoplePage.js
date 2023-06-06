import { Component } from "react";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item -list/item-list";
import SwapiServices from "../../fetch";
import ErrorIndicator from "../ErrorIndicator/errorIndicator";

const Row = ({left, right})=>{
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
}

export default class PeoplePage extends Component {
    swapiServices = new SwapiServices()
  state = {
    selectedPerson: null,
    hasError: false,
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };
  render() {
    if(this.state.hasError){
        return <ErrorIndicator/>

    }
    const itemList = <ItemList onitemselected={this.onPersonSelected}
    getData = {this.swapiServices.getAllPeople}
    renderItem = {({name,gender,birthYear}) => `${name}(${gender},${birthYear})`}         />
    const personDetails = <PersonDetails personId={this.state.selectedPerson} />
    return(
      <Row left={itemList} right={personDetails}  />
    )
  }
}
