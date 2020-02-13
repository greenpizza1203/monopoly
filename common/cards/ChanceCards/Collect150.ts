import ChanceCard from "../ChanceCard";
import {State} from "../../State/State";

export default class Collect150 implements ChanceCard {
    getText(): String {
        return 'Advance to St. Charles Place. If you pass Go, collect $200.';
    }

    handleAction(state: State): void {
        state.currentTurn.moveTo(11)
    }

}