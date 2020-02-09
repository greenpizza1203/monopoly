import {Room} from "colyseus.js"
import {State} from "../../../common/State/State";
import {Property} from "../../../common/properties/Property";
import {ArraySchema} from "@colyseus/schema"
import {propertyCells} from "./renderer";

function fadeInRegularProperties(properties: ArraySchema<Property>) {
    properties.forEach((it) => {
        propertyCells[it.location].load('html/regular_property.html')
    })
}

export default class MainRenderer {
    static init(state: State) {
        console.log("this is the first state state!", state);
        // console.log(state.properties.length);
        fadeInRegularProperties(state.properties)
    }
}