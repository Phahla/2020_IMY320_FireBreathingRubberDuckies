const ANIMATION_DURATION = 1000;

let svg = document.getElementById("main_svg");
let s = Snap(svg);



let SHAPES = {
    // desktop: {
    //     elements: 6,
    //     stop: 5
    // },
    // mobile: {
    //     elements: 5,
    //     stop: 5
    // },
    mobile_tilted: {
        elements: 5,
        stop: 5
        // stop: 4
    },
    mobile_upright: {
        elements: 4,
        stop: 4
    },
    computer_tilted: {
        elements: 5,
        stop: 5
    },
    computer_upright: {
        elements: 4,
        stop: 4
    },
    video_small: {
        elements: 8,
        stop: 3,
        pathStop: 7
    },
    video_large: {
        elements: 3,
        stop: 3,
        pathStop: 3
    },
    nothing: {
        elements: 0,
        stop: 0
    }
};

let shapes = {};
let shapeAttributes = {};

for (let shape in SHAPES) {
    shapes[shape] = new Array(SHAPES[shape].elements);
    shapeAttributes[shape] = new Array(SHAPES[shape].elements);
    for (let e = 0; e < SHAPES[shape].elements; e++) {
        shapes[shape][e] = Snap.select('#' + shape + '_' + e);
        if (e < SHAPES[shape].stop)
            shapeAttributes[shape][e] = shapes[shape][e].node.getAttribute('d');
    }
}

let morph = function(fromShape, toShape) {

    console.debug('runnin this ')

    for (let e = 0; e < SHAPES[fromShape].elements; e++) {
        // was like so below
        // for (let e = 0; e < SHAPES[fromShape].stop; e++) {
        if (e < SHAPES[toShape].elements) {
            shapes[fromShape][e].animate({d: shapeAttributes[toShape][e]}, ANIMATION_DURATION);

            // set the opacity of fromShape to 0
            // set the opacity of toShape to 1

            setTimeout(function() {
                shapes[toShape][e].attr({
                    opacity: 1.0
                });
            }, 0.99*ANIMATION_DURATION);
            setTimeout(function() {
                shapes[fromShape][e].attr({
                    opacity: 0.0
                });
            }, 0.99*ANIMATION_DURATION);
        } else {
            setTimeout(function() {
                shapes[fromShape][e].attr({
                    opacity: 0.0
                });
            }, 0.99*ANIMATION_DURATION);
        }
    }
    setTimeout(function() {
        for (let e = 0; e < SHAPES[fromShape].elements; e++) {
            shapes[fromShape][e].animate({d: shapeAttributes[fromShape][e]}, ANIMATION_DURATION);
        }
    }, 2*ANIMATION_DURATION);
    // let start = 0, stop = 0, change = '', largerShape = '';
    // if (SHAPES[fromShape].elements < SHAPES[toShape].elements) {
    //     console.debug('toshape is larger')
    //     start = SHAPES[fromShape].elements-1;
    //     // was below
    //     // stop = SHAPES[toShape].elements;
    //     stop = SHAPES[toShape].elements;
    //     // change = 'visible';
    //     change = 1.0;
    //     largerShape = toShape;
    // } else if (SHAPES[fromShape].elements > SHAPES[toShape].elements) {
    //     console.debug('fromShape is larger')
    //     start = SHAPES[toShape].elements-1;
    //     stop = SHAPES[fromShape].elements;
    //     // change = 'hidden';
    //     change = 0.0;
    //     largerShape = fromShape;
    // }
    //
    // setTimeout(function() {
    //     for (let e = start; e < stop; e++) {
    //         console.debug('fromShape is largerstart', start, 'stop', stop, 'with change', change, 'with largershape', largerShape)
    //         shapes[largerShape][e].animate({
    //             opacity: change
    //             //     visibility: 'visible'
    //         }, 1000);
    //         // shapes[largerShape][e].attr({
    //         //     visibility: change
    //         // });
    //     }
    // }, 0.5*ANIMATION_DURATION);
};

let show = function(shapeToShow) {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e].attr({
                opacity: (shape === shapeToShow ? 1.0 : 0.0)
            });
        }
    }
};

let showNothing = function() {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e].attr({
                opacity: 0.0
            });
        }
    }
};


show('computer_tilted');

window.onscroll = function() {myFunction()};

function myFunction() {
    // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     alert('whwwwwwww')
    //     morph('computer_tilted', 'mobile_tilted');
    // } else if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    //     morph('mobile_tilted', 'video_small');
    // } else if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    //     morph('video_small', 'computer_upright');
    // }
}

let currentPage = 'computer_tilted';

function changePage(newPage) {
    // console.debug('changing to: ', newPage)
    if (currentPage !== newPage) {
        morph(currentPage, newPage);
        currentPage = newPage;
    }
}

showNothing();




