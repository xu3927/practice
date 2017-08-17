"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dog = function () {
	function Dog(name, age) {
		(0, _classCallCheck3.default)(this, Dog);

		this.name = name;
		this.age = age;
	}

	(0, _createClass3.default)(Dog, [{
		key: "wang",
		value: function wang() {
			console.log(Dog.eat(), 111);
			console.log(this.name + "汪汪汪");
		}

		// static 定义静态属性方法,只能在函数内部调用。 静态方法不会被继承

	}], [{
		key: "eat",
		value: function eat() {
			//静态方法中的this属性无法被读取
			console.log(this.name + "开始吃饭");
		}
	}]);
	return Dog;
}();