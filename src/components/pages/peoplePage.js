import { Component } from "react";
import Row from "../row/row";
import { PersonDetails, PersonList } from "../sw_components";
export default class PeoplePage extends Component {
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
        left={<PersonList />}
        rigth={<PersonDetails itemId={11} />}
      />
    );
  }
}
