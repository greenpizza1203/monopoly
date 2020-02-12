import {Player} from "../../../../common/Player";
import TemplateEngine from "../../jquery/TemplateEngine";

let template = TemplateEngine('html/leaderboard/leaderboard-row.html');
export default class LeaderboardRowHandler {
    player: Player;

    constructor(_player: Player) {

        this.player = _player
    }


    async createElement(): Promise<JQuery> {
        return template(this.player)
    }

    update() {

        console.log(this.player.money)
    }
}