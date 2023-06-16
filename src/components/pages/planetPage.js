import { Component } from "react";
import Row from "../row/row";
import { PlanetDetails, PlanetList } from "../sw_components";
export default class PlanetPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        rigth={<PlanetDetails itemId={11} />}
      />
    );
  }
}
