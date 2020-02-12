import {State} from "../../../common/State/State";
import {fadeInRegularProperties} from "./FieldPropertyRenderer";
import {fadeInLeaderBoard} from "./LeaderboardRenderer";

// let constants = require('../../constants.json');


// console.log(propertyTemplate);


export default class MainRenderer {
    static async init(state: State) {
        await fadeInRegularProperties(state.properties);
        await fadeInLeaderBoard(state.players)
    }
}
