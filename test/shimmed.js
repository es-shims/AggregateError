'use strict';

var index = require('../');
index.shim();

var test = require('tape');

var runTests = require('./builtin');

test('shimmed', function (t) {
	runTests(t);

	t.end();
});
