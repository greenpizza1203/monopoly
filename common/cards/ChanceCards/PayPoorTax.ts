import ChanceCard from "../ChanceCard";
import {State} from "../../State/State";

export default class BankPaySmall implements ChanceCard {
    getText(): String {
        return 'Pay poor tax of $15';
    }

    handleAction(state: State): void {
        state.currentTurn.money -= 15;
    }

}