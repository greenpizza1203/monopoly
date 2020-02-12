import $ from "jquery";
import constants from "../constants.json";
import {handleAddingProperties} from "./FieldPropertyRenderer";
import {createElement} from "../jquery/helpermethods";

let outerSize = 0;
let innerSize = 0;
let smallSide = 0;
let border = 0;
let heightMargin = 0;
let sideWidth = 0;
let outerBox: JQuery;

// let properties: JQuery[] = [];

function resize() {
    outerBox.width(outerSize);
    outerBox.height(outerSize);

    outerBox.css('margin-top', heightMargin);
    outerBox.css('border-width', `${border}px ${border}px`);
    $(".sideline").width(innerSize);
    $(".mainline").height(innerSize);
    let valueFunction1 = ((outerSize - innerSize * 2) / 9);
    $(".normalLine").height(valueFunction1);
    // $(".vertical").each((_, ele) => {
    //         let htmlElements = $(ele);
    //         let message: any = htmlElements.parent().parent().height();
    //         htmlElements.height(message);
    //         console.log(message);
    //     }
    // ).height(valueFunction1);
    $("#leaderboard").width(sideWidth);

}


function getCenterCell(): JQuery {
    let htmlElements = createElement('td');
    htmlElements.attr('id', 'centerCell');
    htmlElements.attr('rowspan', 9);
    htmlElements.attr('colspan', 9);
    return htmlElements
}

async function createOuterBox(): Promise<JQuery> {
    let outerBox: any = $(await $.ajax("html/mainTable/mainTable.html"));
    for (let i = 0; i < 11; i++) {
        outerBox.append(createElement('tr'))
    }
    outerBox.children().first().addClass('mainline');
    outerBox.children().last().addClass('mainline');
    outerBox.children().not(".mainline").addClass('normalLine');
    outerBox.children().eq(1).append(getCenterCell());
    return outerBox;
}

function finishCreateOuterBox() {
    addColumnFormat(outerBox);

}

function addColumnFormat(outerBox: JQuery<HTMLElement>) {
    let leftSideLine = createElement('col');
    leftSideLine.addClass('sideline');
    outerBox.prepend(leftSideLine);

    let most = createElement('col');
    most.attr('span', 9);
    outerBox.prepend(most);
    let rightSideLine = createElement('col');
    rightSideLine.addClass('sideline');
    outerBox.prepend(rightSideLine);
}

async function createBackground() {
    let $body = $("body");
    $body.css({margin: 0, border: 0});
    outerBox = await createOuterBox();
    $body.append(outerBox);
    handleAddingProperties(outerBox);
    finishCreateOuterBox();


}

export default class OutlineHandler {


    static async generateProperties() {
        await createBackground();

    }

    static handleResize() {

        let height = $(window).height();
        let width = $(window).width();
        if (!height || !width) return;
        let size = Math.min(height, width);
        size = Math.floor(size/50)*50;
        console.log(size);
        // size -= 2;
        // border = size * constants['border'];
        outerSize = size; // - border * 2;
        innerSize = size * (constants["corner-ratio"]);
        smallSide = (outerSize - (innerSize * 2)) / 9;
        heightMargin = (height - size) / 2;
        sideWidth = (width - outerSize) / 2;

        resize()
    }
}