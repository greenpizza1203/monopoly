import $ from "jquery";
import constants from "../constants.json";
import {Room} from "colyseus.js";
import {State} from "../../../common/State/State";
import OutlineHandler from "./OutlineHandler";
import {handleTitleScreen} from "../pagelogic/titleScreen";
import MainRenderer from "./MainRenderer";
import DebugHandler from "../Debug/DebugHandler";

export let propertyCells: JQuery[];

function create() {
    propertyCells = OutlineHandler.generateProperties();
}


function resizer() {

    OutlineHandler.handleResize();
    $(window).on("resize", OutlineHandler.handleResize);

}

export default class Renderer {
    constructor() {
        this.init()
    }


    init() {
        create();
        resizer();
        if (DebugHandler.enabled) {
            MainRenderer.init(DebugHandler.getDebugState())
        }
    }


    displayTitleScreen() {
        $('#centerCell').load('html/titleScreen.html', () => {
            handleTitleScreen()
        });

    }

    static displayJoinScreen() {
        $('#centerCell').load('html/joinScreen.html')
    }

    static mainScreen(room: Room<State>) {
        room.onStateChange.once((state) => {
            MainRenderer.init(state)
        });

    }
}