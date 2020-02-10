import {ArraySchema} from "@colyseus/schema";
import {Property} from "../../../common/properties/Property";
import {propertyCells} from "./renderer";
import template from "../jquery/TemplateEngine";
import {createElement} from "../jquery/helpermethods";

var propTemplates: any = {
    bottom: template('html/properties/bottom_property.html'),
    left: template('html/properties/left_property.html'),
    right: template('html/properties/right_property.html'),
    top: template('html/properties/top_property.html')
};

export function fadeInRegularProperties(properties: ArraySchema<Property>) {
    properties.forEach(async prop => {
        let location = prop.location;

        let side = prop.getSide();
        let htmlStringFunction = await propTemplates[side]({
            color: prop.color,
        });
        // console.log(propertyCells)
        propertyCells[location].html(htmlStringFunction)
    })
}

export function handleAddingProperty(outerBox: JQuery, i: number) {

    let td = createElement('td');
    td.addClass((i % 2 == 0) ? 'dark' : 'light');
    if (i <= 10) {
        outerBox.children().last().prepend(td)
    } else if (i <= 19) {
        outerBox.children().eq(20 - i).prepend(td)
    } else if (i <= 30) {
        outerBox.children().first().append(td)
    } else {
        outerBox.children().eq(40 - i).append(td)
    }
    td.addClass('property');
    td.attr('id', "property-" + i);
    return td;
}

export function handleAddingProperties(outerBox: JQuery) {

    for (let i = 0; i < 40; i++) {
        propertyCells.push(handleAddingProperty(outerBox, i));
    }
}