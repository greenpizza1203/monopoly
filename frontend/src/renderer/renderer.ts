import $ from "jquery";
import {Room} from "colyseus.js";
import {State} from "../../../common/State/State";
import OutlineHandler from "./OutlineHandler";
import {handleTitleScreen} from "../pagelogic/titleScreen";
import MainRenderer from "./MainRenderer";
import DebugHandler from "../Debug/DebugHandler";
import LeaderboardRenderer from "./LeaderboardRenderer";

export let propertyCells: JQuery[] = [];

async function create() {
    await OutlineHandler.generateProperties();
    await LeaderboardRenderer.generateLeaderBoard();
}


function resizer() {

    OutlineHandler.handleResize();
    $(window).on("resize", OutlineHandler.handleResize);

}

export async function createRenderer(): Promise<Renderer> {
    let renderer = new Renderer();
    await renderer.init();
    return renderer;
}

export default class Renderer {
    constructor() {

    }


    async init() {
        await create();
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