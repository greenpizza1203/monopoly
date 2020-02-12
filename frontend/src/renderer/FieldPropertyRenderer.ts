import {Property} from "../../../common/properties/Property";
import {propertyCells} from "./Renderer";
import template from "../jquery/TemplateEngine";
import {createElement} from "../jquery/helpermethods";
import {getPropertySide} from "../properties/PropertyHelper";

const propTemplates: any = {
    bottom: template('html/properties/bottom_property.html'),
    left: template('html/properties/left_property.html'),
    right: template('html/properties/right_property.html'),
    top: template('html/properties/top_property.html')
};

export async function fadeInRegularProperties(properties: Property[]) {
    for (const prop of properties) {
        let location = prop.location;
        let side = getPropertySide(prop);
        // console.log(prop.name);
        let htmlStringFunction = await propTemplates[side]({
            color: prop.color,
            names: prop.name.split('\\n')
        });

        // console.log(htmlStringFunction);
        propertyCells[location].append(htmlStringFunction);
    }
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