import {State} from "../../../common/State/State";
import {Property} from "../../../common/properties/Property";

const locationArray = ["bottom", "left", "top", "right"];
export default class DebugHandler {
    static enabled = true;

    static getDebugState(): (State | any) {

        let require1 = require('../../../debug/debugState.json');
        require1.properties.forEach((prop: any) => {
            prop.getSide = function () {
                console.log(this.location);
                return locationArray[Math.floor(this.location / 10)]
            }
        });
        return require1

    }
}

