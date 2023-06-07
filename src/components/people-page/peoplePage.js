import { Component } from "react";
import ItemDetails from "../person-details/item-details";
import ItemList from "../item -list/item-list";
import SwapiServices from "../../fetch";
import ErrorIndicator from "../ErrorIndicator/errorIndicator";
import ErrorBoundry from "../ErrorIndicator/errorBoundry";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapiServices = new SwapiServices();
  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onitemselected={this.onPersonSelected}
          getData={this.swapiServices.getAllPeople}
          renderItem={({ name, birthYear }) => `${name}(${birthYear})`}
        />
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          getData={this.swapiServices.getPerson}
          itemId={this.state.selectedPerson}
        />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} rigth={personDetails} />
      </ErrorBoundry>
    );
  }
}
