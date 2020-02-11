import Cookies from "js-cookie"
import $ from "jquery";
import {Client} from "colyseus.js";
import renderer from "../renderer/Renderer";
import buttonHandler from "../inputhandler/buttonHandler";
import {getUsername, saveUsername} from "../cookiehandler/CookieHandler";

(buttonHandler["onPlayClicked"]) = function () {
    let maybeusername = $('#username').val();
    if (typeof maybeusername !== "string") {
        console.error('no username');
        return;
    }

    saveUsername(maybeusername);
    renderer.displayJoinScreen()
};


export function handleTitleScreen() {
    let oldUsername = getUsername();
    if (!oldUsername) return;
    // console.log(oldUsername);
    $('#username').attr('value', oldUsername)

}