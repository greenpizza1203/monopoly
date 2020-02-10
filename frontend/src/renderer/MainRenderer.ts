import {State} from "../../../common/State/State";
import {Property} from "../../../common/properties/Property";
import {ArraySchema} from "@colyseus/schema"
import {propertyCells} from "./renderer";
import template from '../jquery/templateEngine'
import * as constants from "../constants.json";

// let constants = require('../../constants.json');
var propTemplates: any = {
    bottom: template('html/properties/bottom_property.html'),
    left: template('html/properties/left_property.html'),
    right: template('html/properties/right_property.html'),
    top: template('html/properties/top_property.html')
};


// console.log(propertyTemplate);


function fadeInRegularProperties(properties: ArraySchema<Property>) {
    properties.forEach(async prop => {
        let location = prop.location;

        let side = prop.getSide();
        let htmlStringFunction = await propTemplates[side]({
            color: prop.color,
        });
        propertyCells[location].html(htmlStringFunction)
    })
}

export default class MainRenderer {
    static init(state: State) {
        console.log("this is the first state!", state);
        fadeInRegularProperties(state.properties)
    }
}
