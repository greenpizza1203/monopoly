import $ from "jquery";
import {Player} from "../../../common/Player";
import {MapSchema} from "@colyseus/schema"
import LeaderboardRowHandler from "./leaderboard/LeaderboardRowHandler"

let leaderboard: JQuery;
let rows: LeaderboardRowHandler[] = [];

export default class LeaderboardRenderer {
    static async generateLeaderBoard() {
        leaderboard = await getLeaderBoard();
        $("body").append(leaderboard);
    }

    static update() {
        rows.forEach((it) => it.update())
    }
}

export async function fadeInLeaderBoard(players: MapSchema<Player>) {
    for (const id in players) {
        let row = new LeaderboardRowHandler(players[id]);
        leaderboard.append(await row.createElement());
        rows.push(row);
    }

}

// async function addPlayer(player: any) {
//     console.log(player)
// }

async function getLeaderBoard() {
    return $(await $.get('html/leaderboard/leaderboard.html'));
}