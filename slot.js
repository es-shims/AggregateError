'use strict';

var GetIntrinsic = require('es-abstract/GetIntrinsic');
var callBound = require('es-abstract/helpers/callBound');
var has = require('has');

var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $push = callBound('Array.prototype.push');

var $mapGet = callBound('WeakMap.prototype.get', true)
	|| callBound('Map.prototype.get', true)
	|| function (objects, O) { // eslint-disable-line consistent-return
		for (var i = 0; i < objects.length; i += 1) {
			if (objects[i].O === O) {
				return objects[i].V;
			}
		}
	};
var $mapSet = callBound('WeakMap.prototype.set', true)
	|| callBound('Map.prototype.set', true)
	|| function (objects, O, slots) {
		for (var i = 0; i < objects.length; i += 1) {
			if (objects[i].O === O) {
				objects[i].V = slots;
				return;
			}
		}
		$push(objects, {
			O: O,
			V: slots
		});
	};
var map = ($WeakMap || $Map) ? new ($WeakMap || $Map)() : []; // eslint-disable-line no-extra-parens

var SLOT = {
	assert: function (O, slot) {
		if (!O || typeof O !== 'object') {
			throw new TypeError('O is not an object');
		}
		if (!SLOT.has(O, slot)) {
			throw new TypeError('Object lacks internal slot ' + slot);
		}
	},
	get: function (O, slot) {
		var slots = $mapGet(map, O);
		return slots && slots['$' + slot];
	},
	has: function (O, slot) {
		var slots = $mapGet(map, O) || {};
		return has(slots, '$' + slot);
	},
	set: function (O, slot, V) {
		var slots = $mapGet(map, O);
		if (!slots) {
			slots = {};
			$mapSet(map, O, slots);
		}
		slots['$' + slot] = V;
	}
};

module.exports = SLOT;
