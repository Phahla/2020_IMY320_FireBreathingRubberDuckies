
let temp = 4400;
function justrunthis() {
    // temp -= 100; updateTextPathOffset(temp);
    // idElementSideBar.style.top = '600px'

    showShape('mobile_tilted');
    morph('mobile_tilted', 'computer_tilted');

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

    const SHAPES = {
        // desktop: {
        //     elements: 6,
        //     stop: 5
        // },

        // mobile: {
        //     elements: The amount of elements.
        //     stop: The stopping point when path elements stop.
        //     imageStop: The index at which image for this object stop.
        // },
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

    const PAGE_COLOURS = {
        HOME: '#262626',
        WEBSITES: '#F5CB67',
        APPS: '#619B99',
        VIDEOS: '#A16F8D',
        ABOUT: '#B84100',
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



    const DISPLAY = {
        HOME: function() {
            for (let el = 0; el < classElementScroll.length; el++)
                classElementScroll[el].style.opacity = '0.7';
            for (let el = 0; el < classElementEllipse.length; el++)
                classElementEllipse[el].style.opacity = '0.7';
            // idElementDuckLogo.style.opacity = '0.7';
        },
        DEVICES: function (show) {

            // console.debug('running DEVICES show', show)

            if (show) {
                settings.opacity = DEFAULT_VISIBLE_OPACITY;
                settings.visibility = 'visible';
            } else {
                settings.opacity = '0.0';
                settings.visibility = 'hidden';
            }

            // for (let pageDOMElement in DOM_ELEMENTS) {
                for (let domElement in DOM_ELEMENTS.DEVICES) {
                    if (domElement === 'container')
                        settings.visibility = 'visible';

                    // if (pageDOMElement === SVG_PAGE_LOOKUP[page])

                    // if (show && p) {
                    //     settings.opacity = DEFAULT_VISIBLE_OPACITY;
                    //     settings.visibility = 'visible';
                    // } else {
                    //     settings.opacity = '0.0';
                    //     settings.visibility = 'hidden';
                    // }


                    // if (page !== 'DEVICES_FOCUS')
                        console.debug('what id domElement', domElement)
                        DOM_ELEMENTS.DEVICES[domElement].style.visibility = settings.visibility;

                    // console.debug('DOM_ELEMENTS[pageDOMElement][domElement]', DOM_ELEMENTS[pageDOMElement][domElement], 'settings.visibility', settings.visibility)
                }
            // }

            // showShape('computer_tilted');
        },
        WEBSITES: function(show) {
            // todo: add optimization
            DISPLAY.DEVICES(show);
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.7';
            // idElementSideBar.style.opacity = '0.7';
        },
        LOCKED: function (show) {
            lockedOnPage = true;
            idElementExitPage.style.opacity = '1.0';
            // idElementSideBar.style.left = (currentSideTextLeft - 100) + 'px';
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
            // idElementSideBar.style.opacity = '0.7';
        },
        LOCKED: function () {
            lockedOnPage = true;
            idElementExitPage.style.opacity = '1.0';
            DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.7';
            // idElementSideBar.style.left = (currentSideTextLeft - 100) + 'px';
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
            // idElementSideBar.style.opacity = '0.0';
            // showNothing();
        },
        LOCKED: function () {
            idElementExitPage.style.opacity = '0.0';
            // idElementSideBar.style.left = (currentSideTextLeft) + 'px';
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
                // showShape('computer_tilted');
                // showShape('mobile_tilted');
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
        READY: 1
    };

    const INSTRUCTIONS = {
        SCROLL_UP: function () {
// todo: DOO THIS
            elementBody.style.backgroundColor = PAGE_COLOURS[PAGE_LINKAGE[page].prev];



            // if (page === PAGES.HOME) {
            //
            // } else if (page === PAGES.WEBSITES) {
            //
            //     // elementMainContent.classList.remove('clickable');
            //     // initializeCursor();
            //
            //
            //
            //     SHOW[PAGES.HOME]();
            //     HIDE[PAGES.WEBSITES]();
            //     animatePageText(true);
            //
            // } else {
            //     animatePageText(true);
            // }


            // DISPLAY[page](false);
            // DISPLAY[PAGE_LINKAGE[page].prev](true);

            if (page === PAGES.VIDEOS) {
                SVG_ELEMENTS.DEVICES.group.instance.attr({visibility: 'hidden'});
            }


                DISPLAY[SVG_PAGE_LOOKUP[page]](false);
                DISPLAY[SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].prev]](true);

            animatePageText(true);

            if (SVG_PAGE_LOOKUP[page] !== SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].prev]) {
                // SVGController.prevPage();
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageOut, page);
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, PAGE_LINKAGE[page].prev);
            }

            setPrevPage();

            // SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn);

            snapSVGPageInformation.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));
            // DOM_ELEMENTS.GLOBALS.currentPage.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));

            // idElementPageInformation.innerText = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1)) + ' / 4';




        },
        SCROLL_DOWN: function () {
            elementBody.style.backgroundColor = PAGE_COLOURS[PAGE_LINKAGE[page].next];




            // console.debug('lkj')
            // PAGE_ACTIONS[page].SCROLL_DOWN();

            // if (page === PAGES.HOME) {
            //
            //     // todo: elementDivDevicesContainer.classList.add('clickable');
            //     // todo: initializeCursor();
            //
            //     SHOW[PAGES.WEBSITES]();
            //     HIDE[PAGES.HOME]();
            //     // showShape('computer_tilted');
            //     // animatePageText(false);
            //     // window.scrollTo(window.innerHeight, 0);
            //     // PAGE_LINKAGE[page].nextPage();
            // } else {
            //
            // }


            if (page === PAGES.VIDEOS) {
                SVG_ELEMENTS.DEVICES.group.instance.attr({visibility: 'hidden'});
            }



            DISPLAY[SVG_PAGE_LOOKUP[page]](false);
            DISPLAY[SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].next]](true);

            currentState = STATES.SCROLLING;
            animatePageText(false);


            if (SVG_PAGE_LOOKUP[page] !== SVG_PAGE_LOOKUP[PAGE_LINKAGE[page].next]) {
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageOut, page);
                SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn, PAGE_LINKAGE[page].next);
            }


            // SVGController.nextPage();

            setNextPage();

            snapSVGPageInformation.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));
            // DOM_ELEMENTS.GLOBALS.currentPage.node.textContent = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1));
            // idElementPageInformation.innerText = (page === PAGES.HOME ? 0 : (PAGES_INDEXES[page]+1)) + ' / 4';
        }
    };

    const SVG_INSTRUCTIONS = {
        multiply: ([currentValue, newValue]) => {
            // console.debug('\t\tmultiply currentValue, newValue', currentValue, newValue)
            return currentValue * newValue;
        },
        returnCurrentValue: ([currentValue, newValue]) => {
            // console.debug('\t\treturnCurrentValue currentValue, newValue', currentValue, newValue)
            return currentValue;
        },
        returnNewValue: ([currentValue, newValue]) => {
            // console.debug('\t\twas currentValue, newValue', currentValue, newValue)
            return newValue;
        },
        returnFirst: ([first]) => {
            // console.debug('\t\twas currentValue, newValue', currentValue, newValue)
            return first;
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
            websiteList: null
        },
        ABOUT: {
            main: null
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
                                         parameter: ['height'],
                                         instruction: ([h]) => {return 0.3*h;},
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
                                         instruction: ([h]) => {return 'translate(0 ' + 0.33*h + ')';},
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
                                     // console.debug('ANIMATION RUNNING translate', 'translate(' + (0.1*window.innerWidth) + ' ' + (0.4*window.innerHeight + 100) + ')')
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.running = true;
                                     SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
                                         {transform: 'translate(0 ' + (0.4*window.innerHeight + 40) + ')', opacity: 1.0},
                                         1000,
                                         mina.linear,
                                         () => {
                                             // console.debug('ANIMATION DONE SON')
                                             SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
                                                 {transform: 'translate(0 ' + (0.4*window.innerHeight) + ')', opacity: 0.0},
                                                 1000,
                                                 mina.linear,
                                                 () => {
                                                                         // console.debug('ANIMATION GOES AGAIN SON')
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
                            SVG_ELEMENTS.HOME.side.instance.stop().animate(
                                {x: -SVG_ELEMENTS.HOME.side.instance.attr('width') + (SVG_ELEMENTS.HOME.side.animation.direction ? 0.2*window.innerWidth-1 : 0)},
                                1000,
                                mina.linear,
                                () => {SVG_ELEMENTS.HOME.side.animation.running = false;}
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
                            // SVG_ELEMENTS.HOME.side.animation.start();
                        },
                    },
                    pageIn: {
                        callback: () => {
                            // setTimeout(SVG_ELEMENTS.HOME.side.animation.start, 500);
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
                            transform: {
                                enabled: [true],
                                lookupStop: 2,
                                parameter: ['width', 'height', 0.2],
                                instruction: ([w, h, v]) => {return 'scale(' + (w/1920) + ', ' + (h/1080) + ')';},
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
                                    // console.debug('im ding thsi DOM_ELEMENTS.topRight__backgroundImage', DOM_ELEMENTS.topRight__backgroundImage)
                                    DOM_ELEMENTS.topRight__backgroundImage.setAttribute( "xlink:href", "./paper_black.png" );
                                }
                            );
                        } else {
                            SVG_ELEMENTS.HOME.topRight.animation.running = false;
                        }
                    },
                    stop: () => {SVG_ELEMENTS.HOME.topRight.animation.halt = true},
                    halt: false,
                    running: false
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
                            // setTimeout(SVG_ELEMENTS.HOME.side.animation.start, 500);




                            // SVG_ELEMENTS.HOME.topRight.animation.start();
                            // console.debug('im ding thsi DOM_ELEMENTS.topRight__backgroundImage', DOM_ELEMENTS.HOME.topRight__backgroundImage)
                            DOM_ELEMENTS.HOME.topRight__backgroundImage.setAttribute( "xlink:href", "./paper_black.png" );
                        },
                    },
                    pageIn: {
                        callback: () => {
                            // setTimeout(SVG_ELEMENTS.HOME.side.animation.start, 500);



                            // SVG_ELEMENTS.HOME.topRight.animation.start();
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
                            // console.log('qwe');
                            SVG_ELEMENTS.DEVICES.sideBackground.instance.attr({visibility: 'visible', width: 0});
                            SVG_ELEMENTS.DEVICES.sideBackground.animation.direction = true;
                            if (!SVG_ELEMENTS.DEVICES.sideBackground.animation.running)
                                setTimeout(() => {
                                    SVG_ELEMENTS.DEVICES.sideBackground.animation.start();
                                    DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.8';
                                    // setTimeout(() => {
                                    // }, 2000);
                                }, 2000);
                            // SVG_ELEMENTS.DEVICES.sideBackground.animation.start();
                        },
                    },
                    pageOut: {
                        callback: () => {
                            // console.log('qwe');
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
                                transform: SVG_ELEMENTS.DEVICES.group.transformString +  ' translate(' + (toRight ? (0.35*window.innerWidth) + ' 0' : '0 0') + ')',
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
                            transform: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width', 'height'],
                                instruction: ([w, h]) => {SVG_ELEMENTS.DEVICES.group.transformString = 'scale(' + w/1920 + ' ' + h/1080 + ')'; return SVG_ELEMENTS.DEVICES.group.transformString;},
                                animate: false, // animate has to be specified
                                animation: null
                            }
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
                             console.debug('befores setting this shsitt SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr(\'width\')', SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height'))
                             console.debug('reeessssssssssss settin', -(SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height') - 0.2 * window.innerWidth))
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
                                 parameter: ['width'],
                                 instruction: ([w]) => {
                                     return -(SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('width') - 0.6 * w);
                                 },
                                 animate: false, // animate has to be specified
                                 animation: null
                             }
                         }
                     },
                     pageIn: {
                         callback: () => {
                             // console.log('qwe');
                             SVG_ELEMENTS.DEVICES_FOCUS.information.animation.direction = true;
                             SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr({visibility: 'visible', x: -SVG_ELEMENTS.DEVICES_FOCUS.information.instance.attr('height')});
                             // SVG_ELEMENTS.DEVICES_FOCUS.information.animation.direction = true;
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.information.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.information.animation.start();
                             // setTimeout(() => {
                             //     SVG_ELEMENTS.DEVICES_FOCUS.information.animation.start();
                             //     // DOM_ELEMENTS.DEVICES.sidebarText.style.opacity = '0.8';
                             //     // setTimeout(() => {
                             //     // }, 2000);
                             // }, 2000);
                             // SVG_ELEMENTS.DEVICES_FOCUS.information.animation.start();
                         },
                     },
                     pageOut: {
                         callback: () => {
                             // console.log('qwe');
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
                             // console.debug('yupy')
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
                                     console.debug('jklsdflkjasdfjkl; SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr(\'width\')', SVG_ELEMENTS.DEVICES_FOCUS.more.instance.attr('width'));
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
                             // SVG_ELEMENTS.DEVICES_FOCUS.more.animation.direction = true;
                             if (!SVG_ELEMENTS.DEVICES_FOCUS.more.animation.running)
                                 SVG_ELEMENTS.DEVICES_FOCUS.more.animation.start();
                         },
                     },
                     pageOut: {
                         callback: () => {
                             // console.log('qwe');
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
                            // console.debug('yupy')
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
                            }
                        }
                    }
                },
                events: {
                    resize: {
                        changes: {
                            x: {
                                enabled: [true],
                                lookupStop: Number.MAX_VALUE,
                                parameter: ['width'],
                                instruction: ([w]) => {
                                    console.debug('jklsdflkjasdfjkl; SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr(\'width\')', SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr('width'));
                                    return -(SVG_ELEMENTS.DEVICES_FOCUS.back.instance.attr('height') - 0.2*window.innerWidth);
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
                            // SVG_ELEMENTS.DEVICES_FOCUS.back.animation.direction = true;
                            // if (!SVG_ELEMENTS.DEVICES_FOCUS.back.animation.running)
                            //     SVG_ELEMENTS.DEVICES_FOCUS.back.animation.start();
                        },
                    },
                    pageOut: {
                        callback: () => {
                            // console.log('qwe');
                            SVG_ELEMENTS.DEVICES_FOCUS.back.animation.direction = false;
                            if (!SVG_ELEMENTS.DEVICES_FOCUS.back.animation.running)
                                SVG_ELEMENTS.DEVICES_FOCUS.back.animation.start();
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
                            // console.debug('yupy')
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
            DOM_ELEMENTS: ['websiteList', 'website0']
        }, {
            SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgWebsite_1],
            DOM_ELEMENTS: ['website1']
        }],
        APPS: [{
            SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgApps_0],
            DOM_ELEMENTS: ['apps']
        }],
        VIDEOS: [{
            SVG_ELEMENTS: [SVG_ELEMENTS.DEVICES_FOCUS.imgVideo_0],
            DOM_ELEMENTS: ['video']
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
    let timerScheduled;

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

/** ----------------------------------- */

/** ------------ Classes ------------ */

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
//
// function translateChange(object, key) {
//     if (Array.isArray(object)) {
//         return object[layout].key;
//     } else {
//         return object.key;
//     }
// }

class SVGController {


    // static parameterLookup = {
    //     width: 0,
    //     height: 0,
    // };

    static initialize() {

        for (let elementPage in SVG_ELEMENTS) {

            // console.debug('for elementPage', elementPage)

            // console.debug('what is apge', page)

            for (let element in SVG_ELEMENTS[elementPage]) {



                SVG_ELEMENTS[elementPage][element].instance = Snap.select('#' + elementPage + '_' + element);

                // console.debug('for element', element, 'SVG_ELEMENTS[elementPage][element].instance', SVG_ELEMENTS[elementPage][element].instance)


                if (Object.keys(SVG_ELEMENTS[elementPage][element].dependents).length > 0 && SVG_ELEMENTS[elementPage][element].dependents.constructor === Object) {
                    for (let dependentElement in SVG_ELEMENTS[elementPage][element].dependents) {
                        SVG_ELEMENTS[elementPage][element].dependents[dependentElement].instance = Snap.select('#' + elementPage + '_' + element + '__' + dependentElement);
                        // console.debug('innnnnnnnnneeerrrfor SVG_ELEMENTS SVG_ELEMENTS[elementPage][element].dependents[dependentElement]', SVG_ELEMENTS[elementPage][element].dependents[dependentElement])
                    }
                }

                // console.debug('after some jazzz ', SVG_ELEMENTS)

                // console.debug('for SVG_ELEMENTS', SVG_ELEMENTS)

                // PAGE_SVG_INDEX_ARRAY[elementPage] = [];
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
                        // console.debug('what id udnefined SVG_ELEMENTS[elementPage][element]', SVG_ELEMENTS[elementPage][element])
                        for(let externalElementIndex = 0; externalElementIndex < SVG_ELEMENTS[elementPage][element].external.length;  externalElementIndex++) {
                            SVG_EVENT_LISTENERS[elementPage][SVG_EVENTS[ev]].push(SVG_ELEMENTS[SVG_ELEMENTS[elementPage][element].external[externalElementIndex][0]][SVG_ELEMENTS[elementPage][element].external[externalElementIndex][1]]);
                        }
                    }
                }


            }
        }
        // console.error('for SVG_EVENT_LISTENERS', SVG_EVENT_LISTENERS)

        // console.debug('SVG_ELEMENTS.GLOBALS.sidePageInformation.instance', SVG_ELEMENTS.GLOBALS.sidePageInformation.instance)
        // SVG_ELEMENTS.GLOBALS.sidePageInformation.instance.toFront();

    }

    static translateChange(object, key) {
        // console.debug('translateChange object, key', object, key)
        if (Array.isArray(object)) {

            // console.debug('is array')
            return object[layout][key];
        } else {
            // console.debug('not array')
            return object[key];
        }
    }

    static handleEvent(event, onPage) {

        // console.log('called handleEvent event', event, 'and onPage', onPage, 'SVG_PAGE_LOOKUP[onPage]', SVG_PAGE_LOOKUP[onPage]);

        let changes;
        let parameterLookup = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        for (let subscribedElement = 0; subscribedElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length; subscribedElement++) {


            // console.debug('for event', SVG_EVENTS[event])
            // console.debug('event', SVG_EVENTS[event])

            let elementPointer;
            let listeningElement = 0;
            let dependentElement = 0;

            // console.debug('SVG_EVENT_LISTENERS[page]', SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]])
            // console.debug('SVG_EVENTS[event]', SVG_EVENTS[event]);
            // console.debug('subscribedElement', subscribedElement)

            let dependentArray = Object.keys(SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement].dependents);
            while(listeningElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length || dependentElement < dependentArray.length) {

                // console.debug('listeningElement', listeningElement, 'dependentElement', dependentElement)

                /** While body. */
                if (listeningElement < SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]].length) {
                    elementPointer = SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement];
                    // console.debug('lielementPointer', elementPointer)

                } else {
                    elementPointer = SVG_EVENT_LISTENERS[SVG_PAGE_LOOKUP[onPage]][SVG_EVENTS[event]][subscribedElement].dependents[dependentArray[dependentElement]];
                    // console.debug('otherlielementPointer', elementPointer)
                    // console.debug('AAAAAAAAotherlielementPointer dependentArray[dependentElement]', dependentArray[dependentElement], 'SVG_EVENT_LISTENERS[page][SVG_EVENTS[event]][subscribedElement].dependents[dependentArray[dependentElement]]', SVG_EVENT_LISTENERS[page][SVG_EVENTS[event]][subscribedElement].dependents[dependentArray[dependentElement]])
                }

                // console.debug('elementPointer', elementPointer)



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

                                // console.debug('after changes', changes)

                                if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'animate')) {

                                    // console.debug('animate')

                                    animateWrapper(elementPointer.instance, SVGController.translateChange(elementPointer.events.resize.changes[change], 'animation'), changes);

                                } else {
                                    // console.debug('not animate')

                                    elementPointer.instance.attr(changes);

                                }

                            }
                        }
                    }
                } else if (event === SVG_EVENTS_NAMED.pageIn) {

                    if (elementPointer.events.hasOwnProperty('pageIn') && elementPointer.events.pageIn.hasOwnProperty('callback')) {
                        // console.debug('this element has callback', elementPointer)
                        elementPointer.events.pageIn.callback();
                    }

                } else if (event === SVG_EVENTS_NAMED.pageOut) {

                    if (elementPointer.events.hasOwnProperty('pageOut') && elementPointer.events.pageOut.hasOwnProperty('callback')) {
                        // console.error('this pageOut element has callback', elementPointer, 'with SVG_PAGE_LOOKUP[onPage]', onPage)
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
            // console.debug('SVGContainer[s]', SVGContainer[s])
            SVGContainer[s].setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' +  window.innerWidth);
        }

        SVGController.handleEvent(SVG_EVENTS_NAMED.resize, page);

        return;

        // console.debug('width, height', width, height)

        let changes;
        // SVGController.parameterLookup = {
        //     width: width,
        //     height: height,
        //     prevH
        // };
        let parameterLookup = {
            width: width,
            height: height
        };

        // for (let svgEvent = 0; svgEvent < SVG_EVENTS.length; svgEvent++) {
            let svgEvent = 0;

            for (let subscribedElement = 0; subscribedElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length; subscribedElement++) {


                // console.debug('for svgEvent', SVG_EVENTS[svgEvent])
                // console.debug('svgEvent', SVG_EVENTS[svgEvent])

                let elementPointer;
                let listeningElement = 0;
                let dependentElement = 0;

                // console.debug('SVG_EVENT_LISTENERS[page]', SVG_EVENT_LISTENERS[page])
                // console.debug('SVG_EVENTS[svgEvent]', SVG_EVENTS[svgEvent]);
                // console.debug('subscribedElement', subscribedElement)

                let dependentArray = Object.keys(SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents);
                while(listeningElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length || dependentElement < dependentArray.length) {

                    // console.debug('listeningElement', listeningElement, 'dependentElement', dependentElement)

                    /** While body. */
                    if (listeningElement < SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]].length) {
                        elementPointer = SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement];
                        // console.debug('lielementPointer', elementPointer)

                    } else {
                        elementPointer = SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents[dependentArray[dependentElement]];
                        // console.debug('otherlielementPointer', elementPointer)
                        // console.debug('AAAAAAAAotherlielementPointer dependentArray[dependentElement]', dependentArray[dependentElement], 'SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents[dependentArray[dependentElement]]', SVG_EVENT_LISTENERS[page][SVG_EVENTS[svgEvent]][subscribedElement].dependents[dependentArray[dependentElement]])
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

                                // console.debug('after changes', changes)

                                if (SVGController.translateChange(elementPointer.events.resize.changes[change], 'animate')) {

                                    // console.debug('animate')

                                    animateWrapper(elementPointer.instance, SVGController.translateChange(elementPointer.events.resize.changes[change], 'animation'), changes);

                                } else {
                                    // console.debug('not animate')

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
                    // console.debug('dep is hidden', dep)
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

                // console.debug('dep is visible', dep)
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




        // SVGController.handleEvent(SVG_EVENTS_NAMED.pageIn);





        // SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
        //     {transform: 'translate(' + (0.95*window.innerWidth) + ' ' + (0.4*window.innerHeight + 100) + ')'},
        //     500,
        //     mina.linear,
        //     () => {
        //         console.debug('ANIMATION DONE SON')
        //         SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.instance.animate(
        //             {transform: 'translate(' + (0.95*window.innerWidth) + ' ' + (0.4*window.innerHeight) + ')'},
        //             500,
        //             mina.linear,
        //             () => {
        //                 SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.start();
        //             }
        //         );
        //     }
        // );
    }
}

/** --------------------------------- */

/** -------- Functions -------- */

function morph(fromShape, toShape) {

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

            // console.debug('animating  shapes[fromShape][e]',  shapes[fromShape][e], ' into shape shapes[toShape][destinationIndex]', shapes[toShape][destinationIndex])



            // console.debug('changing  shapes[fromShape][e]',  shapes[fromShape][e], 'from', shapeAttributes[fromShape][e], ' into ', shapeAttributes[toShape][destinationIndex])

            // console.debug('what is destinationIndex', destinationIndex, 'useLookupArray', useLookupArray)


            function callbackClosure(argument1, argument2) {
                return function () {

                    // console.debug('and inside thedest', argument2, 'e', argument1)
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
                    currentState = STATES.READY;
                };
            }

            // console.debug('fromShape', fromShape, 'e', e, 'shapeAttributes[fromShape][e]', shapeAttributes[fromShape][e], 'being set to', )


            // shapes[fromShape][e].animate({fillOpacity: 0.0}, 4000, mina.linear, () => {
                shapes[fromShape][e].animate({d: shapeAttributes[toShape][destinationIndex]}, ANIMATION_DURATION_USED, mina.linear, callbackClosure(e, destinationIndex));
                let aa = destinationIndex;
            // });



                // console.debug('and inside thedest', thedest)

                // console.debug('now changing  shapes[fromShape][e]',  shapes[fromShape][e], 'from', shapeAttributes[toShape][destinationIndex], ' into ', shapeAttributes[toShape][destinationIndex])
                // shapes[fromShape][e].attr({
                //     opacity: 0.0,
                //     d: shapeAttributes[fromShape][destinationIndex]
                // });
                // console.debug('after shit with aa', aa, 'e', e)
                // shapes[toShape][e].attr({
                //     opacity: 1.0
                // });
            // });


            // setTimeout(function() {
            //     shapes[toShape][e].attr({
            //         opacity: 1.0
            //     });
            // }, ANIMATION_DURATION);
            // setTimeout(function() {
            //     shapes[fromShape][e].attr({
            //         opacity: 0.0
            //     });
            // }, ANIMATION_DURATION);
        }


        // else {
        //
        //     shapes[fromShape][e].animate({opacity: 0.0}, 0.01*ANIMATION_DURATION);
        //
        //
        //     // setTimeout(function() {
        //     //     shapes[fromShape][e].attr({
        //     //         opacity: 0.0
        //     //     });
        //     // }, 0.99*ANIMATION_DURATION);
        // }
    }

    // todo: keep
    // for (let e = 0; e < SHAPES[toShape].imageStop; e++) {
    //     shapeImages[toShape][e].animate({opacity: 1.0}, 2*ANIMATION_DURATION);
    // }

    // for (let e = 0; e < SHAPES[fromShape].imageStop; e++) {
    //     shapeImages[fromShape][e].animate({opacity: 0.0}, ANIMATION_DURATION);
    // }


    //
    // for (let e = 0; e < SHAPES[fromShape].elements; e++) {
    //     shapes[fromShape][e].animate({d: shapeAttributes[fromShape][e]}, ANIMATION_DURATION);
    // }



    // setTimeout(function() {
    //     for (let e = 0; e < SHAPES[fromShape].elements; e++) {
    //         shapes[fromShape][e].animate({d: shapeAttributes[fromShape][e]}, ANIMATION_DURATION);
    //     }
    // }, 2*ANIMATION_DURATION);


    let start = 0, stop = 0, change = '', largerShape = '';
    if (SHAPES[fromShape].elements < SHAPES[toShape].elements) {
        // console.debug('toshape is larger')
        start = SHAPES[fromShape].elements-1;
        // was below
        // stop = SHAPES[toShape].elements;
        stop = SHAPES[toShape].elements;
        // change = 'visible';
        change = 1;
        largerShape = toShape;
    } else if (SHAPES[fromShape].elements > SHAPES[toShape].elements) {
        // console.debug('fromShape is larger')
        start = SHAPES[toShape].elements-1;
        stop = SHAPES[fromShape].elements;
        // change = 'hidden';
        change = 0;
        largerShape = fromShape;
    }

    // if something is showing that should not be showing then: do it fast
    // othersize slowly


    // setTimeout(function() {
        for (let e = start; e < stop; e++) {
            // console.debug('fromShape is largerstart', start, 'stop', stop, 'with change', change, 'with largershape', largerShape);
            // console.debug('shapes[largerShape][e]', shapes[largerShape][e])
            shapes[largerShape][e].animate({
                opacity: change,
                fillOpacity: change
                //     visibility: 'visible'
            }, (change + 0.5)*ANIMATION_DURATION_USED, mina.linear, function () {
                // console.debug('this went fine')
            });
            // shapes[largerShape][e].attr({
            //     visibility: change
            // });
        }



    currentShape = toShape;

    // }, 0.5*ANIMATION_DURATION);
}

function moveShape(shapeToMove, toRight) {

}

function showShape(shapeToShow) {
    for (let shape in SHAPES) {
        for (let e = 0; e < SHAPES[shape].elements; e++) {
            // console.debug('setting shape', shape, 'attr opacity to ', (shape === shapeToShow ? 1.0 : 0.0) )
            shapes[shape][e].attr({
                opacity: (shape === shapeToShow ? 1.0 : 0.0)
            });
        }
        // for (let e = 0; e < SHAPES[shape].imageStop; e++) {
        //     shapeImages[shape][e].attr({
        //         opacity: (shape === shapeToShow ? 1.0 : 0.0)
        //     });
        // }
    }
    currentShape = shapeToShow;
}

function showNothing() {
    for (let shape in SHAPES) {
        // for (let e = 0; e < SHAPES[shape].elements; e++) {
        //
        //         if (shapes[shape][e] == null) {
        //             console.debug('shape desn work ', shape, 'e', e)
        //         }
        //
        //     shapes[shape][e].attr({
        //         opacity: 0.0
        //     });
        // }




        // for (let e = 0; e < SHAPES[shape].imageStop; e++) {
        //
        //     TODO
        //     if (shapeImages[shape][e] == null) {
        //         console.debug('shape desn work ', shape, 'e', e)
        //     }
        //
        //     shapeImages[shape][e].attr({
        //         opacity: 0.0
        //     });
        // }
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
            text.innerHTML = 'CLICK';
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

    requestAnimationFrame(function() {
        temp_2 = offset;
        // console.log('set startOffset t', temp_2)
        textPath.setAttribute('startOffset', temp_2);
        // temp_2 += offset + window.innerHeight + 0;
        // textPath2.setAttribute('startOffset', temp_2);
        // temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 450);
        // textPath3.setAttribute('startOffset', temp_2);
        // temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 626);
        // textPath4.setAttribute('startOffset', temp_2);
        // temp_2 += offset + window.innerHeight + SOME_CONSTANT_INTEGER + (832 - 594);
        // textPath5.setAttribute('startOffset', temp_2);
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
            // showShape('computer_tilted');
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
    // console.debug('TTUTUDOWNUPP')
    currentlyAnimating.sideBar = true;
    if (down) {
        // tmptmp = (currentSideTextTop + sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1]);
        // console.debug('tmptmp + \'px\'', tmptmp + 'px')
        // idElementSideBar.style.top = (currentSideTextTop + sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1]) + 'px';


        console.debug('TTUTUDOWNUPP')
        if (page !== PAGES.VIDEOS && page !== PAGES.ABOUT && PAGE_LINKAGE[page].next !== PAGES.ABOUT)
            morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].next);
        // animatePagesTextScrollRec((page === PAGES.WEBSITES ? 0 : sideTextOffsets[PAGES_INDEXES[page]-1]), sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]-1], down);
        animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]], sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].next]], down);


    } else {
        // idElementSideBar.style.top = (currentSideTextTop + (page === PAGES.APPS ? 0 : sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]-1])) + 'px';
        // currentSideTextTop = currentSideTextTop - window.innerHeight;



        console.debug('TTUTUUPP')
        if (page !== PAGES.ABOUT || PAGE_LINKAGE[page].next !== PAGES.ABOUT)
            morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].prev);
        // animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]-1], (page === PAGES.APPS ? 0 : sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]-1]), down);
        animatePagesTextScrollRec(sideTextOffsets[PAGES_INDEXES[page]], sideTextOffsets[PAGES_INDEXES[PAGE_LINKAGE[page].prev]], down);
    }
}

function animatePageText(up) {
    if (page === PAGES.HOME || (page === PAGES.WEBSITES && up)) {
        console.debug('gonna animatePageText', up)
        if (up) {

            HIDE[PAGES.WEBSITES]();

            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset + 1300);
            currentPageAnimationOffset += 1300;
        } else {

            console.debug('gonna elseanimatePageText', up)
            animateHomeTextScroll(currentPageAnimationOffset, currentPageAnimationOffset - 1600);
            currentPageAnimationOffset -= 1600;
        }
    } else {
        console.debug('gonna animatePagesTextScroll')

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



    // sideTextOffsets[0] = -0.5*(DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth - getTextWidth(MENU_ITEMS[0], '10vw Booster'));
    // // DOM_ELEMENTS.DEVICES.sidebarText.top = sideTextOffsets[0] + 'px';
    // sideTextOffsets[1] = -0.5*(DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth - DOM_ELEMENTS.DEVICES.sizeWebsites.clientWidth - DOM_ELEMENTS.DEVICES.sizeApps.clientWidth);
    // // DOM_ELEMENTS.DEVICES.sidebarText.top = sideTextOffsets[1] + 'px';
    // sideTextOffsets[2] = -0.5*(sideTextOffsets[1] - DOM_ELEMENTS.DEVICES.sizeVideos.offsetWidth);
    // // DOM_ELEMENTS.DEVICES.sidebarText.top = sideTextOffsets[2] + 'px';
    // sideTextOffsets[3] = -0.5*(sideTextOffsets[2] - DOM_ELEMENTS.DEVICES.sizeAbout.offsetWidth);
    // // DOM_ELEMENTS.DEVICES.sidebarText.top = sideTextOffsets[3] + 'px';

    // DOM_ELEMENTS.DEVICES.sidebarText.style.top = sideTextOffsets[3] + 'px';


    // DOM_ELEMENTS.DEVICES.sidebarText.style.left = a;
    //
    // DOM_ELEMENTS.DEVICES.tmp.innerText = MENU;
    //
    // sideTextOffsets

    // excessPixels = -1;
    // let sideResult = '';
    // currentSideTextLength = 0;
    // for (let m = 0; m < MENU_ITEMS.length; m++) {
    //     sideResult += MENU_ITEMS[m];
    //     currentSideTextLength += MENU_ITEMS_PIXEL_SIZES[m];
    //     let remaining = window.innerHeight - MENU_ITEMS_PIXEL_SIZES[m];
    //     if (remaining > 0) {
    //         remaining = Math.floor(remaining/PIXELS_OF_SPACE)+1;
    //         for (let r = 0; r < remaining; r++) {
    //             sideResult += ' ';
    //             currentSideTextLength += PIXELS_OF_SPACE;
    //         }
    //     } else {
    //         sideResult += ' ';
    //         excessPixels = 72*2;
    //     }
    //
    //     idElementSideBar.innerText = sideResult;
    //     sideTextOffsets[m] = idElementSideBar.offsetWidth;
    // }
    //
    // currentSideTextLength = idElementSideBar.offsetWidth;
    //
    // // console.debug('(-1*currentSideTextLength + window.innerHeight) + \'px\'', (-1*currentSideTextLength + window.innerHeight) + 'px')
    // currentSideTextTop = (-0.5*currentSideTextLength + window.innerHeight + (page !== PAGES.HOME && page !== PAGES.WEBSITES ? sideTextOffsets[PAGES_INDEXES[page]] : 0) - 150);
    // idElementSideBar.style.top = currentSideTextTop + 'px';
    // idElementSideBar.style.left = (-0.5*currentSideTextLength + 140) + 'px';
    //
    // // console.debug('(-0.5*currentSideTextLength) + \'px\'', (-0.5*currentSideTextLength) + 'px')





    SVGController.resize(window.innerWidth, window.innerHeight);

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
    elementDivDevicesContainer.style.opacity = '1.0';

    SVGController.showPage(PAGES.HOME);


    // setTimeout(() => {
    SVGController.handleEvent(0, 'HOME');
    SVGController.handleEvent(0, 'WEBSITES');
    // }, 5000);

    // SVGController.handleEvent('resize', 'WEBSITES');

    // let pageToInitiallyResize = ['HOME', 'DEVICES'];
    //
    // console.debug('pageToInitiallyResize', pageToInitiallyResize)
    //
    // for (let elementPage = 0; elementPage < pageToInitiallyResize.length; elementPage++) {
    //     // for (let element in SVG_ELEMENTS[pageToInitiallyResize[elementPage]]) {
    //     //     SVG_ELEMENTS[pageToInitiallyResize[elementPage]][element]
    //         SVGController.handleEvent('resize', pageToInitiallyResize[elementPage]);
    //     // }
    // }


    // SVGController.handleEvent(PAGES.HOME);

    SVG_ELEMENTS.GLOBALS.sidePageInformation.dependents.arrow.animation.start();


    showShape('computer_tilted');
    // showShape('video_large');

    showNothing();

    // updateTextPathOffset(4390);

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


    // let sideTextResult = '', finalText = '', tempSideTextOffsets =[];
    // for (let m = 0; m < MENU_ITEMS.length; m++) {
    //     sideTextResult = '';
    //     for (let cc = 0; cc < 5; cc++) {
    //         sideTextResult += MENU_ITEMS[m] + '        ';
    //     }
    //     finalText += sideTextResult;
    //     DOM_ELEMENTS.DEVICES.sidebarText.innerText = sideTextResult;
    //     tempSideTextOffsets[m] = DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth;
    //     // if (m > 0)
    //     //     sideTextOffsets[m] -= sideTextOffsets[m-1];
    // }
    //
    // DOM_ELEMENTS.DEVICES.sidebarText.innerText = finalText;
    // let sideSum = 0;
    // for (let m = 0; m < sideTextOffsets.length; m++) {
    //     sideSum += tempSideTextOffsets[m]
    //     sideTextOffsets[m] = -0.5*(DOM_ELEMENTS.DEVICES.sidebarText.offsetWidth - sideSum);
    // }
    // // DOM_ELEMENTS.DEVICES.sidebarText.innerText = sideTextResult;

    useWindowHeight();

}

function initializeVariables() {

    /** DOM Elements */


    for (let pageDOMElement in DOM_ELEMENTS) {
        for (let domElement in DOM_ELEMENTS[pageDOMElement]) {
            DOM_ELEMENTS[pageDOMElement][domElement] = document.getElementById(pageDOMElement + '_' + domElement);
            // console.debug('INITIALIZED DOM_ELEMENTS[pageDOMElement][domElement]', DOM_ELEMENTS[pageDOMElement][domElement])
        }
    }



    elementDivDevicesContainer = document.getElementById('DEVICES_container');
    elementSVGCore = document.getElementById('svg_core');
    elementSVGDevices = document.getElementById("svg_devices");
    elementSVGHelloPath = document.querySelector('#svg_hello');
    SVGContainer = [elementSVGCore, elementSVGDevices, elementSVGHelloPath];
    // idElementSideBar = document.getElementById('DEVICES_sidebar');


    // idElementContentInformation = document.getElementById('content_information');
    // idElementContentTitle = document.getElementById('content_title');
    // idElementContentDetail = document.getElementById('content_detail');

    textPath = document.querySelector('#text-path');
    textPath2 = document.querySelector('#text-path2');
    textPath3 = document.querySelector('#text-path3');
    textPath4 = document.querySelector('#text-path4');
    textPath5 = document.querySelector('#text-path5');
    // elementHalloPath = document.querySelector( textPath.getAttribute('href') );
    classElementEllipse = document.getElementsByClassName('ellipse');
    classElementScroll = document.getElementsByClassName('scroll');

    // idElementDuckLogo = document.getElementById('HOME_logo');

    snapContentInformation = Snap.select('#content_information');
    idElementExitPage = document.getElementById('exit_page');

    elementBody = document.getElementsByTagName("BODY")[0];

    idElementPageInformation = document.getElementById('page_indicator_information');

    snapSVGDevicesGroup = Snap.select('#DEVICES_group');

    snapSVGPageInformation = Snap.select('#GLOBALS_currentPage');

    /** Global Variables */
    // pathLength = elementHalloPath.getTotalLength();

    snapSVGMain = Snap(elementSVGDevices);
    shapes = {};
    shapeAttributes = {};
    shapeImages = {};

    page = PAGES.HOME;
    previousPage = 'computer_tilted';

    currentScrollDelta = 0;
    currentPageAnimationOffset = 1300;
    currentState = STATES.READY;
    currentSideTextTop = 0;

    currentlyAnimating = {
        sideBar: false,
        mainSVG: false
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
            // let before;
            // console.debug('before trying to selection shapes[shape][e] ', shape, 'e', e, shapes[shape][e] )
            shapes[shape][e] = Snap.select('#' + shape + '_' + e);
            // before = shapes[shape][e];
            // console.debug('before trying to selection shapes[shape][e] ', shape, 'e', e, shapes[shape][e] )

            // if (before == null)
            //     console.debug('GOONE RONG')

            if (e < SHAPES[shape].stop)
                shapeAttributes[shape][e] = shapes[shape][e].node.getAttribute('d');
        }
    }

    // for (let focusPage in FOCUS_PAGES) {
    //     for (let shouldBeMadeVisible in FOCUS_PAGES[focusPage].makeVisible) {
    //         FOCUS_PAGES[focusPage].makeVisible[shouldBeMadeVisible] = document.getElementById(shouldBeMadeVisible);
    //         FOCUS_PAGES[focusPage].makeVisible[shouldBeMadeVisible].style.visibility = 'hidden';
    //     }
    //
    // }


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

}



function mainScrollHandler(deltaY) {

    // if (SCROLL_DELTA === -1)
    //     SCROLL_DELTA = deltaY;

    if (!lockedOnPage && !showingUprightDevice) {
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
    // DOM_ELEMENTS.DEVICES_FOCUS.header.innerText = DEVICES_FOCUS_PAGE_HEADERS[page];

    // setFocusPage();

    showingFocusDevice = false;
}

function onMouseClickDevice() {


    if (SVG_PAGE_LOOKUP[page] === 'DEVICES' && !showingFocusDevice) {
        console.log('FIRE CLICK EVENT');
        showingFocusDevice = true;

        SVGController.showPageExact('DEVICES_FOCUS');

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
                    DOM_ELEMENTS.DEVICES_FOCUS[DEVICE_FOCUS_PAGES[elementPage][focusPage].DOM_ELEMENTS[domElement]].style.visibility = (page === elementPage ? 'visible' : 'hidden');
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

        setFocusPage();

    } else {

    }
}

function onMouseEnterDevice() {

    // fire event pagein svgcontroller
    // make the page visible
    // call device function to move device in place

    console.debug('SVG_PAGE_LOOKUP[page] === \'DEVICES\'', SVG_PAGE_LOOKUP[page] === 'DEVICES')
    console.debug('urrentState === STATES.READY', currentState === STATES.READY)


    if (!showingFocusDevice && SVG_PAGE_LOOKUP[page] === 'DEVICES' && currentState === STATES.READY) {
        if (!showingUprightDevice) {
            showingUprightDevice = true;
            ANIMATION_DURATION_USED = 500;
            morph(PAGE_MORPH_LINKAGE[page].curr, PAGE_MORPH_LINKAGE[page].enlarged);
        }
    }

}

function onMouseLeaveDevice() {
    console.debug('SVG_PAGE_LOOKUP[page] === \'DEVICES\'', SVG_PAGE_LOOKUP[page]  === 'DEVICES')
    console.debug('urrentState === STATES.READY', currentState === STATES.READY)
    console.debug('currentState', currentState)
    console.debug('VG_PAGE_LOOKUP[page]', SVG_PAGE_LOOKUP[page])
    if (!showingFocusDevice && SVG_PAGE_LOOKUP[page] === 'DEVICES' && currentState === STATES.READY) {
        if (showingUprightDevice) {
            showingUprightDevice = false;
            ANIMATION_DURATION_USED = 500;
            morph(PAGE_MORPH_LINKAGE[page].enlarged, PAGE_MORPH_LINKAGE[page].curr);
        }
    }
}

function onMouseEnterCloseButton() {
    console.debug('lskjdflkja;lakjsdf')
    if (SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance != null)
        SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({fill: 'black'});
}

function onMouseLeaveCloseButton() {
    console.debug('lskjdflkja;lakjsdf')
    if (SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance != null)
        SVG_ELEMENTS.DEVICES_FOCUS.back.dependents.backElement.instance.attr({fill: 'none'});
}

/** ---------------------------------- */


/** Overwritten Functions */

window.onload = function() {
    initializeVariables();
    initializeContent();
    // initializeCursor();

    window.onresize = function() {


        for (let s = 0; s < SVGContainer.length; s++) {
            console.debug('SVGContainer[s]', SVGContainer[s])
            SVGContainer[s].setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' +  window.innerWidth);
        }

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


