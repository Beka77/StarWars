import { Component } from "react";
import Row from "../row/row";
import {StarshipDetails, StarshipList } from "../sw_components";
export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
    hasError: false,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        rigth={<StarshipDetails itemId={11} />}
      />
    );
  }
}
