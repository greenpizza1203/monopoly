import {PropertiesHandler} from "./properties/PropertiesHandler";

export default class Preinit {

    static async preinit() {
        await PropertiesHandler.init();
    }
}