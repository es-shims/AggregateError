'use strict';

var AdvanceStringIndex = require('es-abstract/2019/AdvanceStringIndex');
var GetMethod = require('es-abstract/2019/GetMethod');
var IsArray = require('es-abstract/2019/IsArray');
var IterableToList = require('es-abstract/2019/IterableToList');
var OrdinarySetPrototypeOf = require('es-abstract/2019/OrdinarySetPrototypeOf');
var Type = require('es-abstract/2019/Type');
var GetIntrinsic = require('es-abstract/GetIntrinsic');
var callBound = require('es-abstract/helpers/callBound');
var getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');
var define = require('define-properties');

var $Error = GetIntrinsic('%Error%');
var $slice = callBound('Array.prototype.slice');

var SLOT = require('internal-slot');

// eslint-disable-next-line func-style
function AggregateError(errors, message) {
	var errorsList = IterableToList(errors, getIteratorMethod({
		AdvanceStringIndex: AdvanceStringIndex,
		GetMethod: GetMethod,
		IsArray: IsArray,
		Type: Type
	}, errors));
	var error = new $Error(message);
	OrdinarySetPrototypeOf(error, proto); // eslint-disable-line no-use-before-define
	delete error.constructor;
	if (define.supportsDescriptors) {
		SLOT.set(error, '[[AggregateErrors]]', errorsList);
	} else {
		error.errors = errorsList; // back compat fallback
	}
	return error;
}
var proto = AggregateError.prototype;

define(AggregateError.prototype, {
	constructor: AggregateError,
	message: '',
	name: 'AggregateError'
});

if (define.supportsDescriptors) {
	Object.defineProperty(AggregateError.prototype, 'errors', {
		configurable: true,
		enumerable: false,
		get: function () {
			SLOT.assert(this, '[[AggregateErrors]]');
			return $slice(SLOT.get(this, '[[AggregateErrors]]'));
		}
	});
}

OrdinarySetPrototypeOf(AggregateError.prototype, Error.prototype);

module.exports = AggregateError;
