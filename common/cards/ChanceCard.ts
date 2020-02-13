import {State} from "../State/State";

export default interface ChanceCard {
    getText(): String

    handleAction(state: State): void
}