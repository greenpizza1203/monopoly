import {PropertiesHandler} from "../../common/properties/PropertiesHandler";

export default class Preinit {

    static async preinit() {
        await PropertiesHandler.init();
    }
}