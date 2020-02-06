import random from "random"


enum DiceState {
    NONEXISTENT,
    ROLLING,
    ROLLED
}

export class Dice {
    firstDice: number = 0;
    secondDice: number = 0;
    state: DiceState = DiceState.NONEXISTENT;

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