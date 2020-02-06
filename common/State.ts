import {Schema, MapSchema, type} from "@colyseus/schema";
import {Player} from "./Player";

class State extends Schema {
    @type("string") currentTurn: number = 0;
    @type({map: Player}) players = new MapSchema();
}
