import {Schema, type} from "@colyseus/schema";
import PlayerOptions from "./PlayerOptions";

export class Player extends Schema {
    @type("string") username: string;
    @type("number") position: number = 0;
    @type("number") money: number = 1500;

    constructor(options: PlayerOptions) {
        super();
        this.username = options.username;

    }

    move(distance: number) {
        var newPos = this.position + distance;

    }
}
