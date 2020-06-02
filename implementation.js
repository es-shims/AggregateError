'use strict';

var AdvanceStringIndex = require('es-abstract/2019/AdvanceStringIndex');
var CreateDataPropertyOrThrow = require('es-abstract/2019/CreateDataPropertyOrThrow');
var GetMethod = require('es-abstract/2019/GetMethod');
var IsArray = require('es-abstract/2019/IsArray');
var IterableToList = require('es-abstract/2019/IterableToList');
var OrdinarySetPrototypeOf = require('es-abstract/2019/OrdinarySetPrototypeOf');
var Type = require('es-abstract/2019/Type');
var GetIntrinsic = require('es-abstract/GetIntrinsic');
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
