
let temp = 4400;
function justrunthis() {
    // temp -= 100; updateTextPathOffset(temp);
    // idElementSideBar.style.top = '600px'

    show('mobile_tilted');
    morph('mobile_tilted', 'computer_tilted');

}

let temp_2 = 0;

/** -------- Variables -------- */

    /** Constants */
    const ANIMATION_DURATION = 1000;
    const TEXT_ANIMATION_SPEED = 10;
    const TEXT_ANIMATION_STEP = 10;
    const SIDE_TEXT_ANIMATION_STEP = 10;
    let SCROLL_DELTA = -1;
    const SOME_CONSTANT_INTEGER = 3000;
    const MENU_ITEMS = ['WEBSITES', 'APPS', 'VIDEOS', 'ABOUT'];
    const MENU_ITEMS_PIXEL_SIZES = [832, 450, 626, 594];
    const PIXELS_OF_SPACE = 72;

    const SHAPES = {
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
            stop: 5,
            imageStop: 0
            // stop: 4
        },
        mobile_upright: {
            elements: 4,
            stop: 4,
            imageStop: 0
        },
        computer_tilted: {
            elements: 5,
            stop: 5,
            imageStop: 1
        },
        computer_upright: {
            elements: 4,
            stop: 4,
            imageStop: 1
        },
        video_small: {
            elements: 8,
            stop: 3,
            pathStop: 7,
            imageStop: 0
        },
        video_large: {
            elements: 3,
            stop: 3,
            pathStop: 3,
            imageStop: 0
        },
        nothing: {
            elements: 0,
            stop: 0,
            imageStop: 0
        }
    };

    const PAGES = {
        WEBSITES: 'WEBSITES',
        APPS: 'APPS',
        VIDEOS: 'VIDEOS',
        ABOUT: 'ABOUT',
        HOME: 'HOME',
        INTERMEDIATE: 'INTERMEDIATE'
    };

    const PAGES_INDEXES = {
        WEBSITES: 0,
        APPS: 1,
        VIDEOS: 2,
        ABOUT: 3
    };

    const PAGE_OFFSETS = {
        HOME: 1600,
        WEBSITES: 900,
        APPS: 900,
        VIDEOS: 900,
        ABOUT: 900
    };

    const PAGE_LINKAGE = {
        HOME: {
            next: PAGES.WEBSITES,
            prev: PAGES.HOME
        },
        WEBSITES: {
            next: PAGES.APPS,
            prev: PAGES.HOME
        },
        APPS: {
            next: PAGES.VIDEOS,
            prev: PAGES.WEBSITES
        },
        VIDEOS: {
            next: PAGES.ABOUT,
            prev: PAGES.APPS
        },
        ABOUT: {
            next: PAGES.ABOUT,
            prev: PAGES.VIDEOS
        }
    };

    const PAGE_MORPH_LINKAGE = {
        HOME: {
            next: PAGES.WEBSITES,
            prev: PAGES.HOME
        },
        WEBSITES: {
            next: PAGES.APPS,
            prev: PAGES.HOME
        },
        APPS: {
            next: PAGES.VIDEOS,
            prev: PAGES.WEBSITES
        },
        VIDEOS: {
            next: PAGES.ABOUT,
            prev: PAGES.APPS
        },
        ABOUT: {
            next: PAGES.ABOUT,
            prev: PAGES.VIDEOS
        }
    };

    const PAGE_INFORMATION = {
        WEBSITES: {
            title: 'Data Visualization Generator',
            detail: 'Big Data is an ever-growing source of information, with governments and corporations generating more Big Data than ever. It proves to be extremely valuable for companies and governments to be able to extract trends and patterns from this data and use this information to better prepare and/or optimize any services they offer.'
        },
        APPS: {
            next: PAGES.VIDEOS,
            prev: PAGES.WEBSITES
        },
        VIDEOS: {
            next: PAGES.ABOUT,
            prev: PAGES.APPS
        },
        ABOUT: {
            next: PAGES.ABOUT,
            prev: PAGES.VIDEOS
        }
    };

    const SHOW = {
        HOME: function() {
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.7';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.7';
        },
        WEBSITES: function() {
            idElementSideBar.style.opacity = '0.7';
            console.debug('SDFJKLSDFJKLJKLSDFJKLSDF')
        }
    };

    const HIDE = {
        HOME: function() {
            console.debug('elementScrollsdfsdf', classElementScroll)
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.0';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.0';
        },
        WEBSITES: function() {
            console.debug('SDFJKLSDFJKLJKLSDFJKLSDF')
            idElementSideBar.style.opacity = '0.0';
        }
    };

    const PAGE_ACTIONS = {
        HOME: {
            SCROLL_DOWN: function() {
                currentState = STATES.SCROLLING;
                HIDE[PAGES.HOME]();
                show('computer_tilted');
                animatePageText(false);
                window.scrollTo(window.innerHeight, 0);
                PAGE_LINKAGE[page].nextPage();
            }
        },
        WEBSITES: {
            CLICK: function () {
                morph('computer_tilted', 'computer_upright');
                fillContent();
            }
        }
    };

    const STATES = {
        SCROLLING: 0,
        READY: 1
    };

    const INSTRUCTIONS = {
        SCROLL_UP: function () {

            if (page === PAGES.HOME) {

            } else {
                console.debug('am oding this')
                animatePageText(true);
            }

            setPrevPage();
        },
        SCROLL_DOWN: function () {
            // console.debug('lkj')
            // PAGE_ACTIONS[page].SCROLL_DOWN();

            if (page === PAGES.HOME) {
                HIDE[PAGES.HOME]();
                // show('computer_tilted');
                // animatePageText(false);
                // window.scrollTo(window.innerHeight, 0);
                // PAGE_LINKAGE[page].nextPage();
            } else {
            }

            currentState = STATES.SCROLLING;
            animatePageText(false);
            setNextPage();
        }
    };

    /** Global Variables */
    let svgMain, snapSVGMain, page;
    let shapes;
    let shapeAttributes;
    let shapeImages;

    /** Internal */
    let previousPage;
    let offset, dot;
    let currentScrollDelta;
    let currentPageAnimationOffset;
    let currentState;
    let currentSideTextTop, currentSideTextLeft;
    let latestWindowSizeUpdateTimestamp;
    let sideTextOffsets = [0, 0, 0, 0];
    let currentlyAnimating;
    let queuedInstruction;

    /** DOM Elements */
    let elementMainContent;
    let textPath, textPath2, textPath3, textPath4, textPath5;
    let textContainer, path, pathLength;
    let classElementScroll, classElementEllipse;
    let idElementSideBar;
    let idElementContentInformation, idElementContentTitle, idElementContentDetail;
    let snapContentInformation;

/** ---------------------------------- */


/** -------- Functions -------- */

function morph(fromShape, toShape) {

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


    for (let e = 0; e < SHAPES[toShape].imageStop; e++) {
        shapeImages[toShape][e].animate({opacity: 1.0}, 2*ANIMATION_DURATION);
    }

    for (let e = 0; e < SHAPES[fromShape].imageStop; e++) {
        shapeImages[fromShape][e].animate({opacity: 0.0}, ANIMATION_DURATION);
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
}

function show(shapeToShow) {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e].attr({
                opacity: (shape === shapeToShow ? 1.0 : 0.0)
            });
        }
        for (let e = 0; e < SHAPES[shape].imageStop; e++) {
            shapeImages[shape][e].attr({
                opacity: (shape === shapeToShow ? 1.0 : 0.0)
            });
        }
    }
}

function showNothing() {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e].attr({
                opacity: 0.0
            });
        }
    }
}

function fillContent() {
    console.debug('this war PAGE_INFORMATION[page].title', PAGE_INFORMATION[page].title)
    snapContentInformation.animate({opacity: 1.0}, ANIMATION_DURATION);



    idElementContentTitle.innerText = PAGE_INFORMATION[page].title;
    idElementContentDetail.innerText = PAGE_INFORMATION[page].detail;
}

function changePage(newPage) {
    // console.debug('changing to: ', newPage)
    if (previousPage !== newPage) {
        morph(previousPage, newPage);
        previousPage = newPage;
    }
}

function setNextPage() {
    page = PAGE_LINKAGE[page].next;
}
function setPrevPage() {
    page = PAGE_LINKAGE[page].prev;
}

function initializeCursor() {
    const cursor = document.querySelector('#cursor');
    const clickableElements = document.querySelectorAll('.clickable');
    offset = 25;
    dot = cursor.innerHTML;

    for(clickableElement of clickableElements)
    {
        clickableElement.addEventListener('mouseover', (event) =>
        {
            cursor.classList.add('cursorHover');
            offset = 50;
            let text = document.createElement('div');
            text.innerHTML = '<b>click</b>';
            text.classList.add('cursorCenterHover');
            cursor.innerHTML = "";
            cursor.appendChild(text);
        });

        clickableElement.addEventListener('mouseout', (event) =>
        {
            cursor.classList.remove('cursorHover');
            offset = 25;
            cursor.innerHTML = dot;
        });
    }

    document.addEventListener('mousemove', event => {
        cursor.setAttribute('style', 'top: ' + (event.pageY - offset) + "px; left: " + (event.pageX - offset) + "px;");
    });
}

function updateTextPathOffset(offset){

    console.debug('offset', offset)

    requestAnimationFrame(function() {
        temp_2 = offset;
        textPath.setAttribute('startOffset', temp_2);
        temp_2 += offset + window.innerHeight + 0;
        textPath2.setAttribute('startOffset', temp_2);
        temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 450);
        textPath3.setAttribute('startOffset', temp_2);
        temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 626);
        textPath4.setAttribute('startOffset', temp_2);
        temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 594);
        textPath5.setAttribute('startOffset', temp_2);
    });



    // textPath.setAttribute('startOffset', offset);
    // textPath2.setAttribute('startOffset', offset + 4600);
    // textPath3.setAttribute('startOffset', offset + 9100);
    // textPath4.setAttribute('startOffset', offset + 13600);
    // textPath5.setAttribute('startOffset', offset + 18100);


    // textPath.setAttribute('startOffset', offset);
    // textPath2.setAttribute('startOffset', offset + 4600);
    // textPath3.setAttribute('startOffset', offset + 9100);
    // textPath4.setAttribute('startOffset', offset + 13600);
    // textPath5.setAttribute('startOffset', offset + 18100);
}

function animateScrollRec(from, to, step) {
    if (from < to) {
        if (step < to) {
            step += TEXT_ANIMATION_STEP;
            updateTextPathOffset(step);
            setTimeout(animateScrollRec.bind(null, from, to, step), TEXT_ANIMATION_SPEED);
        } else {
            currentlyAnimating.sideBar = false;

            // SHOW[PAGES.WEBSITES]();
        }
    } else {
        if (step > to) {
            step -= TEXT_ANIMATION_STEP;
            updateTextPathOffset(step);
            setTimeout(animateScrollRec.bind(null, from, to, step), TEXT_ANIMATION_SPEED);
        } else {
            currentlyAnimating.sideBar = false;

            SHOW[PAGES.WEBSITES]();
            show('computer_tilted');
        }
    }
}

function animateHomeTextScroll(from, to) {

    currentlyAnimating.sideBar = true;
    animateScrollRec(from, to, from);


    // setTimeout(updateTextPathOffset.bind(a), 10);
    //
    // console.debug('runininoiolijlkjs')
    // if (from < to) {
    //     for (let a = from; a < to; a++)
    //         setTimeout(updateTextPathOffset.bind(a), 10);
    // } else {
    //     for (let a = from; a > to; a--)
    //         setTimeout(updateTextPathOffset.bind(a), 10);
    // }
}

function animatePagesTextScrollRec(current, last, down) {

    console.debug('animatePagesTextScrollRec current, last', current, last, down )
    if (down && current < last) {
        idElementSideBar.style.top = (currentSideTextTop + current) + 'px';
        setTimeout(animatePagesTextScrollRec.bind(null, current + SIDE_TEXT_ANIMATION_STEP, last, down), TEXT_ANIMATION_SPEED);
    } else if (!down && current > last) {
        idElementSideBar.style.top = (currentSideTextTop + current) + 'px';
        setTimeout(animatePagesTextScrollRec.bind(null, current - SIDE_TEXT_ANIMATION_STEP, last, down), TEXT_ANIMATION_SPEED);
    } else if ((down && current >= last) || (!down && current <= last)) {
        currentlyAnimating.sideBar = false;
    }


}

function animatePagesTextScroll(down) {
    currentlyAnimating.sideBar = true;
    let tmptmp;
    if (down) {
        console.debug('currentSideTextTop', currentSideTextTop)
        console.debug('(currentSideTextTop + window.innerHeight) + \'px\'', (currentSideTextTop + sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]]) + 'px');


        console.debug('PAGE_LINKAGE[page].next', PAGE_LINKAGE[page].next)
        console.debug('PAGES_INDEXES[PAGE_LINKAGE[page].next]', PAGES_INDEXES[PAGE_LINKAGE[page].next])
        console.debug('sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]]', sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]])

        tmptmp = (currentSideTextTop + sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1]);
        console.debug('tmptmp + \'px\'', tmptmp + 'px')
        // idElementSideBar.style.top = (currentSideTextTop + sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1]) + 'px';

        morph();
        animatePagesTextScrollRec((page === PAGES.WEBSITES ? 0 : sideTextOffsets[PAGES_INDEXES[page]-1]), sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1], down);


    } else {
        console.debug('(currentSideTextTop - window.innerHeight) + \'px\'', (currentSideTextTop - sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1]) + 'px');


        console.debug('PAGE_LINKAGE[page].prev', PAGE_LINKAGE[page].prev)
        console.debug('PAGES_INDEXES[PAGE_LINKAGE[page].prev]', PAGES_INDEXES[PAGE_LINKAGE[page].prev])
        console.debug('sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]]', sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]])

        // idElementSideBar.style.top = (currentSideTextTop + (page === PAGES.APPS ? 0 : sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]-1])) + 'px';
        // currentSideTextTop = currentSideTextTop - window.innerHeight;



        animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]-1], (page === PAGES.APPS ? 0 : sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]-1]), down);
    }
}

function animatePageText(up) {
    console.debug('animatePageText up', up)
    if (page === PAGES.HOME || (page === PAGES.WEBSITES && up)) {
        if (up) {
            console.debug('what is page', page)

            HIDE[PAGES.WEBSITES]();

            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset + 1600);
            currentPageAnimationOffset += 1600;
        } else {
            console.debug('what is page', page)

            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset - 1600);
            currentPageAnimationOffset -= 1600;
        }
    } else {
        console.debug('animatePagesTextScroll')
        animatePagesTextScroll(!up);
    }
}

function preventDefault(e) {

    mainScrollHandler(e.deltaY);

    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    mainScrollHandler(e.deltaY);
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function useWindowHeight() {

    excessPixels = -1;
    let sideResult = '';
    currentSideTextLength = 0;
    for (let m = 0; m < MENU_ITEMS.length; m++) {
        sideResult += MENU_ITEMS[m];
        currentSideTextLength += MENU_ITEMS_PIXEL_SIZES[m];
        let remaining = window.innerHeight - MENU_ITEMS_PIXEL_SIZES[m];
        if (remaining > 0) {
            remaining = Math.floor(remaining/PIXELS_OF_SPACE)+1;
            for (let r = 0; r < remaining; r++) {
                sideResult += ' ';
                currentSideTextLength += PIXELS_OF_SPACE;
            }
        } else {
            sideResult += ' ';
            excessPixels = 72*2;
        }

        idElementSideBar.innerText = sideResult;
        sideTextOffsets[m] = idElementSideBar.offsetWidth;
    }

    currentSideTextLength = idElementSideBar.offsetWidth;

    console.debug('sideTextOffsets', sideTextOffsets)
    console.debug('afffftteerrr  currentSideTextLength', currentSideTextLength)
    console.debug('afffftteerrr  window.innerHeight',  window.innerHeight)
    // console.debug('(-1*currentSideTextLength + window.innerHeight) + \'px\'', (-1*currentSideTextLength + window.innerHeight) + 'px')
    currentSideTextTop = (-0.5*currentSideTextLength + window.innerHeight + (page !== PAGES.HOME && page !== PAGES.WEBSITES ? sideTextOffsets[PAGES_INDEXES[page]] : 0) - 150);
    idElementSideBar.style.top = currentSideTextTop + 'px';
    idElementSideBar.style.left = (-0.5*currentSideTextLength + 140) + 'px';

    // console.debug('(-0.5*currentSideTextLength) + \'px\'', (-0.5*currentSideTextLength) + 'px')

}

function checkQueuedInstructions() {

    if (queuedInstruction != null) {
        if (isReady()) {
            queuedInstruction();
        } else {
            setTimeout(checkQueuedInstructions, 300);
        }
    }

}

function isReady() {
    for (let animation in currentlyAnimating) {
        if (currentlyAnimating[animation]) {
            return false;
            break;
        }
    }
    return true;
}

function initializeContent() {
    elementMainContent.style.opacity = '1.0';

    // show('computer_tilted');

    showNothing();

    updateTextPathOffset(4390);

    let supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch(e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);

    useWindowHeight();

}

function initializeVariables() {

    /** DOM Elements */
    elementMainContent = document.getElementById('main_content');
    svgMain = document.getElementById("main_svg");
    idElementSideBar = document.getElementById('side_bar');


    idElementContentInformation = document.getElementById('content_information');
    idElementContentTitle = document.getElementById('content_title');
    idElementContentDetail = document.getElementById('content_detail');

    textPath = document.querySelector('#text-path');
    textPath2 = document.querySelector('#text-path2');
    textPath3 = document.querySelector('#text-path3');
    textPath4 = document.querySelector('#text-path4');
    textPath5 = document.querySelector('#text-path5');
    textContainer = document.querySelector('#text-container');
    path = document.querySelector( textPath.getAttribute('href') );
    classElementEllipse = document.getElementsByClassName('ellipse');
    classElementScroll = document.getElementsByClassName('scroll');

    snapContentInformation = Snap.select('#content_information');

    /** Global Variables */
    pathLength = path.getTotalLength();

    snapSVGMain = Snap(svgMain);
    shapes = {};
    shapeAttributes = {};
    shapeImages = {};

    page = PAGES.HOME;
    previousPage = 'computer_tilted';

    currentScrollDelta = 0;
    currentPageAnimationOffset = 4356;
    currentState = STATES.READY;
    currentSideTextTop = 0;

    currentlyAnimating = {
        sideBar: false,
        mainSVG: false
    };

    queuedInstruction = null;

    for (let shape in SHAPES) {
        shapes[shape] = new Array(SHAPES[shape].elements);
        shapeAttributes[shape] = new Array(SHAPES[shape].elements);
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e] = Snap.select('#' + shape + '_' + e);
            if (e < SHAPES[shape].stop)
                shapeAttributes[shape][e] = shapes[shape][e].node.getAttribute('d');
        }
    }

    for (let shape in SHAPES) {
        shapeImages[shape] = new Array(SHAPES[shape].imageStop+1);
        for (let e = 0; e < SHAPES[shape].imageStop; e++) {
            shapeImages[shape][e] = Snap.select('#' + shape + '_image_' + e);
        }
    }
}



function mainScrollHandler(deltaY) {

    // if (SCROLL_DELTA === -1)
    //     SCROLL_DELTA = deltaY;
    console.debug('lkj')

    if (isReady()) {
        if (deltaY > 0) {
            /** scrolled downwards */
            INSTRUCTIONS.SCROLL_DOWN();
        } else {
            /** scrolled upwards */
            INSTRUCTIONS.SCROLL_UP();
        }
    } else {
        queuedInstruction = (deltaY > 0 ? INSTRUCTIONS.SCROLL_DOWN : INSTRUCTIONS.SCROLL_UP);
    }

    // currentScrollDelta = deltaY;




    // console.log($(this).scrollTop());
    // let currentHeight = 1080*0.6;
    //
    // if($(this).scrollTop() > 100) {
    //     $(".scroll").css({"opacity" : "0"});
    //     $(".ellipse").css({"opacity" : "0"});
    // } else {
    //     $(".scroll").css({"opacity" : "0.7"});
    //     $(".ellipse").css({"opacity" : "0.7"});
    // }
    //
    // if ($(this).scrollTop() < 1*currentHeight) {
    //     showNothing();
    // } else if ($(this).scrollTop() > 1*currentHeight && $(this).scrollTop() < 2*currentHeight) {
    //     show('computer_tilted');
    //     changePage('computer_tilted');
    // } else if ($(this).scrollTop() > 2*currentHeight && $(this).scrollTop() < 3*currentHeight) {
    //     changePage('mobile_tilted');
    // } else if ($(this).scrollTop() > 3*currentHeight && $(this).scrollTop() < 4*currentHeight) {
    //     changePage('video_small');
    // }
}

function onContentClick() {
    PAGE_ACTIONS[page].CLICK();
}

/** ---------------------------------- */


/** Overwritten Functions */

window.onload = function() {
    initializeVariables();
    initializeContent();
    initializeCursor();

    window.onresize = function() {
        latestWindowSizeUpdateTimestamp = Date.now();
        // console.debug('Date.now()', Date.now(), 'latestWindowSizeUpdateTimestamp', latestWindowSizeUpdateTimestamp)
        setTimeout(function() {
            // console.debug('Date.now()', Date.now(), 'latestWindowSizeUpdateTimestamp', latestWindowSizeUpdateTimestamp)
            if ((Date.now() - latestWindowSizeUpdateTimestamp) > 100) {
                useWindowHeight();
            }
        } , 1000);
    };
    
    window.onscroll = function () {
        mainScrollHandler();


        // console.debug('document.body.scrollTo', document.body.scrollTop)
        // console.debug('document.documentElement.scrollTop', document.documentElement.scrollTop)
        //
        // requestAnimationFrame(function(){
        //     var rect = textContainer.getBoundingClientRect();
        //     var scrollPercent = rect.y / window.innerHeight;
        //
        //     // console.debug('rect', rect)
        //     // console.debug('scrollPercent', scrollPercent)
        //
        //
        //     console.debug('offset ', scrollPercent * pathLength + 4340)
        //
        //
        //     updateTextPathOffset( scrollPercent * pathLength + 4340);
        // });
    }
};

// $(document).ready(function(){
//     $(window).scroll(function(){
//         // console.log($(this).scrollTop());
//         let currentHeight = 1080*0.6;
//
//         if($(this).scrollTop() > 100) {
//             $(".scroll").css({"opacity" : "0"});
//             $(".ellipse").css({"opacity" : "0"});
//         } else {
//             $(".scroll").css({"opacity" : "0.7"});
//             $(".ellipse").css({"opacity" : "0.7"});
//         }
//
//         if ($(this).scrollTop() < 1*currentHeight) {
//             showNothing();
//         } else if ($(this).scrollTop() > 1*currentHeight && $(this).scrollTop() < 2*currentHeight) {
//             show('computer_tilted');
//             changePage('computer_tilted');
//         } else if ($(this).scrollTop() > 2*currentHeight && $(this).scrollTop() < 3*currentHeight) {
//             changePage('mobile_tilted');
//         } else if ($(this).scrollTop() > 3*currentHeight && $(this).scrollTop() < 4*currentHeight) {
//             changePage('video_small');
//         }
//     })
// });


