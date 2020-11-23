'use strict';

var AdvanceStringIndex = require('es-abstract/2020/AdvanceStringIndex');
var CreateDataPropertyOrThrow = require('es-abstract/2020/CreateDataPropertyOrThrow');
var GetMethod = require('es-abstract/2020/GetMethod');
var IsArray = require('es-abstract/2020/IsArray');
var IterableToList = require('es-abstract/2020/IterableToList');
var OrdinarySetPrototypeOf = require('es-abstract/2020/OrdinarySetPrototypeOf');
var Type = require('es-abstract/2020/Type');
var GetIntrinsic = require('get-intrinsic');
var getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');
var define = require('define-properties');

var $Error = GetIntrinsic('%Error%');

// eslint-disable-next-line func-style
function AggregateError(errors, message) {
	var error = new $Error(message);
	OrdinarySetPrototypeOf(error, proto); // eslint-disable-line no-use-before-define
	delete error.constructor;

	var errorsList = IterableToList(errors, getIteratorMethod({
		AdvanceStringIndex: AdvanceStringIndex,
		GetMethod: GetMethod,
		IsArray: IsArray,
		Type: Type
	}, errors));
	CreateDataPropertyOrThrow(error, 'errors', errorsList);

	return error;
}
var proto = AggregateError.prototype;

define(AggregateError.prototype, {
	constructor: AggregateError,
	message: '',
	name: 'AggregateError'
});

OrdinarySetPrototypeOf(AggregateError.prototype, Error.prototype);

module.exports = AggregateError;
