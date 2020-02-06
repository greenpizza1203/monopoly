import {Schema, MapSchema, type} from "@colyseus/schema";
import {Player} from "../Player";
import {Dice} from "./Dice";
import {PropertiesHandler} from "../properties/PropertiesHandler";


export class State extends Schema {
    @type(Player) currentTurn: Player | undefined;
    @type({map: Player}) players = new MapSchema<Player>();
    @type(Dice) dice: Dice = new Dice();
    @type(PropertiesHandler) propertiesHandler= new PropertiesHandler();
}
