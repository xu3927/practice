"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(stateGenerator);

function stateGenerator() {
  return regeneratorRuntime.wrap(function stateGenerator$(_context) {
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
  }, _marked);
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