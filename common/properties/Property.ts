import {Schema, type} from "@colyseus/schema"

export class Property extends Schema {
    @type("string") name: string;
    @type("string") color: string;
    @type("number") cost: string;
    @type("number") houseLevel: number=0;
    @type(["number"]) rent: ArraySchema<number> = new ArrayScema<number>();
    

    constructor(options: any) {
        super();

        this.name = options.name;
        this.color = options.color;
        this.cost = options.cost;
      
    }
    
}
