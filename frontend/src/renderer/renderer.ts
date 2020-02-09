import $ from "jquery";
import constants from "../constants.json";
import {Room} from "colyseus.js";
import {State} from "../../../common/State/State";
import OutlineHandler from "./OutlineHandler";
import {handleTitleScreen} from "../pagelogic/titleScreen";
import MainRenderer from "./MainRenderer";

export let propertyCells: JQuery[];

function create() {
   propertyCells =  OutlineHandler.generateProperties();
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
        console.log('adding');
        room.onStateChange.once((state) => {
            MainRenderer.init(state)
        });

    }
}