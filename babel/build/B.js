'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arr = [1, 2, 3, 4, 5];
var res = arr.find(function (item) {
	return item > 3;
});
console.log(res);

var p = new _promise2.default(function (resolve, reject) {
	setTimeout(function () {
		resolve('ok');
	}, 100);
});
p.then(function (res) {
	return console.log(res);
});