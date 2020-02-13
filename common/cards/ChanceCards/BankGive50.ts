import ChanceCard from "../ChanceCard";
import {State} from "../../State/State";

export default class BankGive50 implements ChanceCard {
    getText(): String {
        return 'Bank pays you dividend of $50';
    }

    handleAction(state: State): void {
        state.currentTurn.money += 50;
    }

}