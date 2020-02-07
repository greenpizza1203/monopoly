import {Schema, MapSchema, type} from "@colyseus/schema";
import {Player} from "../Player";
import {Dice} from "./Dice";
import {getProperties} from "../properties/PropertiesHandler";
import {Property} from "../properties/Property";


export class State extends Schema {
    @type(Player) currentTurn: Player | undefined;
    @type({map: Player}) players = new MapSchema<Player>();
    @type(Dice) dice: Dice = new Dice();
    @type([Property]) propertiesHandler = getProperties();
}
