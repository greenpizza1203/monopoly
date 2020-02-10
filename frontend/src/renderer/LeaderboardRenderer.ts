import $ from "jquery";
import {Player} from "../../../common/Player";
import {MapSchema} from "@colyseus/schema"
import template from "../jquery/TemplateEngine"

let leaderboard: JQuery;
let playerTemplate = template('html/players/leaderboard-row.html');
export default class LeaderboardRenderer {
    static async generateLeaderBoard() {
        leaderboard = await createLeaderboard();

        $("body").append(leaderboard);
    }
}

export async function fadeInLeaderBoard(players: MapSchema<Player>) {
    await (players.forEach(async (it: any) => {
        // addPlayerRow(it)
    }));
    let message = await playerTemplate({"playerColor": ' #030'});
    leaderboard.append()
    console.log(message)
}

export async function createLeaderboard() {
    let message = await getLeaderBoard();
    return $(message)

}

async function getLeaderBoard() {
    return $.get('html/players/leaderboard.html');
}