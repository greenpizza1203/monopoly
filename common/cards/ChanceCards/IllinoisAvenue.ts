import ChanceCard from "../ChanceCard";
import {State} from "../../State/State";

export default class IllinoisAvenue implements ChanceCard {
    getText(): String {
        return 'Advance to Illinois Avenue. If you pass Go, collect $200.';
    }

    handleAction(state: State): void {
        state.currentTurn.moveTo(24)
    }

}