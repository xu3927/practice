"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [stateGenerator].map(_regenerator2.default.mark);

function stateGenerator() {
	return _regenerator2.default.wrap(function stateGenerator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 1;

				case 2:
					_context.next = 4;
					return 3;

				case 4:
					_context.next = 6;
					return 5;

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var sg = stateGenerator();
var res = sg.next();
console.log(res);
res = sg.next();
console.log(res);
res = sg.next();
console.log(res);
res = sg.next();
console.log(res);