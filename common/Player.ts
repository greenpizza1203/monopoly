import {Schema, MapSchema, type} from "@colyseus/schema";

export class Player extends Schema {
    @type("number") position: number = 0;
    @type("number") money: number = 1500;
}
