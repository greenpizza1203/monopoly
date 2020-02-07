import {Schema, type} from "@colyseus/schema"

export class Street extends Property {
      @type(["number"]) rentCost: ArraySchema<number>();
    @type("number") houseLevel:number=0;

    constructor(options: any) {
        super(options);
        
        this.rentCost.push(options.site);
        this.rentCost.push(options.house_1);
        this.rentCost.push(options.house_2);
        this.rentCost.push(options.house_3);
        this.rentCost.push(options.hotel);
    }
}
