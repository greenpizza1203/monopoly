import $ from "jquery";

export function createElement(tagName: string, id = ""
): JQuery {

    let htmlElements = $(document.createElement(tagName));
    if (id.trim() != "") {
        htmlElements.attr('id', id)
    }
    return htmlElements;
}