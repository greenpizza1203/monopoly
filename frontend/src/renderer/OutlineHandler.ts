import $ from "jquery";
import constants from "../constants.json";

let outerSize = 0;
let innerSize = 0;
let smallSide = 0;
let border = 0;
let heightMargin = 0;
let outerBox: JQuery;
let properties: JQuery[] = [];

function resize() {
    outerBox.width(outerSize);
    outerBox.height(outerSize);

    outerBox.css('margin-top', heightMargin);
    outerBox.css('border-width', `${border}px ${border}px`);
    $(".sideline").width(innerSize);
    $(".mainline").height(innerSize);
    let valueFunction1 = ((outerSize - innerSize * 2) / 9);
    $(".normalLine").height(valueFunction1);
    // $(".vertical").each(function( index ) {
    //     let htmlElements = $( this );
    //     let message = htmlElements.parent().height();
    //     htmlElements.height(message-1);
    //     console.log( message );
    // });

}

function createElement(tagName: string
): JQuery {
    return $(document.createElement(tagName))
}

function handleProperties() {

    for (let i = 0; i < 40; i++) {
        properties.push(handleAddingProperty(i));
    }
}


function handleAddingProperty(i: number) {

    let td = createElement('td');
    td.addClass((i % 2 == 0) ? 'dark' : 'light');
    if (i <= 10) {
        outerBox.children().last().prepend(td)
    } else if (i <= 19) {
        outerBox.children().eq(20 - i).prepend(td)
    } else if (i <= 30) {
        outerBox.children().first().append(td)
    } else {
        outerBox.children().eq(40 - i).append(td)
    }
    td.addClass('property');
    td.attr('id', "property-" + i);
    return td;
}

function getCenterCell(): JQuery {
    let htmlElements = createElement('td');
    htmlElements.attr('id', 'centerCell');
    htmlElements.attr('rowspan', 9);
    htmlElements.attr('colspan', 9);
    return htmlElements
}

function createOuterBox() {
    let outerBox = createElement('table');

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

function createBackground() {
    let $body = $("body");
    $body.css({margin: 0, border: 0});
    outerBox = createOuterBox();
    $body.append(outerBox);
    handleProperties();
    finishCreateOuterBox();
    $.get('html/players/leaderboard.html', function(data){
        $body.append(data)
    });

}

export default class OutlineHandler {


    static generateProperties() {
        createBackground();
        return properties;
    }

    static handleResize() {

        let height = $(window).height();
        let width = $(window).width();
        if (!height || !width) return;
        let size = Math.min(height, width);
        size -= 2;
        // border = size * constants['border'];
        outerSize = size; // - border * 2;
        innerSize = size * (constants["corner-ratio"]);
        smallSide = (outerSize - (innerSize * 2)) / 9;
        heightMargin = (height - size) / 2;
        resize()
    }
}