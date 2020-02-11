import $ from "jquery";
import {Player} from "../../../common/Player";
import {MapSchema} from "@colyseus/schema"
import template from "../jquery/TemplateEngine"

let leaderboard: JQuery;
let playerTemplate = template('html/players/leaderboard-row.html');
export default class LeaderboardRenderer {
    static async generateLeaderBoard() {
        leaderboard = await getLeaderBoard();
        $("body").append(leaderboard);
    }
}

export async function fadeInLeaderBoard(players: MapSchema<Player>) {
    for (const id in players) {
        await addPlayer(players[id]);
    }

}

async function addPlayer(player: any) {
    let contents: any = await playerTemplate({});
    leaderboard.append(contents);
    console.log(player)
}

async function getLeaderBoard() {
    return $(await $.get('html/players/leaderboard.html'));
}