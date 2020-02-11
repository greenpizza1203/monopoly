import $ from "jquery"
import {Client, Room} from "colyseus.js";
import renderer, {renderInstance} from "../renderer/Renderer";
import {State} from "../../../common/State/State";

let client: Client;
export let room: Room<State>;
let username: string | number | string[] | undefined = "";

export default class colyhandler {

    static init() {
        client = new Client("ws://localhost:2567");

        // console.log(client);
        // client.joinOrCreate("battle", {/* options */}).then(room => {
        //     console.log("joined successfully", room);
        // }).catch(e => {
        //     console.error("join error", e);
        // });
    }


    static join() {
        return client.joinOrCreate<State>("monopoly_room", {username: username});
    }

    static joined(joinedRoom: Room<State>) {
        room = joinedRoom;
        renderInstance.mainScreen()

    }
}