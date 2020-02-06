import {Schema, MapSchema, type} from "@colyseus/schema";
import {Player} from "../Player";
import {Dice} from "./Dice";

export class State extends Schema {
    @type(Player) currentTurn: Player | undefined;
    @type({map: Player}) players = new MapSchema<Player>();
    dice: Dice = new Dice();
}
