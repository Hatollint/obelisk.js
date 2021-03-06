/*jslint node: true*/
/*global document:true*/

'use strict';

var CanvasManager, p;
CanvasManager = function () {
    throw new Error('CanvasManager is a static Class, cannot be instanced.');
};
p = CanvasManager;

// public properties
p.defaultCanvas = null;

// public methods
p.getDefaultCanvas = function () {
    p.defaultCanvas = p.defaultCanvas || document.createElement('canvas');
    return p.defaultCanvas;
};

p.getNewCanvas = function () {
    return document.createElement('canvas');
};

p.toString = function () {
    return '[CanvasManager]';
};

module.exports = CanvasManager;
