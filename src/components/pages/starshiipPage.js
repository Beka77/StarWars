import { Component } from "react";
import { StarshipList,StarshipDetails } from "../sw_components";
import Row from "../row/row";
export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
  };
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
   const {selectedItem} = this.state
    return (
      <Row left={<StarshipList onitemselected ={this.onItemSelected}
       />} rigth={<StarshipDetails itemId={selectedItem} />} />
    );
  }
}
