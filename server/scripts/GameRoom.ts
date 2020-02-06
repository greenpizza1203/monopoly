import {Client, Room} from "colyseus";
import {Player} from "../../common/Player";
import {State} from "../../common/State/State"
import {Move, MoveType} from "../../common/Move";
import {Dice} from "../../common/State/Dice";


export class GameRoom extends Room<State> {
    onCreate() {
        this.setState(new State());
    }

    onJoin(client: Client, options: PlayerOptions) {
        this.state.players[client.sessionId] = new Player(options);
    }

    onLeave(client: Client) {
        delete this.state.players[client.sessionId];
    }

    onMessage(client: Client, data: Move) {
        let thisPlayer = this.state.players[client.sessionId];


        if (this.state.currentTurn !== thisPlayer)
            return;
        if (data.type == MoveType.ROLL) {
            this.state.currentTurn = undefined;
            this.requestDiceRoll(thisPlayer)
        }
    }

    requestDiceRoll(thisPlayer: Player) {
        let dice = this.state.dice;
        dice.startRolling();
        this.clock.setTimeout(() => {
            this.state.dice.stopRolling();
            this.movePlayer(thisPlayer, dice)
        }, 1000)
    }

    private movePlayer(player: Player, dice: Dice) {
        player.move(dice.sum())
    }
}