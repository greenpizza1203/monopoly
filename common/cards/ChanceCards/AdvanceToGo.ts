import ChanceCard from "../ChanceCard";
import {State} from "../../State/State";

export default class AdvanceToGo implements ChanceCard {
    getText(): String {
        return 'Advance to "Go". (Collect $200)';
    }

    handleAction(state: State): void {
        state.currentTurn.moveTo(0)
    }

}