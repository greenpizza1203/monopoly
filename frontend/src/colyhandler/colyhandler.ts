import $ from "jquery"
import {Client, Room} from "colyseus.js";
import renderer from "../renderer/renderer";
import {State} from "../../../common/State/State";
import {saveUsername} from "../pagelogic/titleScreen";

let client: Client;
let room: Room<State>;
let username: string | number | string[] | undefined = "";
(window as any).colyhandler = {
    onPlayClicked: function () {
        client = new Client("ws://localhost:2567");
        username = $('#username').val();
        if (typeof username !== "string") {
            console.error('no username');
            return;
        }
        saveUsername(username);
        renderer.displayJoinScreen()
    },
    onPublicJoinClicked: async function () {
        let roomPromise = client.joinOrCreate<State>("monopoly_room", {username: username});
        let $join = $('.join-button');
        const originalText = $join.text();
        $join.attr('disabled', 'true');
        try {
            room = await roomPromise;
            // console.log('joined');

            renderer.mainScreen(room)

        } catch (e) {
            $join.removeAttr('disabled');
            $join.text(originalText);
            throw e;
        }
    }
};
export default class colyhandler {

    static init() {
        // console.log(client);
        // client.joinOrCreate("battle", {/* options */}).then(room => {
        //     console.log("joined successfully", room);
        // }).catch(e => {
        //     console.error("join error", e);
        // });
    }


}