import React from "react";
import ItemDetails from "../person-details/item-details";
import { Record } from "../person-details/item-details";
import { SwapiServiceConsumer } from "../swapi-services";

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({getPerson, getPersonimage}) => { 
        return <ItemDetails
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
    <SwapiServiceConsumer>
    {({getPlanet, getPlanetimage})=>{ return <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetimage}
    >
      <Record field="rotationPeriod" label="RotationPeriod" />
      <Record field="population" label="population" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>}}
    </SwapiServiceConsumer>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
   {({getStarship, getStarshipimage})=>{ return <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipimage}
    >
      <Record field="model" label="model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>}}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
