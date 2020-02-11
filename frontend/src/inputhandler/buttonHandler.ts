import {Client} from "colyseus.js";
import $ from "jquery";
import renderer from "../renderer/Renderer";
import {State} from "../../../common/State/State";

let buttonHandler: { [key: string]: any } = (window as any).colyhandler = {};


export default buttonHandler
