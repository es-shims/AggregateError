'use strict';

var bind = require('function-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var polyfill = getPolyfill();
var bound = bind.call(polyfill);
if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(bound, 'name').configurable) {
	Object.defineProperty(bound, 'name', { value: polyfill.name });
}
bound.prototype = polyfill.prototype;

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;
