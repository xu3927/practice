"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dog =
/*#__PURE__*/
function () {
  function Dog(name, age) {
    _classCallCheck(this, Dog);

    this.name = name;
    this.age = age;
  }

  _createClass(Dog, [{
    key: "wang",
    value: function wang() {
      console.log(Dog.eat(), 111);
      console.log(this.name + "汪汪汪");
    } // static 定义静态属性方法,只能在函数内部调用。 静态方法不会被继承

  }], [{
    key: "eat",
    value: function eat() {
      //静态方法中的this属性无法被读取
      console.log(this.name + "开始吃饭");
    }
  }]);

  return Dog;
}();