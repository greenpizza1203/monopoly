import {Schema, type} from "@colyseus/schema";
import PlayerOptions from "./PlayerOptions";
import {collect_go} from "./constants/misc.json"

export class Player extends Schema {
    @type("string") username: string;
    @type("number") position: number = 0;
    @type("number") money: number = 1500;

    constructor(options: PlayerOptions) {
        super();
        this.username = options.username;

    }

    move(distance: number, collectGoMoney = true) {
        this.moveTo(this.position + distance, collectGoMoney);
    }

    moveTo(newPosition: number, collectGoMoney = true) {

        newPosition = newPosition % 40;
        if (collectGoMoney && newPosition < this.position) this.money += collect_go;
        this.position = newPosition;
    }

}
