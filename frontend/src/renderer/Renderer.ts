import $ from "jquery";
import {Room} from "colyseus.js";
import {State} from "../../../common/State/State";
import OutlineHandler from "./OutlineHandler";
import {handleTitleScreen} from "../pagelogic/titleScreen";
import MainRenderer from "./MainRenderer";
import DebugHandler from "../Debug/DebugHandler";
import LeaderboardRenderer from "./LeaderboardRenderer";
import colyhandler, {room} from "../colyhandler/colyhandler";

export let propertyCells: JQuery[] = [];

export let renderInstance: Renderer;

async function create() {
    await OutlineHandler.generateProperties();
    await LeaderboardRenderer.generateLeaderBoard();
}


function resizer() {

    OutlineHandler.handleResize();
    $(window).on("resize", OutlineHandler.handleResize);

}

export async function createRenderer() {
    renderInstance = new Renderer();
    await renderInstance.init();
}

export default class Renderer {
    constructor() {

    }


    async init() {
        await create();
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

    mainScreen() {
        room.onStateChange.once(async (state) => {
            await MainRenderer.init(state);
            room.onStateChange(Renderer.handleStateChange)
        });
    }

    static handleStateChange(state: State) {
        LeaderboardRenderer.update();
    }
}