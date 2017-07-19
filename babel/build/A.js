'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
	var _marked = [Gener].map(_regenerator2.default.mark);

	var increment = function increment(val) {
		return val++;
	};
	var num = 77;
	var num_new = increment(num);
	console.log(num_new);

	function Gener() {
		return _regenerator2.default.wrap(function Gener$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.delegateYield('abcd', 't0', 1);

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}
	var sg = Gener();
	var res = sg.next();
	console.log(res);
	res = sg.next();
	console.log(res);
	res = sg.next();
	console.log(res);
	res = sg.next();
	console.log(res);
};