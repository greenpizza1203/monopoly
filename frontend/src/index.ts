const $ = require('jquery');
import Renderer from './renderer/renderer'
import colyhandler from './colyhandler/colyhandler'

let renderBoy = new Renderer();
init();

function init() {
    colyhandler.init()
    renderBoy.displayTitleScreen();
}

