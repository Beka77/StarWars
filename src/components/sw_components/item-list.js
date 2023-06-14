import React from "react"
import ItemList from "../item -list/item-list"
import { withData } from "../hoc-helpers"
import SwapiServices from "../../fetch"
const swapiServices = new SwapiServices()
const{getAllPeople,getAllPlanets,getAllStarships}= swapiServices
const withChildfunction = (Wrapped, fn) =>{
    return (props)=>{
        return(
            <Wrapped {...props} >
            {fn}
            </Wrapped>
        )
    }
}

const renderName = ({name})=>{<span>{name}</span>}
const ListWithChildren = withChildfunction(ItemList,renderName)
const PersonList = withData(ListWithChildren,getAllPeople)
const PlanetList = withData(ListWithChildren,getAllPlanets)
const StarshipList = withData(ListWithChildren,getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}