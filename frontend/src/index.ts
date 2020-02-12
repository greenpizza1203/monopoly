import DebugHandler from "./debug/DebugHandler";

const $ = require('jquery');
import {createRenderer, renderInstance} from './renderer/Renderer'
import colyhandler from './colyhandler/colyhandler'

init().then();

async function init() {
    await createRenderer();
    colyhandler.init();
    if (!DebugHandler.enabled) {
        renderInstance.displayTitleScreen();
    } else {
        await DebugHandler.doFakeStuff()
    }
}

