import {State} from "../../../common/State/State";
import {Property} from "../../../common/properties/Property";
import {ArraySchema} from "@colyseus/schema"
import {propertyCells} from "./renderer";
import template from '../jquery/TemplateEngine'
import {fadeInRegularProperties} from "./FieldPropertyRenderer";
import {fadeInLeaderBoard} from "./LeaderboardRenderer";

// let constants = require('../../constants.json');


// console.log(propertyTemplate);


export default class MainRenderer {
    static init(state: State) {
        fadeInRegularProperties(state.properties)
        fadeInLeaderBoard(state.players)
    }
}
