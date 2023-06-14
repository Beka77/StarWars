import React from "react";
import SwapiServices from "../../fetch";
import ItemDetails from "../person-details/item-details";
import { Record } from "../person-details/item-details";
import { SwapiServiceConsumer } from "../swapi-services";

const swapiServices = new SwapiServices();
const {
  getPlanet,
  getStarship,
  getPlanetimage,
  getStarshipimage,
} = swapiServices;
const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {(getPerson, getPersonimage) => {
        <ItemDetails
          itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonimage}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye color" />
        </ItemDetails>;
      }}
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetimage}
    >
      <Record field="rotationPeriod" label="RotationPeriod" />
      <Record field="population" label="population" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipimage}
    >
      <Record field="model" label="model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
