import {ArraySchema, Schema, type} from "@colyseus/schema"




export class Property extends Schema {
    @type("string") name: string;
    @type("string") color: string;
    @type("number") cost: string;
    @type("number") houseLevel: number = 0;
    @type("number") location: number = 0;
    @type(["number"]) rentCost: ArraySchema<number> = new ArraySchema<number>();


    constructor(options: any) {
        super();
        this.location = options.location;
        console.log(this.location);
        this.name = options.name;
        this.color = options.color;
        this.cost = options.cost;
        let amount = 0;
        if (options.isStreet) {
            amount = 5
        } else if (options.isRailroad) {
            amount = 4;
        }
        for (let i = 0; i < amount; i++) {
            this.rentCost.push(options[`level_${i}`]);
        }
    }


}
