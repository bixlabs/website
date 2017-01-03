/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['0', '0', '100', '51', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '99px', '66px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 178,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '6px', '100px', '51px', 'auto', 'auto'],
                            id: 'Pasted',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 178,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "scaleY",
                            0,
                            178,
                            "easeInOutCubic",
                            "${Pasted}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Pasted}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            178,
                            "easeInOutCubic",
                            "${Pasted}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid5",
                            "scaleX",
                            0,
                            178,
                            "easeInOutCubic",
                            "${Pasted}",
                            '1',
                            '0.9'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("btn-blog_edgeActions.js");
})("EDGE-8428201");
