export enum MoveType {
    ROLL
}

export class Move {
     type: MoveType;
    constructor(type: MoveType) {
        this.type = type;
    }

}