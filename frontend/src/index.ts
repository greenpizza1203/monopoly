const $ = require('jquery');
init();

function init() {
    $(window).resize(handleResize)
}

function handleResize() {
    let height = $(window).height();
    let width = $(window).width();
    const size = Math.min(height, width);

    console.log(size);
}

