import {Schema, type} from "@colyseus/schema"

export class Property extends Schema {
    @type("string") name: string;
    @type("string") color: string;
    @type("number") cost: string;
    @type("number") site: string;
    @type("number") house_1: string;
    @type("number") house_2: string;
    @type("number") house_3: string;
    @type("number") hotel: string;

    constructor(options: any) {
        super();

        this.name = options.name;
        this.color = options.color;
        this.cost = options.cost;
        this.site = options.site;
        this.house_1 = options.house_1;
        this.house_2 = options.house_2;
        this.house_3 = options.house_3;
        this.hotel = options.hotel;
    }
}