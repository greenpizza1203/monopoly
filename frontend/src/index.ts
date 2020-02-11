const $ = require('jquery');
import {createRenderer, renderInstance} from './renderer/Renderer'
import colyhandler from './colyhandler/colyhandler'

init().then();

async function init() {
    await createRenderer();
    colyhandler.init();
    renderInstance.displayTitleScreen();
}

