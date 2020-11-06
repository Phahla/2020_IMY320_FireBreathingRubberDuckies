
let temp = 4400;
function justrunthis() {
}

let temp_2 = 0;

/** -------- Variables -------- */

    /** Constants */
    const ANIMATION_DURATION = 1000;
    let ANIMATION_DURATION_USED = ANIMATION_DURATION;
    const TEXT_ANIMATION_SPEED = 10;
    const TEXT_ANIMATION_STEP = 10;
    const SIDE_TEXT_ANIMATION_STEP = 100;
    let SCROLL_DELTA = -1;
    const SOME_CONSTANT_INTEGER = 3000;
    // const MENU_ITEMS = ['WEBSITES', 'APPS', 'VIDEOS', 'ABOUT'];
    // const MENU_ITEMS = ['Websites', 'Applications', 'Videos', 'Contact'];
    const MENU_ITEMS = ['Websites    Websites    Websites    Websites    Websites', 'Apps      Apps      Apps      Apps      Apps', 'Videos    Videos    Videos', 'Contact     Contact     Contact     Contact'];
    const MENU_ITEMS_PIXEL_SIZES = [832, 450, 626, 594];
    const PIXELS_OF_SPACE = 72;
    const DEFAULT_VISIBLE_OPACITY = '0.7';
    const DUCK_WIDTH = 280;
    const DUCK_WIDTH_HALF = 0.5*DUCK_WIDTH;
    const DUCK_HEIGHT = 270;
    const DUCK_HEIGHT_HALF = 0.5*DUCK_HEIGHT;
    const PRIMARY_COLOUR = '#EBE0C6';
    const SECONDARY_COLOUR = '#EC573C';
    const BLACK_COLOUR = '#262626';
    const ANIMATION_COLOUR_STEPS = 100;
    const IND_MARGIN = {
        value: 0.05*window.innerHeight
    };

    const SHAPES = {

        mobile_tilted: {
            elements: 5,
            stop: 5,
            imageStop: 1
            // stop: 4
        },
        mobile_upright: {
            elements: 4,
            stop: 4,
            imageStop: 1
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
        video_large: {
            elements: 7,
            // stop: 3,
            stop: 6,
            pathStop: 7,
            imageStop: 1
        },
        video_small: {
            elements: 4,
            stop: 4,
            pathStop: 4,
            imageStop: 0
        },
        nothing: {
            elements: 0,
            stop: 0,
            imageStop: 0
        }
    };

    const ANIMATION_ORDER = {
        mobile_tilted: {
            video_large: [0, 3, 1, 2, 4]
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
        WEBSITES: {
            curr: 'computer_tilted',
            next: 'mobile_tilted',
            prev: 'computer_tilted',
            enlarged: 'computer_upright'
        },
        APPS: {
            curr: 'mobile_tilted',
            next: 'video_large',
            prev: 'computer_tilted',
            enlarged: 'mobile_upright'
        },
        VIDEOS: {
            curr: 'video_large',
            next: 'video_large',
            prev: 'mobile_tilted',
            enlarged: 'video_small'
        },
        ABOUT: {
            next: PAGES.ABOUT,
            prev: PAGES.VIDEOS
        }
    };

    // const PAGE_COLOURS = {
    //     HOME: '#262626',
    //     WEBSITES: '#F5CB67',
    //     APPS: '#619B99',
    //     VIDEOS: '#B5A852',
    //     ABOUT: '#B84100',
    //     DEVICES_FOCUS: '#262626'
    // };

// const PAGE_COLOURS = {
//     HOME: '#262626',
//     WEBSITES: '#BA8589',
//     APPS: '#D7A491',
//     VIDEOS: '#EFEBCF',
//     ABOUT: '#D6CD96',
//     DEVICES_FOCUS: '#262626'
// };

const PAGE_COLOURS = {
    HOME: '#262626',
    WEBSITES: '#573C41',
    APPS: '#493D30',
    VIDEOS: '#4E3E0F',
    ABOUT: '#0A3538',
    DEVICES_FOCUS: '#262626'
};

    const PAGE_INFORMATION = {
        WEBSITES: {
            title: 'Data Visualization Generator',
            detail: 'Big Data is an ever-growing source of information, with governments and corporations generating more Big Data than ever. It proves to be extremely valuable for companies and governments to be able to extract trends and patterns from this data and use this information to better prepare and/or optimize any services they offer.'
        },
        APPS: {
            title: 'Some Content',
            detail: 'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered.'
        },
        VIDEOS: {
            title: 'Some Content',
            detail: 'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered.'
        },
        ABOUT: {
            title: 'Some Content',
            detail: 'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered.'
        }
    };

    const IMG_PATHS = {
        HOME: {
            PAPER_WHITE: 'paper_white.png',
            PAPER_BLACK: 'paper_black.png'
        },
        WEBSITES: {
            PAGES: [
                '187AAB15__.png', '187AAB0A__.png'
            ]
        },
        APPS: {
            PAGES: [
                '187AAB30__.png'
            ]},
        VIDEOS: {
            PAGES: [
                '187AAB31__.png'
            ]},
        ABOUT: {},
        DEVICES_FOCUS: {

        }
    };


    /**
     * Constant specification of all DOM elements used.
     */
    const DOM_ELEMENTS = {
        GLOBALS: {currentPage: null},
        HOME: {topRight__backgroundImage: null},
        DEVICES: {
            group: null,
            container: null,
            // sidebar: null,
            sidebarText: null,
            sizeWebsites: null,
            sizeApps: null,
            sizeVideos: null,
            sizeAbout: null
        },
        DEVICES_FOCUS: {
            header: null,
            website0: null,
            website1: null,
            apps: null,
            video: null,
            websiteList: null,
            websiteControl0: null,
            websiteControl1: null,
            information: null
        },
        ABOUT: {
            main: null
        }
    };

    const DISPLAY = {
        HOME: function() {
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.7';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.7';
        },
        DEVICES: function (show) {


            if (show) {
                settings.opacity = DEFAULT_VISIBLE_OPACITY;
                settings.visibility = 'visible';
            } else {
                settings.opacity = '0.0';
                settings.visibility = 'hidden';
            }

            for (let domElement in DOM_ELEMENTS.DEVICES) {
                if (domElement === 'container')
                    settings.visibility = 'visible';


                    console.debug('what id domElement', domElement)
                    DOM_ELEMENTS.DEVICES[domElement].style.visibility = settings.visibility;

            }
        },
        WEBSITES: function(show) {
            // todo: add optimization
            DISPLAY.DEVICES(show);
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.7';
        },
        // ABOUT: function(show) {
        //     if (show) {
        //         console.error('showing about')
        //     } else {
        //         console.error('not showing about')
        //     }
        // },
        LOCKED: function (show) {
            lockedOnPage = true;
            idElementExitPage.style.opacity = '1.0';
            idElementExitPage.style.opacity = '1.0';
        }
    };

    const SHOW = {
        HOME: function() {
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.7';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.7';
            idElementDuckLogo.style.opacity = '0.7';
        },
        DEVICES: function () {

            for (let pageDOMElement in DOM_ELEMENTS) {
                for (let domElement in DOM_ELEMENTS[pageDOMElement]) {
                    DOM_ELEMENTS[pageDOMElement][domElement].style.visibility = 'show';
                }
            }

            // console.debug('running this ')
            // showShape('computer_tilted');
            // todo: was uncomm showShape('computer_tilted');
        },
        WEBSITES: function() {

            // todo: test
            DISPLAY.DEVICES(true);

            SHOW.DEVICES();
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.7';
        },
        LOCKED: function () {
            lockedOnPage = true;
            idElementExitPage.style.opacity = '1.0';
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.7';
            idElementExitPage.style.opacity = '1.0';
        }
    };

    const HIDE = {
        HOME: function() {
            // showNothing();
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.0';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.0';
            idElementDuckLogo.style.opacity = '0.0';
        },

        WEBSITES: function() {
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.0';
        },
        LOCKED: function () {
            idElementExitPage.style.opacity = '0.0';
            idElementExitPage.style.opacity = '0.0';
            idElementContentInformation.style.opacity = '0.0';
            morph(PAGE_MORPH_LINKAGE[page].enlarged, PAGE_MORPH_LINKAGE[page].curr);
        }
    };

    const PAGE_ACTIONS = {
        HOME: {
            SCROLL_DOWN: function() {
                currentState = STATES.SCROLLING;
                HIDE[PAGES.HOME]();
                animatePageText(false);
                //remark: was removed:  window.scrollTo(window.innerHeight, 0);
                PAGE_LINKAGE[page].nextPage();

            }
        },
        WEBSITES: {
            CLICK: function () {
                SHOW['LOCKED']();
                idElementContentInformation.style.opacity = '1.0';
                morph('computer_tilted', 'computer_upright');
                fillContent();
            }
        }
    };

    const STATES = {
        SCROLLING: 0,
        READY: 1,
        ANIMATING: 2
    };

    const INSTRUCTIONS = {
        SCROLL_UP: function () {
// todo: DOO THIS
//             currentState = STATES.SCROLLING;

            animateColourChange(elementBody, PAGE_COLOURS[page], PAGE_COLOURS[PAGE_LINKAGE[page].prev]);

            if (page === PAGES.HOME) {
                // DOM_ELEMENTS.topRight__backgroundImage.setAttribute( "xlink:href", "./" + IMG_PATHS.HOME.PAPER_WHITE);



            } else if (page === PAGES.WEBSITES) {
                SVG_ELEMENTS.HOME.helloPath.instance.attr({visibility: 'visible'});

                elementOverDevice.classList.remove('clickable');
                removeClickable();
                // initializeCursor();


            } else if (page === PAGES.VIDEOS) {
                SVG_ELEMENTS.DEVICES.group.instance.attr({visibility: 'hidden'});
            } else if (page === PAGES.ABOUT) {
                elementOverDevice.classList.add('clickable');
                initializeCursor();

                animateContactUs(false);
                // DOM_ELEMENTS.ABOUT.main.style.visibility = 'hidden';
            }


            if (page === PAGES.WEBSITES) {
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: 0.3*window.innerHeight}, 1000);
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({opacity: '0.0'});
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.textGroup.instance.animate({transform: 'translate(0 ' + (0.33*window.innerHeight) + ')'}, 1000);
            } else {
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({opacity: '1.0'});
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: (((PAGES_INDEXES[PAGE_LINKAGE[page].prev]+1)/5)*0.8*window.innerHeight) - IND_MARGIN.value}, 1000);
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.animate({y1: (((PAGES_INDEXES[page]+1)/5)*0.8*window.innerHeight) - IND_MARGIN.value}, 1000);
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.textGroup.instance.animate({transform: 'translate(0 ' + (((PAGES_INDEXES[PAGE_LINKAGE[page].prev]+1)/5*0.8*window.innerHeight)+16) + ')'}, 1000);
            }


            DISPLAY[SVG_PAGE_LOOKUP[page]](false);
            DISPLAY[SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].prev]](true);

            animatePageText(true);

            if (SVG_PAGE_LOOKUP[page] !== SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].prev]) {
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageOut, page);
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, PAGE_LINKAGE[page].prev);
            }

            setPrevPage();

            snapSVGPageInformation.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));
        },
        SCROLL_DOWN: function () {
            currentlyAnimating.sideBar = true;

            animateColourChange(elementBody, PAGE_COLOURS[page], PAGE_COLOURS[PAGE_LINKAGE[page].next]);
            // elementBody.style.backgroundColor = PAGE_COLOURS[PAGE_LINKAGE[page].next];


            DISPLAY[SVG_PAGE_LOOKUP[page]](false);
            DISPLAY[SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].next]](true);

            animatePageText(false);


            if (SVG_PAGE_LOOKUP[page] !== SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].next]) {
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageOut, page);
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, PAGE_LINKAGE[page].next);
            }


            if (page === PAGES.HOME) {

                elementOverDevice.classList.add('clickable');
                initializeCursor();


                DOM_ELEMENTS.DEVICES.sidebarText.visibility = 'visible';


                // DOM_ELEMENTS.topRight__backgroundImage.setAttribute( "xlink:href", "./" + IMG_PATHS.HOME.PAPER_BLACK);

                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: 0.3*window.innerHeight}, 1000);
                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({opacity: '0.0'});

                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.animate({y2: 0.8*window.innerHeight}, 1000);



                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({stroke: BLACK_COLOUR});
                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.attr({stroke: BLACK_COLOUR});
                //
                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.textGroup.instance.attr({fill: BLACK_COLOUR});



            } else {
                if (page === PAGES.VIDEOS) {
                    SVG_ELEMENTS.DEVICES.group.instance.attr({visibility: 'hidden'});
                    // DOM_ELEMENTS.ABOUT.main.style.visibility = 'visible';

                    elementOverDevice.classList.remove('clickable');
                    removeClickable();
                    // initializeCursor();

                    animateContactUs(true);
                }




            }

            if (page === PAGES.VIDEOS) {
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({opacity: '0.0'});
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: 0.6*window.innerHeight}, 1000);
            } else {
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.attr({opacity: '1.0'});
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: (((PAGES_INDEXES[PAGE_LINKAGE[page].next]+1)/5)*0.8*window.innerHeight) - IND_MARGIN.value}, 1000);
                SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.lineBottom.instance.animate({y1: (((PAGES_INDEXES[PAGE_LINKAGE[PAGE_LINKAGE[page].next].next]+1)/5)*0.8*window.innerHeight) - IND_MARGIN.value}, 1000);
                // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.textGroup.instance.animate({transform: 'translate()'}, 1000);
            }

            SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.textGroup.instance.animate({transform: 'translate(0 ' + (((PAGES_INDEXES[PAGE_LINKAGE[page].next]+1)/5*0.8*window.innerHeight)+16) + ')'}, 1000);

            // SVGController.nextPage();

            setNextPage();

            snapSVGPageInformation.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));
        }
    };

    const SVG_INSTRUCTIONS = {
        multiply: ([currentValue, newValue]) => {
            return currentValue * newValue;
        },
        returnCurrentValue: ([currentValue, newValue]) => {
            return currentValue;
        },
        returnNewValue: ([currentValue, newValue]) => {
            return newValue;
        },
        returnFirst: ([first]) => {
            return first;
        }
    };

    /**
     * Default animation JSON structure:
     */
    const DEFAULT_ANIMATION = {
        duration: 1000,
        easing: mina.linear,
    };
     /** If some keys are not present, the default specified above is taken.
     *
     * */

     // global elements cannot have an external property

    const SVG_ELEMENTS = {

         GLOBALS: {
             sidePageInformation: {
                 instance: null,
                 dependents: {
                     // unique instance
                     line: {
                         instance: null,
                         events: {
                             resize: {
                                 changes: {
                                     y2: {
                                         enabled: [true],
                                         lookupStop: 2,
                                         parameter: [],
                                         instruction: () => {
                                             if (page === PAGES.HOME)
                                                return 0.3*window.innerHeight;
                                             else if (page === PAGES.ABOUT)
                                                 return 0.6*window.innerHeight;
                                             else
                                                 return (((PAGES_INDEXES[PAGE_LINKAGE[page].next]+1)/5)*0.8*window.innerHeight) - IND_MARGIN.value;
                                         },
                                         animate: true, // animate has to be specified
                                         animation: null
                                     }
                                 }
                             }
                         }
                     },
                     lineBottom: {
                         instance: null,
                         events: {
                             resize: {
                                 changes: {
                                     y1: {
                                         enabled: [true],
                                         lookupStop: 2,
                                         parameter: ['height'],
                                         instruction: ([h]) => {
                                             if (page === PAGES.HOME) return 0; else return (((PAGES_INDEXES[PAGE_LINKAGE[PAGE_LINKAGE[page].next].next]+1)/5)*0.8*window.innerHeight) + IND_MARGIN.value;
                                         },
                                         animate: true, // animate has to be specified
                                         animation: null
                                     },
                                     y2: {
                                         enabled: [true],
                                         lookupStop: 2,
                                         parameter: ['height'],
                                         instruction: ([h]) => { if (page === PAGES.HOME) return 0.3*h; else return 0.8*h},
                                         animate: true, // animate has to be specified
                                         animation: null
                                     }
                                 }
                             }
                         }
                     },
                     textGroup: {
                         instance: null,
                         events: {
                             resize: {
                                 changes: {
                                     transform: {
                                         enabled: [true],
                                         lookupStop: 2,
                                         parameter: ['height'],
                                         instruction: ([h]) => {
                                             if (page === PAGES.HOME)
                                                return 'translate(0 ' + 0.33*h + ')';
                                             else
                                                 return 'translate(0 ' + (PAGES_INDEXES[page]+1)/5*0.8*h + ')';
                                         },
                                         animate: true, // animate has to be specified
                                         animation: null
                                     }
                                 }
                             }
                         }
                     },
                     arrow: {
                         instance: null,
                         animation: {
                             start: () => {
                                 if (!SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.halt) {
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.running = true;
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
                                         {transform: 'translate(0 ' + (0.4*window.innerHeight + 40) + ')', opacity: 1.0},
                                         1000,
                                         mina.linear,
                                         () => {
                                             SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
                                                 {transform: 'translate(0 ' + (0.4*window.innerHeight) + ')', opacity: 0.0},
                                                 1000,
                                                 mina.linear,
                                                 () => {
                                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.start();
                                                 }
                                             );
                                         }
                                     );
                                 } else {
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.running = false;
                                 }
                             },
                             stop: () => {SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.halt = true},
                             halt: false,
                             running: false
                         },
                         events: {
                             resize: {
                                 changes: {
                                     transform: {
                                         enabled: [true],
                                         lookupStop: 2,
                                         parameter: ['height'],
                                         instruction: ([h]) => {return 'translate(0 ' + 0.4*h + ')';},
                                         animate: false, // animate has to be specified
                                         animation: null
                                     }
                                 }
                             },
                             pageIn: {
                                 callback: () => {
                                     // console.debug('pagein callback');
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.halt = false;
                                     if (!SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.running)
                                        SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.start();
                                 },
                             },
                             pageOut: {
                                 callback: () => {
                                     // console.debug('654654pageOut callback');
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.stop();
                                 },
                             }
                         }
                     }
                 },
                 events: {
                     resize: {
                         changes: {
                             transform: {
                                 enabled: [true],
                                 lookupStop: 3,
                                 parameter: ['width', 'height'],
                                 instruction: ([w, h]) => {
                                     // console.error('dong this');
                                     // return 'translate(10 10)';
                                     return 'translate(' + (0.88*w) + ' ' + (0.1*h) + ')';
                                     },
                                 animate: true, // animate has to be specified
                                 animation: null
                             }
                             // width: {
                             //     enabled: [true],
                             //     lookupStop: 1,
                             //     parameter: ['width', 0.8],
                             //     instruction: SVG_INSTRUCTIONS.multiply,
                             //     animate: true, // animate has to be specified
                             //     animation: null
                             // }

                         }
                     }
                 },
                 external: []
             }
         },
        HOME: {
            logo: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.HOME.logo.animation.halt) {
                            SVG_ELEMENTS.HOME.logo.animation.running = true;
                            // console.debug('yupy')
                            SVG_ELEMENTS.HOME.logo.instance.animate(
                                {opacity: (SVG_ELEMENTS.HOME.logo.animation.direction ? 1.0 : 0.0)},
                                200,
                                mina.linear,
                                () => {SVG_ELEMENTS.HOME.logo.animation.running = false;}
                            );
                        } else {
                            SVG_ELEMENTS.HOME.logo.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.HOME.logo.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            transform: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width', 'height'],
                                instruction: ([w, h]) => {return 'translate(' + ((0.1*w) - DUCK_WIDTH_HALF) + ' ' + (h - (0.1*w) - DUCK_HEIGHT_HALF) + ')';},
                                animate: false, // animate has to be specified
                                animation: null
                            }
                        }
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.logo.animation.direction = true;
                            if (!SVG_ELEMENTS.HOME.logo.animation.running)
                                setTimeout(SVG_ELEMENTS.HOME.logo.animation.start, 1500);
                                // SVG_ELEMENTS.HOME.logo.animation.start();
                        },
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.logo.animation.direction = false;
                            if (!SVG_ELEMENTS.HOME.logo.animation.running)
                                SVG_ELEMENTS.HOME.logo.animation.start();
                        },
                    }
                },
                external: []
            },
            corner: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.HOME.corner.animation.halt) {
                            SVG_ELEMENTS.HOME.corner.animation.running = true;
                            SVG_ELEMENTS.HOME.corner.instance.animate(
                                {y: window.innerHeight + (SVG_ELEMENTS.HOME.corner.animation.direction ? 100 + 0.2*window.innerWidth : -0.2*window.innerWidth)},
                                1000,
                                mina.linear
                            );
                        } else {
                            SVG_ELEMENTS.HOME.corner.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.HOME.corner.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            x: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width'],
                                instruction: ([w]) => {return -(SVG_ELEMENTS.HOME.corner.instance.attr('width') - 0.2*w);},
                                animate: false, // animate has to be specified
                                animation: null
                            },
                            y: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width', 'height'],
                                instruction: ([w, h]) => {return h - 0.2*w;},
                                animate: false, // animate has to be specified
                                animation: null
                            }
                        }
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.corner.animation.direction = false;
                            setTimeout(SVG_ELEMENTS.HOME.corner.animation.start, 500);
                            // SVG_ELEMENTS.HOME.corner.animation.start();
                        },
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.corner.animation.direction = true;
                            SVG_ELEMENTS.HOME.corner.animation.start();
                        },
                    }
                },
                external: []
            },
            side: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.HOME.side.animation.halt) {
                            SVG_ELEMENTS.HOME.side.animation.running = true;
                            console.error('ANIMATEION SVG_ELEMENTS.HOME.side.animation.direction', SVG_ELEMENTS.HOME.side.animation.direction)
                            SVG_ELEMENTS.HOME.side.instance.animate(
                                {x: -SVG_ELEMENTS.HOME.side.instance.attr('width') + (SVG_ELEMENTS.HOME.side.animation.direction ? 0.2*window.innerWidth-1 : 0)},
                                1000,
                                mina.linear,
                                () => {
                                    SVG_ELEMENTS.HOME.side.animation.running = false;
                                }
                            );
                        } else {
                            SVG_ELEMENTS.HOME.side.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.HOME.side.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: false
                },
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            x: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width'],
                                instruction: ([w]) => {return -(SVG_ELEMENTS.HOME.side.instance.attr('width') - 0.2*w+1);},
                                animate: false, // animate has to be specified
                                animation: null
                            }

                        }
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.side.animation.halt = false;
                            SVG_ELEMENTS.HOME.side.animation.direction = false;
                            setTimeout(SVG_ELEMENTS.HOME.side.animation.start, 500);
                        },
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.HOME.side.animation.halt = false;
                            SVG_ELEMENTS.HOME.side.animation.direction = true;
                            if (!SVG_ELEMENTS.HOME.side.animation.running)
                                SVG_ELEMENTS.HOME.side.animation.start();
                        },
                    }
                },
                external: []
            },

            helloPath: {
                instance: null,
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            d: {
                                enabled: [true],
                                lookupStop: 2,
                                parameter: ['width', 'height', 0.2],
                                instruction: ([w, h, v]) => {return 'M ' + 0.1*w + ' ' + h + ' Q ' + 0.1*w + ' ' + 0.5*h + ' ' + 0.7*w + ' ' + 0.5*h;},
                                animate: false, // animate has to be specified
                                animation: null
                            }

                        }
                    }
                },
                external: []
            },
            helloTextPath: {
                instance: null,
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            startOffset: {
                                enabled: [true],
                                lookupStop: 2,
                                parameter: [],
                                instruction: () => {return svgHelloPath.getTotalLength()-300;},
                                animate: false, // animate has to be specified
                                animation: null
                            }

                        }
                    }
                },
                external: []
            },
            topRight: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.HOME.topRight.animation.halt) {
                            SVG_ELEMENTS.HOME.topRight.animation.running = true;
                            SVG_ELEMENTS.HOME.topRight.instance.animate(
                                {x: 0},
                                1000,
                                mina.linear,
                                () => {
                                    DOM_ELEMENTS.topRight__backgroundImage.setAttribute( "xlink:href", "./" + (SVG_ELEMENTS.HOME.topRight.animation.direction ? IMG_PATHS.HOME.PAPER_BLACK : IMG_PATHS.HOME.PAPER_WHITE));
                                }
                            );
                        } else {
                            SVG_ELEMENTS.HOME.topRight.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.HOME.topRight.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {
                    // unique instance
                    backgroundImage: {
                        instance: null,
                        events: {
                            resize: {
                                changes: {
                                    x: {
                                        enabled: [true],
                                        lookupStop: 1,
                                        parameter: ['width', 0.2],
                                        instruction: SVG_INSTRUCTIONS.multiply,
                                        animate: false, // animate has to be specified
                                        animation: null
                                    },
                                    y: {
                                        enabled: [true],
                                        lookupStop: 1,
                                        parameter: ['height',0],
                                        instruction: SVG_INSTRUCTIONS.multiply,
                                        animate: false, // animate has to be specified
                                        animation: null
                                    },
                                    width: {
                                        enabled: [true],
                                        lookupStop: Number.MAX_VALUE,
                                        parameter: ['width'],
                                        instruction: SVG_INSTRUCTIONS.returnFirst,
                                        animate: false, // animate has to be specified
                                        animation: null
                                    },
                                    height: {
                                        enabled: [true],
                                        lookupStop: Number.MAX_VALUE,
                                        parameter: ['width'],
                                        instruction: SVG_INSTRUCTIONS.returnFirst,
                                        animate: false, // animate has to be specified
                                        animation: null
                                    }
                                }
                            }
                        },
                        external: []
                    }
                },
                events: {
                    resize: {
                        changes: {
                            x: {
                                enabled: [true],
                                lookupStop: 1,
                                parameter: ['width', 0.2],
                                instruction: SVG_INSTRUCTIONS.multiply,
                                animate: true, // animate has to be specified
                                animation: null
                            },
                            height: {
                                enabled: [true],
                                lookupStop: 2,
                                parameter: ['height'],
                                instruction: ([h]) => {return h;},
                                animate: true, // animate has to be specified
                                animation: null
                            },
                            width: {
                                enabled: [true],
                                lookupStop: 1,
                                parameter: ['width', 0.8],
                                instruction: SVG_INSTRUCTIONS.multiply,
                                animate: true, // animate has to be specified
                                animation: null
                            }

                        }
                    },
                    pageOut: {
                        callback: () => {
                            DOM_ELEMENTS.HOME.topRight__backgroundImage.setAttribute( "xlink:href", "./" + IMG_PATHS.HOME.PAPER_BLACK );
                        },
                    },
                    pageIn: {
                        callback: () => {
                            DOM_ELEMENTS.HOME.topRight__backgroundImage.setAttribute( "xlink:href", "./" + IMG_PATHS.HOME.PAPER_WHITE );
                        },
                    }
                },
                external: [
                    ['GLOBALS', 'sidePageInformation']
                ]
            }
        },
        DEVICES: {
            sideBackground: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.DEVICES.sideBackground.animation.halt) {
                            SVG_ELEMENTS.DEVICES.sideBackground.animation.running = true;
                            // console.debug('yupy')
                            SVG_ELEMENTS.DEVICES.sideBackground.instance.animate(
                                {width: (SVG_ELEMENTS.DEVICES.sideBackground.animation.direction ? 0.2*window.innerWidth : 0.0)},
                                1000,
                                mina.linear,
                                () => {SVG_ELEMENTS.DEVICES.sideBackground.animation.running = false;}
                            );
                        } else {
                            SVG_ELEMENTS.DEVICES.sideBackground.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.DEVICES.sideBackground.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            width: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width'],
                                instruction: ([w]) => {return 0.2*w;},
                                animate: false, // animate has to be specified
                                animation: null
                            },
                            height: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['height'],
                                instruction: ([h]) => {return h;},
                                animate: false, // animate has to be specified
                                animation: null
                            }
                        }
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES.sideBackground.instance.attr({visibility: 'visible', width: 0});
                            SVG_ELEMENTS.DEVICES.sideBackground.animation.direction = true;
                            if (!SVG_ELEMENTS.DEVICES.sideBackground.animation.running)
                                setTimeout(() => {
                                    SVG_ELEMENTS.DEVICES.sideBackground.animation.start();
                                    DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.8';
                                }, 2000);
                        },
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES.sideBackground.animation.direction = false;
                            if (!SVG_ELEMENTS.DEVICES.sideBackground.animation.running)
                                SVG_ELEMENTS.DEVICES.sideBackground.animation.start();
                        },
                    }
                },
                external: []
            },
            group: {
                instance: null,
                transformString: '',
                animation: {
                    move: (toRight, animationCallback) => {
                        SVG_ELEMENTS.DEVICES.group.instance.animate({
                                transform: SVG_ELEMENTS.DEVICES.group.transformString +  ' translate(' + (toRight ? (0.222*window.innerWidth) + ' ' + 0.05*window.innerWidth : '0 0') + ')',
                                fill: '#FCECD2',
                                fillOpacity: (toRight ? 0.0 : 1.0),
                                stroke: (toRight ? 'white' : 'black')
                            },
                            1000,
                            mina.linear,
                            () => {
                                currentState = STATES.READY;  console.debug(' SETTING currentState', currentState);
                                animationCallback();
                            }
                        );
                        for (let e = 0; e < shapes[currentShape].length; e++) {
                            shapes[currentShape][e].animate({fillOpacity: 0.0, stroke: '#fffff'}, 1000);
                        }
                    },
                    start: () => {
                        if (!SVG_ELEMENTS.DEVICES.group.animation.halt) {
                            SVG_ELEMENTS.DEVICES.group.animation.running = true;
                            SVG_ELEMENTS.DEVICES.group.instance.animate(
                                {opacity: (SVG_ELEMENTS.DEVICES.group.animation.direction ? 1.0 : 0.0)},
                                1000,
                                mina.linear,
                                () => {
                                    SVG_ELEMENTS.DEVICES.group.animation.running = false;
                                    currentState = STATES.READY;
                                }
                            );
                        } else {
                            SVG_ELEMENTS.DEVICES.group.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.DEVICES.group.animation.halt = true},
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {},
                events: {
                    resize: {
                        changes: {
                            // transform: {
                            //     enabled: [true],
                            //     lookupStop: Number.MAX_VALUE,
                            //     parameter: ['width', 'height'],
                            //     // instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + w/1920 + ' ' + h/1080 + ')'; return SVG_ELEMENTS.DEVICES.group.transformString;},
                            //     // instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + h + ' ' + w + ')'; return SVG_ELEMENTS.DEVICES.group.transformString;},
                            //     // instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + ((16/9)*h)/1920 + ' ' + ((9/16)*w)/1080 + ')'; return SVG_ELEMENTS.DEVICES.group.transformString;},
                            //     // instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + ((16/9)*h)/1920 + ' 1)'; return SVG_ELEMENTS.DEVICES.group.transformString;},
                            //     instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + (1+(9/16)*0.2) + ' ' + (1+(16/9)*0.2) + ')'; console.log('SVG_ELEMENTS.DEVICES.group.transformString', SVG_ELEMENTS.DEVICES.group.transformString); return SVG_ELEMENTS.DEVICES.group.transformString;},
                            //     animate: false, // animate has to be specified
                            //     animation: null
                            // }
                        }
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES.group.animation.direction = true;
                            if (!SVG_ELEMENTS.DEVICES.group.animation.running)
                                setTimeout(() => {
                                    SVG_ELEMENTS.DEVICES.group.animation.start();
                                }, 2000);
                        },
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES.group.animation.direction = false;
                            if (!SVG_ELEMENTS.DEVICES.group.animation.running)
                                SVG_ELEMENTS.DEVICES.group.animation.start();
                        },
                    }
                },
                external: []
            }
        },
        DEVICES_FOCUS: {
             information: {
                 instance: null,
                 animation: {
                     start: () => {
                         if (!SVG_ELEMENTS.DEVICES_FOCUS.information.animation.halt) {
                             SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running = true;
                             SVG_ELEMENTS.DEVICES_FOCUS.information.instance.animate(
                                 {x: (SVG_ELEMENTS.DEVICES_FOCUS.information.animation.direction ? -(SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height') - 0.6*window.innerWidth) : -(SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height')))},
                                 1000,
                                 mina.linear,
                                 () => {
                                     SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running = false;
                                 }
                             );
                         } else {
                             SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running = false;
                         }
                     },
                     stop: () => {
                         SVG_ELEMENTS.DEVICES_FOCUS.information.animation.halt = true
                     },
                     halt: false,
                     running: false,
                     direction: true
                 },
                 dependents: {},
                 events: {
                     resize: {
                         changes: {
                             x: {
                                 enabled: [true],
                                 lookupStop: Number.MAX_VALUE,
                                 parameter: [],
                                 instruction: () => {
                                     return -(SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height') - 0.6 * window.innerWidth);
                                 },
                                 animate: false, // animate has to be specified
                                 animation: null
                             }
                         }
                     },
                     pageIn: {
                         callback: () => {
                             SVG_ELEMENTS.DEVICES_FOCUS.information.animation.direction = true;
                             SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr({visibility: 'visible', x: -SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height')});
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.information.animation.start();
                         },
                     },
                     pageOut: {
                         callback: () => {
                             SVG_ELEMENTS.DEVICES_FOCUS.information.animation.direction = false;
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.information.animation.start();
                         },
                     }
                 },
                 external: []
             },
             more: {
                 instance: null,
                 animation: {
                     start: () => {
                         if (!SVG_ELEMENTS.DEVICES_FOCUS.more.animation.halt) {
                             SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running = true;
                             SVG_ELEMENTS.DEVICES_FOCUS.more.instance.animate(
                                 {x: (SVG_ELEMENTS.DEVICES_FOCUS.more.animation.direction ? -(SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr('height') - 0.2*window.innerWidth) : -(SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr('height')))},
                                 1000,
                                 mina.linear,
                                 () => {
                                     SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running = false;
                                 }
                             );
                         } else {
                             SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running = false;
                         }
                     },
                     stop: () => {
                         SVG_ELEMENTS.DEVICES_FOCUS.more.animation.halt = true
                     },
                     halt: false,
                     running: false,
                     direction: true
                 },
                 dependents: {},
                 events: {
                     resize: {
                         changes: {
                             x: {
                                 enabled: [true],
                                 lookupStop: Number.MAX_VALUE,
                                 parameter: ['width'],
                                 instruction: ([w]) => {
                                     return -(SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr('height') - 0.2*window.innerWidth);
                                 },
                                 animate: false, // animate has to be specified
                                 animation: null
                             }
                         }
                     },
                     pageIn: {
                         callback: () => {
                             SVG_ELEMENTS.DEVICES_FOCUS.more.animation.direction = true;
                             SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr({visibility: 'visible', x: -SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr('height')});
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.more.animation.start();
                         },
                     },
                     pageOut: {
                         callback: () => {
                             SVG_ELEMENTS.DEVICES_FOCUS.more.animation.direction = false;
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.more.animation.start();
                         },
                     }
                 },
                 external: []
             },
            back: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.DEVICES_FOCUS.back.animation.halt) {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.animation.running = true;
                            SVG_ELEMENTS.DEVICES_FOCUS.back.instance.animate(
                                {x: (SVG_ELEMENTS.DEVICES_FOCUS.back.animation.direction ? -(SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr('height') - 0.2*window.innerWidth) : 0)},
                                1000,
                                mina.linear,
                                () => {
                                    SVG_ELEMENTS.DEVICES_FOCUS.back.animation.running = false;
                                }
                            );
                        } else {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.animation.running = false;
                        }
                    },
                    stop: () => {
                        SVG_ELEMENTS.DEVICES_FOCUS.back.animation.halt = true
                    },
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {
                    backElement: {
                        instance: null,
                        events: {
                            pageIn: {
                                callback: () => {
                                    SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                                }
                            },
                            pageOut: {
                                callback: () => {
                                    SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'hidden'});
                                }
                            }
                        }
                    }
                },
                events: {
                    resize: {
                        changes: {
                            transform: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width'],
                                instruction: ([w]) => {
                                    return 'translate(' + 0.07*window.innerHeight + ' ' + 0.07*window.innerHeight + ')';


                                },
                                animate: false, // animate has to be specified
                                animation: null
                            }
                        }
                    },
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.animation.direction = true;
                            SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr({visibility: 'visible', transform: 'translate(' + 0.05*window.innerWidth + ' ' + 0.05*window.innerWidth + ')'});
                        },
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr({visibility: 'hidden'});
                            SVG_ELEMENTS.DEVICES_FOCUS.back.animation.direction = false;
                        },
                    }
                },
                external: []
            },
            divider: {
                instance: null,
                animation: {
                    start: () => {
                        if (!SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.halt) {
                            SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.running = true;
                            SVG_ELEMENTS.DEVICES_FOCUS.divider.instance.animate(
                                {x: (SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.direction ? 0 : window.innerWidth)},
                                1000,
                                mina.linear,
                                () => {
                                    SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.running = false;
                                }
                            );
                        } else {
                            SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.running = false;
                        }
                    },
                    stop: () => {
                        SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.halt = true
                    },
                    halt: false,
                    running: false,
                    direction: true
                },
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.direction = true;
                            if (!SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.running)
                                SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.start();
                        }
                    },
                    pageOut: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.direction = false;
                            if (!SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.running)
                                SVG_ELEMENTS.DEVICES_FOCUS.divider.animation.start();
                        }
                    }
                },
                external: []
            },

            imgWebsite_0: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            },

            imgWebsite_1: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            },

            imgApps_0: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            },

            imgApps_1: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            },

            imgApps_2: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            },

            imgVideo_0: {
                instance: null,
                dependents: {},
                events: {
                    pageIn: {
                        callback: () => {
                            SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({visibility: 'visible'});
                        }
                    }
                },
                external: []
            }
        }
    };

    const SVG_PAGE_DISPLAY_SET = {
        HOME: [SVG_ELEMENTS.HOME.topRight, SVG_ELEMENTS.HOME.corner, SVG_ELEMENTS.HOME.helloPath, SVG_ELEMENTS.HOME.logo, SVG_ELEMENTS.HOME.side],
        DEVICES: [],
        DEVICES_FOCUS: [SVG_ELEMENTS.DEVICES_FOCUS.back, SVG_ELEMENTS.DEVICES_FOCUS.information, SVG_ELEMENTS.DEVICES_FOCUS.more, SVG_ELEMENTS.HOME.topRight, SVG_ELEMENTS.DEVICES.group, SVG_ELEMENTS.DEVICES_FOCUS.divider]
    };

    const DEVICE_FOCUS_PAGES = {
        WEBSITES: [{
                SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgWebsite_0],
                DOM_ELEMENTS: ['websiteList', 'website0'],
                control: 'websiteControl0',
                informationImagePath: IMG_PATHS.WEBSITES.PAGES[0]
            }, {
                SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgWebsite_1],
                DOM_ELEMENTS: ['website1'],
                control: 'websiteControl1',
                informationImagePath: IMG_PATHS.WEBSITES.PAGES[1]
            }
        ],
        APPS: [{
            SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgApps_0],
            DOM_ELEMENTS: ['apps'],
            informationImagePath: IMG_PATHS.APPS.PAGES[0]
        }],
        VIDEOS: [{
            SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgVideo_0],
            DOM_ELEMENTS: ['video'],
            informationImagePath: IMG_PATHS.VIDEOS.PAGES[0]
        }],
    };

    // resize, pageIn, pageOut has to be defined

    const SVG_EVENT_LISTENERS = {
        HOME: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        DEVICES: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        WEBSITES: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        APPS: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        VIDEOS: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        ABOUT: {
            resize: [],
            pageIn: [],
            pageOut: []
        },
        DEVICES_FOCUS: {
            resize: [],
            pageIn: [],
            pageOut: []
        }
    };

    const SVG_EVENTS = ['resize', 'pageIn', 'pageOut'];
    const SVG_EVENTS_NAMED = {resize: 0, pageIn: 1, pageOut: 2};

    const SVG_PAGE_LOOKUP = {
        HOME: 'HOME',
        WEBSITES: 'DEVICES',
        APPS: 'DEVICES',
        VIDEOS: 'DEVICES',
        ABOUT: 'DEVICES',
        DEVICES_FOCUS: 'DEVICES_FOCUS'
    };

    const PAGE_SVG_INDEX_ARRAY = {
        HOME: [],
        WEBSITES: [],
        APPS: [],
        VIDEOS: [],
        ABOUT: []
    };

    const FOCUS_PAGES = {
        WEBSITES: {
            makeVisible: {
                DEVICES_FOCUS_dataPage: null,
                DEVICES_FOCUS_websiteList: null
            }
        },
        APPS: {
            makeVisible: {
                DEVICES_FOCUS_apps: null
            }
        },
        VIDEOS: {
            makeVisible: {
                DEVICES_FOCUS_video: null
            }
        }
    };



    const DEVICES_FOCUS_PAGE_HEADERS = {
        WEBSITES: 'Websites',
        APPS: 'Apps',
        VIDEOS: 'Videos'
    };

    const MOUSE_POSITIONS = {
        ON_DEVICE: 0,
        OFF_DEVICE: 1
    };

    /** Global Variables */
    let snapSVGMain, page, previousDevicePage, layout;
    let shapes;
    let shapeAttributes;
    let shapeImages;
    let lockedOnPage;
    let settings = {
        visibility: '',
        opacity: ''
    };
    let showingUprightDevice, showingFocusDevice;
    let currentShape;
    let currentMousePosition;

    /** Internal */
    let previousPage;
    let offset, dot;
    let currentScrollDelta;
    let currentPageAnimationOffset;
    let currentState;
    let currentSideTextTop, currentSideTextLeft;
    let latestWindowSizeUpdateTimestamp;
    let sideTextOffsets = [0, 0, 0, 0];
    let currentlyAnimating, animationOwners;
    let queuedInstruction;
    let timerScheduled;
    let svgHelloPath;

    /** DOM Elements */
    let snapSVGPageInformation;
    let elementSVGCore, elementSVGDevices, elementSVGHelloPath;
    let SVGContainer;
    let elementDivDevicesContainer;
    let textPath, textPath2, textPath3, textPath4, textPath5;
    let elementHalloPath, pathLength;
    let classElementScroll, classElementEllipse;
    let idElementSideBar;
    let idElementContentInformation, idElementContentTitle, idElementContentDetail;
    // let idElementDuckLogo;
    let snapContentInformation;
    let idElementExitPage;
    let elementBody;
    let idElementPageInformation;
    let elementContactMain, elementOverDevice;

/** ----------------------------------- */

/** ------------ Classes ------------ */

function animateContactUs(show) {

    let currentOpacity = (show ? 0.0 : 1.0), currentCount = 0;
    let ANIMATION_STEPS = 100;
    let timeout;

    timeout = setInterval(function() {

        if (currentCount < ANIMATION_STEPS) {
            if (show) {
                currentOpacity += 1/ANIMATION_STEPS;
            } else {
                currentOpacity -= 1/ANIMATION_STEPS;
            }
            elementContactMain.style.opacity = currentOpacity.toString();
        } else {
            clearInterval(timeout);
        }
        currentCount++;
    }, 1000/ANIMATION_STEPS);

}

function animateWrapper(element, animation, changes) {

    // console.debug('animateWrapper with ', element, animation, changes)

    let duration,
        easing,
        callback;

    if (animation == null) {
        duration = DEFAULT_ANIMATION.duration;
        easing = DEFAULT_ANIMATION.easing;
    }

    if (callback == null) {
        element.animate(changes, duration, easing);
    } else {
        element.animate(changes, duration, easing, callback);
    }
}


class SVGController {


    static initialize() {

        for (let elementPage in SVG_ELEMENTS) {

            for (let element in SVG_ELEMENTS[elementPage]) {

                SVG_ELEMENTS[elementPage][element].instance = Snap.select('#' + elementPage + '_' + element);

                if (Object.keys(SVG_ELEMENTS[elementPage][element].dependents).length > 0 && SVG_ELEMENTS[elementPage][element].dependents.constructor === Object) {
                    for (let dependentElement in SVG_ELEMENTS[elementPage][element].dependents) {
                        SVG_ELEMENTS[elementPage][element].dependents[dependentElement].instance = Snap.select('#' + elementPage + '_' + element + '__' + dependentElement);
                    }
                }

                if (SVG_EVENT_LISTENERS.hasOwnProperty(elementPage)) {
                    for (let ev = 0; ev < SVG_EVENTS.length; ev++) {
                        if (SVG_ELEMENTS[elementPage][element].events.hasOwnProperty(SVG_EVENTS[ev])) {
                            SVG_EVENT_LISTENERS[elementPage][SVG_EVENTS[ev]].push(SVG_ELEMENTS[elementPage][element]);
                        }
                        for(let dependentElement in SVG_ELEMENTS[elementPage][element].dependents) {
                            if (SVG_ELEMENTS[elementPage][element].dependents[dependentElement].events.hasOwnProperty(SVG_EVENTS[ev])) {
                                SVG_EVENT_LISTENERS[elementPage][SVG_EVENTS[ev]].push(SVG_ELEMENTS[elementPage][element]);
                            }
                        }
                        for(let externalElementIndex = 0; externalElementIndex < SVG_ELEMENTS[elementPage][element].external.length;  externalElementIndex++) {
                            SVG_EVENT_LISTENERS[elementPage][SVG_EVENTS[ev]].push(SVG_ELEMENTS[SVG_ELEMENTS[elementPage][element].external[externalElementIndex][0]][SVG_ELEMENTS[elementPage][element].external[externalElementIndex][1]]);
                        }
                    }
                }


            }
        }
    }

    static translateChange(object, key) {
        if (Array.isArray(object)) {

            return object[layout][key];
        } else {
            return object[key];
        }
    }

    static handleEvent(event, onPage) {


        let changes;
        let parameterLookup = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        for (let subscribedElement = 0; subscribedElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length; subscribedElement++) {

            let elementPointer;
            let listeningElement = 0;
            let dependentElement = 0;

            let dependentArray = Object.keys(SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement].dependents);
            while(listeningElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length || dependentElement < dependentArray.length) {

                /** While body. */
                if (listeningElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length) {
                    elementPointer = SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement];


                } else {
                    elementPointer = SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement].dependents[dependentArray[dependentElement]];

                }



                if (event === SVG_EVENTS_NAMED.resize) {
                    if (elementPointer.events.hasOwnProperty('resize')) {
                        changes = {};

                        for (let change in elementPointer.events.resize.changes) {

                            if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'enabled')) {

                                changes[change] = SVGController.translateChange(elementPointer.events.resize.changes[change], 'instruction')(
                                    elementPointer.events.resize.changes[change].parameter.map((param, paramIndex) => {
                                        return (paramIndex < elementPointer.events.resize.changes[change].lookupStop ? parameterLookup[param] : param);
                                    })
                                );

                                if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'animate')) {

                                    animateWrapper(elementPointer.instance, SVGController.translateChange(elementPointer.events.resize.changes[change], 'animation'), changes);

                                } else {
                                    elementPointer.instance.attr(changes);

                                }

                            }
                        }
                    }
                } else if (event === SVG_EVENTS_NAMED.pageIn) {

                    if (elementPointer.events.hasOwnProperty('pageIn') && elementPointer.events.pageIn.hasOwnProperty('callback')) {
                        elementPointer.events.pageIn.callback();
                    }

                } else if (event === SVG_EVENTS_NAMED.pageOut) {

                    if (elementPointer.events.hasOwnProperty('pageOut') && elementPointer.events.pageOut.hasOwnProperty('callback')) {

                        elementPointer.events.pageOut.callback();
                    }
                }

                /** While body end. */
                if (listeningElement >= SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length)
                    dependentElement++;
                listeningElement++;
            }

        }
    }

    static resize(width, height) {
        // check which objects have to be resize

        /** Determine layout. */

        for (let s = 0; s < SVGContainer.length; s++) {


            if (s === 1) {
                SVGContainer[s].setAttribute('height', window.innerHeight);
                SVGContainer[s].setAttribute('width', window.innerWidth);
            } else {
                SVGContainer[s].setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' +  window.innerHeight);
            }
        }

        SVGController.handleEvent(SVG_EVENTS_NAMED.resize, page);

        return;

        let changes;

        let parameterLookup = {
            width: width,
            height: height
        };

            let svgEvent = 0;

            for (let subscribedElement = 0; subscribedElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length; subscribedElement++) {

                let elementPointer;
                let listeningElement = 0;
                let dependentElement = 0;

                let dependentArray = Object.keys(SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents);
                while(listeningElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length || dependentElement < dependentArray.length) {

                    /** While body. */
                    if (listeningElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length) {
                        elementPointer = SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement];

                    } else {
                        elementPointer = SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents[dependentArray[dependentElement]];

                    }

                    // console.debug('elementPointer', elementPointer)
                    if (elementPointer.events.resize != null) {

                        changes = {};
                        for (let change in elementPointer.events.resize.changes) {

                            if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'enabled')) {

                                changes[change] = SVGController.translateChange(elementPointer.events.resize.changes[change], 'instruction')(
                                    elementPointer.events.resize.changes[change].parameter.map((param, paramIndex) => {
                                        return (paramIndex < elementPointer.events.resize.changes[change].lookupStop ? parameterLookup[param] : param);
                                    })
                                );

                                if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'animate')) {


                                    animateWrapper(elementPointer.instance, SVGController.translateChange(elementPointer.events.resize.changes[change], 'animation'), changes);

                                } else {
                                    elementPointer.instance.attr(changes);

                                }

                            }
                        }
                    }

                    if (subscribedElement === 'helloPath') {
                        textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#HOME_topRight');
                    }

                    /** While body end. */
                    if (listeningElement >= SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length)
                        dependentElement++;
                    listeningElement++;
                }

            }

        // }
    }

    static nextPage() {
        /** Assuming page has not been change to the next page. */

        // rather call showPage().

        // make all svg's on the current page nonvisible.
        // make the next page's svg's page visible.

        // for (let element in SVG_ELEMENTS[page]) {
        //     SVG_ELEMENTS[page][element].instance.attr({
        //         visibility: 'hidden'
        //     });
        // }
        //
        // for (let element in SVG_ELEMENTS[PAGE_LINKAGE[page].next]) {
        //     SVG_ELEMENTS[PAGE_LINKAGE[page].next][element].instance.attr({
        //         visibility: 'visible'
        //     });
        // }

        // let nextPage = PAGE_LINKAGE[page].next;
        //
        // for (let subscribedElement = 0; subscribedElement < SVG_EVENT_LISTENERS[page].pageIn.length; subscribedElement++) {
        //     SVG_EVENT_LISTENERS[nextPage].pageIn
        // }

        // console.debug('nextPage 888');

        // this.showPage(PAGE_LINKAGE[page].next);

        // setTimeout(() => this.showPage(PAGE_LINKAGE[page].next), 2000);

        // this.handleEvent(SVG_EVENTS_NAMED.pageOut);
        // this.handleEvent(SVG_EVENTS_NAMED.pageIn);

    }

    static prevPage() {
        /** Assuming page has not been change to the next page. */
        // make all svg's on the current page nonvisible.
        // make the next page's svg's page visible.

        // for (let element in SVG_ELEMENTS[page]) {
        //     SVG_ELEMENTS[page][element].instance.attr({
        //         visibility: 'hidden'
        //     });
        // }
        //
        // for (let element in SVG_ELEMENTS[PAGE_LINKAGE[page].next]) {
        //     SVG_ELEMENTS[PAGE_LINKAGE[page].next][element].instance.attr({
        //         visibility: 'visible'
        //     });
        // }



        // setTimeout(() => this.showPage(PAGE_LINKAGE[page].prev), 2000);


        // console.debug('prevPage 888');


        // this.handleEvent(SVG_EVENTS_NAMED.pageIn);
    }

    static showPageExact(pageToShow) {


        for (let elementPage in SVG_PAGE_DISPLAY_SET) {
            for (let ext = 0; ext < SVG_PAGE_DISPLAY_SET[elementPage].length; ext++) {
                SVG_PAGE_DISPLAY_SET[elementPage][ext].instance.attr({visibility: (elementPage === pageToShow ? 'visible' : 'hidden')});
            }
        }
    }

    static showPage(pageToShow) {

        for (let elementPage in SVG_ELEMENTS) {
            for (let element in SVG_ELEMENTS[elementPage]) {

                for (let dep in SVG_ELEMENTS[elementPage][element].dependents) {
                    SVG_ELEMENTS[elementPage][element].dependents[dep].instance.attr({
                        visibility: 'hidden'
                    });
                }
                for (let ext = 0; ext <  SVG_ELEMENTS[elementPage][element].external.length; ext++) {
                    SVG_ELEMENTS[SVG_ELEMENTS[elementPage][element].external[ext][0]][SVG_ELEMENTS[elementPage][element].external[ext][1]].instance.attr({
                        visibility: 'hidden'
                    });
                }
                SVG_ELEMENTS[elementPage][element].instance.attr({
                    visibility: 'hidden'
                });
            }
        }

        for (let element in SVG_ELEMENTS[pageToShow]) {

            for (let dep in SVG_ELEMENTS[pageToShow][element].dependents) {
                SVG_ELEMENTS[pageToShow][element].dependents[dep].instance.attr({
                    visibility: 'visible'
                });
            }
            for (let ext = 0; ext <  SVG_ELEMENTS[pageToShow][element].external.length; ext++) {
                SVG_ELEMENTS[SVG_ELEMENTS[pageToShow][element].external[ext][0]][SVG_ELEMENTS[pageToShow][element].external[ext][1]].instance.attr({
                    visibility: 'visible'
                });


                for (let externalDependant in SVG_ELEMENTS[SVG_ELEMENTS[pageToShow][element].external[ext][0]][SVG_ELEMENTS[pageToShow][element].external[ext][1]].dependents) {

                    // console.debug('externalDependant is visible', externalDependant);
                    SVG_ELEMENTS[SVG_ELEMENTS[pageToShow][element].external[ext][0]][SVG_ELEMENTS[pageToShow][element].external[ext][1]].dependents[externalDependant].instance.attr({
                        visibility: 'visible'
                    });
                }

            }
            SVG_ELEMENTS[pageToShow][element].instance.attr({
                visibility: 'visible'
            });
        }

    }
}

/** --------------------------------- */

/** -------- Functions -------- */

function morph(fromShape, toShape, callback) {

    currentState = STATES.ANIMATING;

    currentlyAnimating.busyAnimatingPost = true;
    currentlyAnimating.busyAnimatingPre = true;

    // let busyAnimatingPre = true, busyAnimatingPost = true;
    let destinationIndex;
    let useLookupArray = ANIMATION_ORDER.hasOwnProperty(fromShape) && ANIMATION_ORDER[fromShape].hasOwnProperty(toShape);

    for (let t = 0; t < shapes[fromShape].length; t++) {
        shapes[fromShape][t].attr({fillOpacity: 0.0});
    }
    for (let t = 0; t < shapes[toShape].length; t++) {
        shapes[toShape][t].attr({fillOpacity: 0.0});
    }
    for (let e = 0; e < SHAPES[fromShape].elements; e++) {
        if (e < SHAPES[toShape].elements) {

            destinationIndex = (useLookupArray ? ANIMATION_ORDER[fromShape][toShape][e] : e);

            function callbackClosure(argument1, argument2) {
                return function () {

                    shapes[fromShape][argument2].attr({
                        fill: '#FCECD2',
                        fillOpacity: 0.0,
                        opacity: 0.0,
                        d: shapeAttributes[fromShape][argument2]
                    });
                    shapes[toShape][argument1].attr({
                        fill: '#FCECD2',
                        fillOpacity: 1.0,
                        opacity: 1.0
                    });

                    currentlyAnimating.busyAnimatingPre = false;

                };
            }

                shapes[fromShape][e].animate({d: shapeAttributes[toShape][destinationIndex]}, ANIMATION_DURATION_USED, mina.linear, callbackClosure(e, destinationIndex));
                let aa = destinationIndex;
        }
    }


    let start = 0, stop = 0, change = 0, largerShape = '';
    if (SHAPES[fromShape].elements < SHAPES[toShape].elements) {
        start = SHAPES[fromShape].elements-1;
        stop = SHAPES[toShape].elements;
        change = 1;
        largerShape = toShape;
    } else if (SHAPES[fromShape].elements > SHAPES[toShape].elements) {
        start = SHAPES[toShape].elements-1;
        stop = SHAPES[fromShape].elements;
        change = 0;
        largerShape = fromShape;
    }

    if (largerShape === '')
        currentlyAnimating.busyAnimatingPost = false;


    let shouldCallCallback = arguments.length > 2;

        for (let e = start; e < stop; e++) {
            shapes[largerShape][e].animate({
                opacity: change,
                fillOpacity: change
            }, (change*1000 + 200), mina.linear, function () {

                currentlyAnimating.busyAnimatingPost = false;

                if (shouldCallCallback)
                    callback();

            });
        }

    currentShape = toShape;
}

function moveShape(shapeToMove, toRight) {

}

function showShape(shapeToShow) {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e].attr({
                opacity: (shape === shapeToShow ? 1.0 : 0.0)
            });
        }

    }
    currentShape = shapeToShow;
}

function showNothing() {
    for (let shape in SHAPES) {

    }
}

function fillContent() {
    snapContentInformation.animate({opacity: 1.0}, ANIMATION_DURATION);



    idElementContentTitle.innerText = PAGE_INFORMATION[page].title;
    idElementContentDetail.innerText = PAGE_INFORMATION[page].detail;
}

function changePage(newPage) {
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
function setFocusPage() {
    previousDevicePage = page;
    page = 'DEVICES_FOCUS';
}

let clickableElements;
let offsetTheUniqueOne, dotTheUniqueOne;

let clickableMouseOver = (event) =>
{
    followCursor.classList.add('goAway');

    cursor.classList.add('cursorHover');
    offsetTheUniqueOne = 50;
    let text = document.createElement('div');
    text.innerHTML = 'Click';
    text.classList.add('cursorCenterHover');
    cursor.innerHTML = "";
    cursor.appendChild(text);
};
let clickableMouseOut = (event) =>
{

    followCursor.classList.remove('goAway');

    cursor.classList.remove('cursorHover');
    offsetTheUniqueOne = 25;
    cursor.innerHTML = dotTheUniqueOne;
};

function removeClickable() {

    for(let clickableElement of clickableElements) {
        clickableElement.removeEventListener('mouseover', clickableMouseOver);
        clickableElement.removeEventListener('mouseout', clickableMouseOut);
    }
}

function initializeCursor() {
    let puzzleIndex = 0;
    // todo: se tto the amuont
    let setSize = 5;
    let currentImageSet = "";
    let previousX, previousY;


    // const cursor = document.querySelector('#cursor');
    // const clickableElements = document.querySelectorAll('.clickable');
    // offsetTheUniqueOne = 25;
    // dotTheUniqueOne = cursor.innerHTML;
    //
    // for(clickableElement of clickableElements)
    // {
    //     clickableElement.addEventListener('mouseover', (event) =>
    //     {
    //         cursor.classList.add('cursorHover');
    //         offsetTheUniqueOne = 50;
    //         let text = document.createElement('div');
    //         text.innerHTML = 'CLICK';
    //         text.classList.add('cursorCenterHover');
    //         cursor.innerHTML = "";
    //         cursor.appendChild(text);
    //     });
    //
    //     clickableElement.addEventListener('mouseout', (event) =>
    //     {
    //         cursor.classList.remove('cursorHover');
    //         offsetTheUniqueOne = 25;
    //         cursor.innerHTML = dotTheUniqueOne;
    //     });
    // }
    //
    // document.addEventListener('mousemove', event => {
    //     cursor.setAttribute('style', 'top: ' + (event.pageY - offsetTheUniqueOne) + "px; left: " + (event.pageX - offsetTheUniqueOne) + "px;");
    // });


    const cursor = document.querySelector('#cursor');
    const followCursor = document.querySelector('#followCursor');
    clickableElements = document.querySelectorAll('.clickable');
    const puzzleImageHoverElements = document.querySelectorAll('.puzzles');
    offsetTheUniqueOne = 25;
    dotTheUniqueOne = cursor.innerHTML;
    previousY = previousX = 0;
    for(clickableElement of clickableElements)
    {
        clickableElement.addEventListener('mouseover', clickableMouseOver);

        clickableElement.addEventListener('mouseout', clickableMouseOut);
    }

    for(puzzleImageHoverElement of puzzleImageHoverElements)
    {
        // console.error('lkajsdlkfjasdlkfj')
        puzzleImageHoverElement.addEventListener('mouseover', (event) =>
        {

            followCursor.classList.add('goAway');


            console.error('lkajsdlkfjasdlkfj')
            currentImageSet = 'puzzles';
            currentIndex = puzzleIndex++;
            displayImageHover(currentImageSet, (currentIndex % setSize));
        });

        puzzleImageHoverElement.addEventListener('mouseout', (event) =>
        {


            followCursor.classList.remove('goAway');

            currentImageSet = '';
            removeImageHover();
        });
    }

    document.addEventListener('mousemove', event => {
        let differenceX = (event.pageX - offsetTheUniqueOne);
        let differenceY = (event.pageY - offsetTheUniqueOne);
        cursor.setAttribute('style', 'top: ' + (event.pageY - offsetTheUniqueOne) + "px; left: " + (event.pageX - offsetTheUniqueOne) + "px;");
        followCursor.setAttribute('style', 'top: ' + (event.pageY - offsetTheUniqueOne) + "px; left: " + (event.pageX - offsetTheUniqueOne) + "px;");
        if(currentImageSet !== '' && ( (previousY - differenceY > 50) || (previousY - differenceY < -50) || (previousX - differenceX > 50) || (previousX - differenceX < -50) ))
        {
            displayImageHover(currentImageSet, (currentIndex++ % setSize), differenceX, differenceY);
            previousX = differenceX;
            previousY = differenceY;
        }
    });


    function displayImageHover(setName, setIndex, differenceX, differenceY)
    {
        // cursor.classList.add('removeCircle');
        // followCursor.classList.add('removeCircle');
        // offsetTheUniqueOne = 50;
        let img = document.createElement('img');
        // text.innerHTML = '<b>click</b>';
        img.setAttribute('style', 'top: ' + differenceY + "px; left: " + differenceX + "px;");
        img.setAttribute('src', 'assets/png/' + setName + '_' + setIndex + '.png');
        img.classList.add('imageCenterHover');
        // cursor.innerHTML = "";
        // cursor.appendChild(img);
        document.querySelector('body').appendChild(img);

        setTimeout(function() {
            img.remove();
        }, 2000);
    }

    function removeImageHover()
    {
        // cursor.classList.remove('removeCircle');
        // followCursor.classList.remove('removeCircle');
        offsetTheUniqueOne = 25;
        // cursor.innerHTML = dotTheUniqueOne;
    }
}

function updateTextPathOffset(offset){

    requestAnimationFrame(function() {
        temp_2 = offset;
        textPath.setAttribute('startOffset', temp_2);

    });

}

function animateColourChange(element, from, to) {

    let redInc, greenInc, blueInc;
    let redTo = parseInt('0x' + to.substr(1, 2)),
        greenTo = parseInt('0x' + to.substr(3, 2)),
        blueTo = parseInt('0x' + to.substr(5, 2));
    let red = parseInt('0x' + from.substr(1, 2)),
        green = parseInt('0x' + from.substr(3, 2)),
        blue = parseInt('0x' + from.substr(5, 2));

    redInc = (redTo > red ? redTo - red : red - redTo);
    greenInc = (greenTo > green ? greenTo - green : green - greenTo);
    blueInc = (blueTo > blue ? blueTo - blue : blue - blueTo);
    redInc /= ANIMATION_COLOUR_STEPS;
    greenInc /= ANIMATION_COLOUR_STEPS;
    blueInc /= ANIMATION_COLOUR_STEPS;

    let incRed = (redTo > red ? function() {red += redInc;} : function() {red -= redInc;}),
        incGreen = (greenTo > green ? function() {green += greenInc;} : function() {green -= greenInc;}),
        incBlue = (blueTo > blue ? function() {blue += blueInc;} : function() {blue -= blueInc;});

    let animationCounter = 0;

    let intervalID = setInterval(function() {
        if (animationCounter < ANIMATION_COLOUR_STEPS) {
            element.style.backgroundColor = '#' + Math.floor(red).toString(16) + Math.floor(green).toString(16) + Math.floor(blue).toString(16);
            incRed();
            incGreen();
            incBlue();
        } else {
            clearInterval(intervalID);
        }
        animationCounter++;
    }, 10);
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
            // showShape('computer_tilted');
        }
    }
}

function animateHomeTextScroll(from, to) {

    currentlyAnimating.sideBar = true;
    animateScrollRec(from, to, from);


}

function animatePagesTextScrollRec(current, last, down) {

    if (down && current < last) {
        DOM_ELEMENTS.DEVICES.sidebarText.style.top = (currentSideTextTop + current) + 'px';
        setTimeout(animatePagesTextScrollRec.bind(null, current + SIDE_TEXT_ANIMATION_STEP, last, down), TEXT_ANIMATION_SPEED);
    } else if (!down && current > last) {
        DOM_ELEMENTS.DEVICES.sidebarText.style.top = (currentSideTextTop + current) + 'px';
        setTimeout(animatePagesTextScrollRec.bind(null, current - SIDE_TEXT_ANIMATION_STEP, last, down), TEXT_ANIMATION_SPEED);
    } else if ((down && current >= last) || (!down && current <= last)) {
        currentlyAnimating.sideBar = false;
    }


}

function animatePagesTextScroll(down) {

    currentlyAnimating.sideBar = true;
    if (down) {

        if (page !== PAGES.VIDEOS && page !== PAGES.ABOUT && PAGE_LINKAGE[page].next !== PAGES.ABOUT)
            morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].next);
        animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]], sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]], down);


    } else {

        if (page !== PAGES.ABOUT || PAGE_LINKAGE[page].next !== PAGES.ABOUT)
            morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].prev);
        animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]], sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]], down);
    }
}

function animatePageText(up) {
    if (page === PAGES.HOME || (page === PAGES.WEBSITES && up)) {

        if (up) {

            HIDE[PAGES.WEBSITES]();
            currentPageAnimationOffset = -300;

            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset + 1300);
        } else {

            currentPageAnimationOffset = svgHelloPath.getTotalLength()-300;
            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset - 1600);
        }
    } else {

        animatePagesTextScroll(!up);
    }
}

// function animatePageText(up) {
//     if (page === PAGES.HOME || (page === PAGES.WEBSITES && up)) {
//         // currentState = STATES.ANIMATING;
//         // console.debug('gonna animatePageText', up)
//         if (up) {
//
//             HIDE[PAGES.WEBSITES]();
//             currentPageAnimationOffset = -300;
//
//             animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset + 1300);
//             currentPageAnimationOffset += 1300;
//         } else {
//
//             currentPageAnimationOffset = 1100;
//             // console.debug('gonna elseanimatePageText', up)
//             animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset - 1600);
//             currentPageAnimationOffset -= 1600;
//         }
//     } else {
//         // console.debug('gonna animatePagesTextScroll')
//
//         animatePagesTextScroll(!up);
//     }
// }

function animateDeviceUpright(upright, callback) {

    if (upright) {
        if (!showingUprightDevice) {
            showingUprightDevice = true;
            // currentState = STATES.ANIMATING;
            ANIMATION_DURATION_USED = 500;
            if (arguments.length > 1) {
                morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged, callback);
            } else {
                morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged);
            }
            ANIMATION_DURATION_USED = ANIMATION_DURATION;
        }
    } else {
        if (showingUprightDevice) {
            showingUprightDevice = false;
            // currentState = STATES.ANIMATING;
            ANIMATION_DURATION_USED = 500;
            if (arguments.length > 1) {
                morph(PAGE_MORPH_LINKAGE[page].enlarged, PAGE_MORPH_LINKAGE[page].curr, callback);
            } else {
                morph(PAGE_MORPH_LINKAGE[page].enlarged, PAGE_MORPH_LINKAGE[page].curr);
            }
            ANIMATION_DURATION_USED = ANIMATION_DURATION;
        }
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

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function useWindowHeight() {

    let a =  (-0.5*DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth + window.innerWidth*0.08)+ 'px';

    DOM_ELEMENTS.DEVICES.sidebarText.style.left = a;

    // let b = DOM_ELEMENTS.DEVICES.sizeVideos.offsetWidth;

    let c = getTextWidth('Websites', '10vw Booster');
     c = getTextWidth('Contact', '10vw Booster');
     c = getTextWidth('Apps', '10vw Booster');
    c = getTextWidth('Videos', '10vw Booster');

    // let errorRatios = [1.5, 2.4, 2.1, 1.028138528];
    let errorRatios = [1.5, 2.4, 2.1, 2.8];
    // let errorRatios = [2.1, 2.4, 2.1, 2.8];

    let currentSum = 0, sideTextResult = '';
    for (let m = 0; m < MENU_ITEMS.length; m++) {
        sideTextResult += MENU_ITEMS[m];
        currentSum += (getTextWidth(MENU_ITEMS[m], '10vw Booster')*errorRatios[m]);// + (m === 0 ? 5000 : 0);
        sideTextOffsets[m] = -0.5*(DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth - currentSum);
    }


    DOM_ELEMENTS.DEVICES.sidebarText.style.top = sideTextOffsets[0] + 'px';



    SVGController.resize(window.innerWidth, window.innerHeight);

}

function checkQueuedInstructions() {

    if (queuedInstruction != null) {
        // if (isReady()) {
        if (currentState === STATES.READY) {
            queuedInstruction();
        } else {
            setTimeout(checkQueuedInstructions, 300);
        }
    }

}

let checkDeviceState = (function () {
    let timeout, timeoutFunction;
    return function () {

        timeoutFunction = function () {
            console.error('running timeout')

            console.error('currentMousePosition ', currentMousePosition)
            console.error('showingUprightDevice', showingUprightDevice)

            if (isReady('devices')) {
                if (currentMousePosition === MOUSE_POSITIONS.ON_DEVICE && !showingUprightDevice) {
                    // morph back
                    //todo
                    animateDeviceUpright(true);
                } else if (currentMousePosition === MOUSE_POSITIONS.OFF_DEVICE && showingUprightDevice) {

                    animateDeviceUpright(false);

                }
                timeout = undefined;
            } else {
                timeout = setTimeout(timeoutFunction, 100);
            }
        };

        console.error('whatswhatswhatsup timeout', timeout);

        if (timeout === undefined) {

            timeout = setTimeout(timeoutFunction, 300);
        }
    }
})();

function isReady() {

    if (arguments.length > 0) {
        for (let animation of animationOwners[arguments[0]]) {
            if (currentlyAnimating[animation]) {
                return false;
                break;
            }
        }
        return true;
    } else {
        for (let animation in currentlyAnimating) {
            if (currentlyAnimating[animation]) {
                return false;
                break;
            }
        }
        return true;
    }
}

function initializeContent() {
    elementDivDevicesContainer.style.opacity = '1.0';

    SVGController.showPage(PAGES.HOME);

    SVGController.handleEvent(0, 'HOME');
    SVGController.handleEvent(0, 'WEBSITES');

    SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.start();


    showShape('computer_tilted');

    showNothing();

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


    for (let pageDOMElement in DOM_ELEMENTS) {
        for (let domElement in DOM_ELEMENTS[pageDOMElement]) {
            DOM_ELEMENTS[pageDOMElement][domElement] = document.getElementById(pageDOMElement + '_' + domElement);
        }
    }



    elementDivDevicesContainer = document.getElementById('DEVICES_container');
    elementSVGCore = document.getElementById('svg_core');
    elementSVGDevices = document.getElementById("svg_devices");
    elementSVGHelloPath = document.querySelector('#svg_hello');
    SVGContainer = [elementSVGCore, elementSVGDevices, elementSVGHelloPath];

    textPath = document.querySelector('#HOME_helloTextPath');
    textPath2 = document.querySelector('#text-path2');
    textPath3 = document.querySelector('#text-path3');
    textPath4 = document.querySelector('#text-path4');
    textPath5 = document.querySelector('#text-path5');
    classElementEllipse = document.getElementsByClassName('ellipse');
    classElementScroll = document.getElementsByClassName('scroll');


    snapContentInformation = Snap.select('#content_information');
    idElementExitPage = document.getElementById('exit_page');

    elementBody = document.getElementsByTagName("BODY")[0];

    idElementPageInformation = document.getElementById('page_indicator_information');

    snapSVGDevicesGroup = Snap.select('#DEVICES_group');

    snapSVGPageInformation = Snap.select('#GLOBALS_currentPage');

    svgHelloPath = document.getElementById('HOME_helloPath');

    elementContactMain = document.getElementById('contact_us_main');

    elementOverDevice = document.getElementById('DEVICES_container__hover');

    /** Global Variables */
    snapSVGMain = Snap(elementSVGDevices);
    shapes = {};
    shapeAttributes = {};
    shapeImages = {};

    page = PAGES.HOME;
    previousPage = 'computer_tilted';

    currentScrollDelta = 0;
    // todo
    // currentPageAnimationOffset = 1300;
    currentPageAnimationOffset = 0;
    currentState = STATES.READY;
    currentSideTextTop = 0;

    currentlyAnimating = {
        sideBar: false,
        mainSVG: false,
        busyAnimatingPre: false,
        busyAnimatingPost: false
    };
    animationOwners = {
        devices: ['busyAnimatingPre', 'busyAnimatingPost']
    };

    queuedInstruction = null;

    lockedOnPage = false;

    layout = 0;

    showingUprightDevice = false;
    showingFocusDevice = false;

    currentShape;
    //     {
    //     shapeName: '',
    //     shapeIndex: -1,
    //     get name() {
    //         return this.shapeName;
    //     },
    //     set name(newName) {
    //          this.shapeName = newName;
    //     },
    //     set index(newIndex) {
    //         this.shapeIndex = newIndex;
    //     }
    // };

    for (let shape in SHAPES) {
        shapes[shape] = new Array(SHAPES[shape].elements);
        shapeAttributes[shape] = new Array(SHAPES[shape].elements);
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            shapes[shape][e] = Snap.select('#' + shape + '_' + e);
            if (e < SHAPES[shape].stop)
                shapeAttributes[shape][e] = shapes[shape][e].node.getAttribute('d');
        }
    }



    SVGController.initialize();

    for (let elementPage in DEVICE_FOCUS_PAGES) {
        for (let focusPage = 0; focusPage < DEVICE_FOCUS_PAGES[elementPage].length; focusPage++) {

            for (let svgElement = 0; svgElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS.length; svgElement++) {
                DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS[svgElement].instance.attr({visibility: 'hidden'});
            }
            for (let domElement = 0; domElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS.length; domElement++) {
                DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS[domElement]].style.visibility = 'hidden';
            }
        }
    }


    // TODO
    // for (let shape in SHAPES) {
    //     shapeImages[shape] = new Array(SHAPES[shape].imageStop+1);
    //     for (let e = 0; e < SHAPES[shape].imageStop; e++) {
    //         shapeImages[shape][e] = Snap.select('#' + shape + '_image_' + e);
    //     }
    // }



    // SVGController.inst();


    SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.line.instance.animate({y2: 0.3*window.innerHeight}, 1000);

}



function mainScrollHandler(deltaY) {

    // if (SCROLL_DELTA === -1)
    //     SCROLL_DELTA = deltaY;

    console.debug('lockedOnPage', lockedOnPage)
    console.debug('showingUprightDevice', showingUprightDevice)
    console.debug('isReady()', isReady())

    if (!lockedOnPage) {
        if (showingUprightDevice) {
            animateDeviceUpright(false, () => mainScrollHandler(deltaY));
        } else {
            if (isReady()) {
                // if (currentState === STATES.READY) {
                if (deltaY > 0) {
                    /** scrolled downwards */
                    if (page !== PAGES.ABOUT)
                        INSTRUCTIONS.SCROLL_DOWN();
                } else {
                    /** scrolled upwards */
                    if (page !== PAGES.HOME)
                        INSTRUCTIONS.SCROLL_UP();
                }
            } else {
                // if (queuedInstruction != null) {
                //     queuedInstruction = (deltaY > 0 ? INSTRUCTIONS.SCROLL_DOWN : INSTRUCTIONS.SCROLL_UP);
                //     checkQueuedInstructions();
                // }
            }
        }
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
    //     showShape('computer_tilted');
    //     changePage('computer_tilted');
    // } else if ($(this).scrollTop() > 2*currentHeight && $(this).scrollTop() < 3*currentHeight) {
    //     changePage('mobile_tilted');
    // } else if ($(this).scrollTop() > 3*currentHeight && $(this).scrollTop() < 4*currentHeight) {
    //     changePage('video_large');
    // }
}

function onContentClick() {
    // PAGE_ACTIONS[page].CLICK();

    if (!lockedOnPage) {
        SHOW['LOCKED']();
        idElementContentInformation.style.opacity = '1.0';
        morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged);
        fillContent();
    }

}

function onBackClick() {
    lockedOnPage = false;
    HIDE['LOCKED']();
}

function onMouseClickCloseDeviceFocus() {

    page = previousDevicePage;

    // SVGController.showPageExact('DEVICES');


    // for (let notVisibleElement in FOCUS_PAGES[page].makeVisible) {
    //     FOCUS_PAGES[page].makeVisible[notVisibleElement].style.visibility = 'visible';
    // }


    for (let elementPage in DEVICE_FOCUS_PAGES) {
        for (let focusPage = 0; focusPage < DEVICE_FOCUS_PAGES[elementPage].length; focusPage++) {

            for (let svgElement = 0; svgElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS.length; svgElement++) {
                DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS[svgElement].instance.attr({visibility: 'hidden'});
            }
            for (let domElement = 0; domElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS.length; domElement++) {
                DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS[domElement]].style.visibility = 'hidden';
            }
        }
    }

    SVG_ELEMENTS.DEVICES.group.animation.move(false, () => {

        // if (!showingUprightDevice) {
        morph(PAGE_MORPH_LINKAGE[page].enlarged, PAGE_MORPH_LINKAGE[page].curr);
        // }
    });



    // elementBody.style.backgroundColor = PAGE_COLOURS.DEVICES_FOCUS;
    elementBody.style.backgroundColor = PAGE_COLOURS[page];


    SVGController.handleEvent(SVG_EVENTS_NAMED.pageOut, 'DEVICES_FOCUS');
    SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, page);
    // SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, 'DEVICES');

    DOM_ELEMENTS.DEVICES.sidebarText.style.visibility = 'visible';
    DOM_ELEMENTS.DEVICES_FOCUS.header.style.visibility = 'hidden';
    // DOM_ELEMENTS.DEVICES_FOCUS.
    // DOM_ELEMENTS.DEVICES_FOCUS.header.innerText = DEVICES_FOCUS_PAGE_HEADERS[page];

    // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.attr({visibility: 'hidden'});
    // SVG_ELEMENTS.GLOBALS.sidePageInformation.instance.attr({visibility: 'hidden'});
    SVG_ELEMENTS.GLOBALS.sidePageInformation.instance.attr({opacity: '1.0'});

    // setFocusPage();

    showingFocusDevice = false;
}

function onMouseClickDevice() {


    if (SVG_PAGE_LOOKUP[page] === 'DEVICES' && !showingFocusDevice) {
        console.log('FIRE CLICK EVENT');
        showingFocusDevice = true;

        // todo: was uncommented
        // SVGController.showPageExact('DEVICES_FOCUS');
        SVG_ELEMENTS.DEVICES_FOCUS.divider.instance.attr({visibility: 'visible'});

        // if (!showingUprightDevice) {
        //     morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged);
        // }

        // for (let notVisibleElement in FOCUS_PAGES[page].makeVisible) {
        //     FOCUS_PAGES[page].makeVisible[notVisibleElement].style.visibility = 'visible';
        // }


        for (let elementPage in DEVICE_FOCUS_PAGES) {
            for (let focusPage = 0; focusPage < DEVICE_FOCUS_PAGES[elementPage].length; focusPage++) {

                for (let svgElement = 0; svgElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS.length; svgElement++) {
                    DEVICE_FOCUS_PAGES[elementPage][focusPage].SVG_ELEMENTS[svgElement].instance.attr({visibility: (page === elementPage ? 'visible' : 'hidden')});
                }
                for (let domElement = 0; domElement < DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS.length; domElement++) {
                    DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS[domElement]].style.visibility = (page === elementPage && focusPage === 0 ? 'visible' : 'hidden');
                }
            }
        }

        SVG_ELEMENTS.DEVICES.group.animation.move(true, () => {

            if (!showingUprightDevice) {
                morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged);
            }
        });

        elementBody.style.backgroundColor = PAGE_COLOURS.DEVICES_FOCUS;


        SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, 'DEVICES_FOCUS');

        DOM_ELEMENTS.DEVICES.sidebarText.style.visibility = 'hidden';
        DOM_ELEMENTS.DEVICES_FOCUS.header.style.visibility = 'visible';
        DOM_ELEMENTS.DEVICES_FOCUS.header.innerText = DEVICES_FOCUS_PAGE_HEADERS[page];

        // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.attr({visibility: 'hidden'});
        // SVG_ELEMENTS.GLOBALS.sidePageInformation.instance.attr({visibility: 'hidden'});
        SVG_ELEMENTS.GLOBALS.sidePageInformation.instance.attr({opacity: '0.0'});

        DOM_ELEMENTS.DEVICES_FOCUS.information.setAttribute( "xlink:href", "./" + DEVICE_FOCUS_PAGES[page][0].informationImagePath );

        setFocusPage();

        SVGController.resize(window.innerWidth, window.innerHeight);

    } else {

    }
}

function onMouseEnterDevice() {

    currentMousePosition = MOUSE_POSITIONS.ON_DEVICE;


    // fire event pagein svgcontroller
    // make the page visible
    // call device function to move device in place

    console.debug('SVG_PAGE_LOOKUP[page] === \'DEVICES\'', SVG_PAGE_LOOKUP[page]  === 'DEVICES')
    console.debug(' isReady(\'devices\')',  isReady('devices'))
    console.debug('VG_PAGE_LOOKUP[page]', SVG_PAGE_LOOKUP[page])


    if (!showingFocusDevice && SVG_PAGE_LOOKUP[page] === 'DEVICES') {

        if (isReady('devices')) {
            animateDeviceUpright(true);
        } else {
            checkDeviceState();
        }


    }

}

function onMouseLeaveDevice() {

    currentMousePosition = MOUSE_POSITIONS.OFF_DEVICE;

    console.debug('SVG_PAGE_LOOKUP[page] === \'DEVICES\'', SVG_PAGE_LOOKUP[page]  === 'DEVICES')
    console.debug(' isReady(\'devices\')',  isReady('devices'))
    console.debug('VG_PAGE_LOOKUP[page]', SVG_PAGE_LOOKUP[page])
    if (!showingFocusDevice && SVG_PAGE_LOOKUP[page] === 'DEVICES' ) {

        if (isReady('devices')) {
            animateDeviceUpright(false);
        } else {
            checkDeviceState();
        }

    }
}

function onMouseEnterCloseButton() {
    if (SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance != null)
        SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({fill: 'black'});
}

function onMouseLeaveCloseButton() {
    if (SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance != null)
        SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({fill: 'none'});
}

function onPageClick(goToPage) {

    for (let p = 0; p < DEVICE_FOCUS_PAGES[previousDevicePage].length; p++) {
        for (let s = 0; s < DEVICE_FOCUS_PAGES[previousDevicePage][p].SVG_ELEMENTS.length; s++) {
            DEVICE_FOCUS_PAGES[previousDevicePage][p].SVG_ELEMENTS[s].instance.attr({visibility: (p === goToPage ? 'visible' : 'hidden')});
        }
        for (let s = 0; s < DEVICE_FOCUS_PAGES[previousDevicePage][p].DOM_ELEMENTS.length; s++) {
            if (!(p === 0 && s === 0)) {
                DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[previousDevicePage][p].DOM_ELEMENTS[s]].style.display = (p === goToPage ? 'block' : 'none');
            }
        }
        if (goToPage === p)
            DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[previousDevicePage][p].control].classList.add('selectedPage');
        else
            DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[previousDevicePage][p].control].classList.remove('selectedPage');
    }
    DOM_ELEMENTS.DEVICES_FOCUS.information.setAttribute( "xlink:href", "./" + DEVICE_FOCUS_PAGES[previousDevicePage][goToPage].informationImagePath );

}

/** ---------------------------------- */


/** Overwritten Functions */

window.onload = function() {


    initializeVariables();
    initializeContent();
    initializeCursor();


    let elementRestContent = document.getElementById('rest_content');
    let elementLoadContent = document.getElementById('load_content');

    elementRestContent.style.opacity = '1.0';
    elementLoadContent.style.opacity = '0.0';
    // elementLoadContent.style.display = 'none';
    // elementRestContent.style.display = 'block';

    elementBody.style.backgroundColor = BLACK_COLOUR;

    window.onresize = function() {

        // for (let s = 0; s < SVGContainer.length; s++) {
        //     console.debug('SVGContainer[s]', SVGContainer[s])
        //     SVGContainer[s].setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' +  window.innerWidth);
        // }

        if (typeof timerScheduled === 'undefined') {
            /** Initial size of window. */
            // console.debug('initiali size o fwinow')
            timerScheduled = false;
        } else {
            if (!timerScheduled) {
                latestWindowSizeUpdateTimestamp = Date.now();
                setTimeout(function() {
                    if ((Date.now() - latestWindowSizeUpdateTimestamp) > 200) {

                        useWindowHeight();

                        // console.error('FIRE w', window.innerWidth, 'h', window.innerHeight)
                        timerScheduled = false;

                    }
                } , 500);
                timerScheduled = true;
            }
        }
    };

    window.onscroll = function () {
        mainScrollHandler();

    }
};




window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        alert("Thanks!");
    }

    function error() {
        alert("Oops! There was a problem.");
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}