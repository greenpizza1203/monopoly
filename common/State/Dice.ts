import random from "random"
import {Schema, type} from "@colyseus/schema";


enum DiceState {
    NONEXISTENT,
    ROLLING,
    ROLLED
}

export class Dice extends Schema {
    @type("number") firstDice: number = 0;
    @type("number") secondDice: number = 0;
    @type("number") state: DiceState = DiceState.NONEXISTENT;

    startRolling() {
        this.state = DiceState.ROLLING
    }

    stopRolling() {
        this.firstDice = random.int(1, 6);
        this.secondDice = random.int(1, 6);
        this.state = DiceState.ROLLED;
    }

    sum() {
        return this.firstDice + this.secondDice;
    }
}