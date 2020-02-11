import Cookies from "js-cookie";

export function getUsername() {
    return Cookies.get("username");
}

export function saveUsername(username: string) {
    Cookies.set('username', username);
    console.log(username);
}