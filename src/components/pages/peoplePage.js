import { Component } from "react";
import { PersonList,PersonDetails } from "../sw_components";
import Row from "../row/row";
export default class PeoplePage extends Component {
  // state = {
  //   selectedItem: null,
  // };
  // onItemSelected = (selectedItem) => {
  //   this.setState({ selectedItem });
  // };
  render() {
   const {selectedItem, onitemselected} = this.props
    return (
      <Row left={<PersonList onitemselected = {onitemselected} />} rigth={<PersonDetails itemId={selectedItem} />} />
    );
  }
}
