import {Client, Room} from "colyseus";
import {Player} from "../../common/Player";

export class GameRoom extends Room {
    onCreate() {
        this.setState(new State());
    }

    onJoin(client: Client, options: Client) {
        this.state.players[client.sessionId] = new Player();
    }

    onLeave(client: Client) {
        delete this.state.players[client.sessionId];
    }

    onMessage(client: Client, data: any) {
        // handle player messages
    }
}
