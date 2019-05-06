"use strict";

module.exports = function () {
  var _marked =
  /*#__PURE__*/
  regeneratorRuntime.mark(Gener);

  var increment = function increment(val) {
    return val++;
  };

  var num = 77;
  var num_new = increment(num);
  console.log(num_new);

  function Gener() {
    return regeneratorRuntime.wrap(function Gener$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.delegateYield('abcd', "t0", 1);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
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