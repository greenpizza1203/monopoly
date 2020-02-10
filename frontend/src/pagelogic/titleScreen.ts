import Cookies from "js-cookie"
import $ from "jquery";

export function saveUsername(username: string) {
    Cookies.set('username', username);
    console.log(username);
}

export function handleTitleScreen() {
    let oldUsername = Cookies.get("username");
    if (!oldUsername) return;
    console.log(oldUsername);
    // console.log()
    $('#username').attr('value', oldUsername)

}