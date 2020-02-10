const $ = require('jquery');
import {createRenderer} from './renderer/renderer'
import colyhandler from './colyhandler/colyhandler'

init().then();

async function init() {
    let renderBoy = await createRenderer();
    colyhandler.init();
    renderBoy.displayTitleScreen();
}

