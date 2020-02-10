import {getProperties} from "../scripts/properties/PropertiesHandler";
import fse from "fs-extra";
import Preinit from "../scripts/Preinit";

run().then();

async function run() {
    await Preinit.preinit();
    const state = {
        properties: getProperties()
    };
    // fse.rmdi('debug/debugState.json');
    fse.mkdirsSync('debug');
    fse.writeFileSync('debug/debugState.json', JSON.stringify(state));
}