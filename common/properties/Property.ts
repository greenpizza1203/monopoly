import {Schema, type} from "@colyseus/schema"

export class Property extends Schema {
    @type("string") name: string;
    @type("string") color: string;
    @type("number") cost: string;
    @type(["number"]) rentCost: ArraySchema<number>();
    @type("number") houseLevel:number=0;

    constructor(options: any) {
        super();

        this.name = options.name;
        this.color = options.color;
        this.cost = options.cost;
        this.rentCost.push(options.site);
        this.rentCost.push(options.house_1);
        this.rentCost.push(options.house_2);
        this.rentCost.push(options.house_3);
        this.rentCost.push(options.hotel);
    }
    
}
