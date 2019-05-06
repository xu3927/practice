"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(_ref) {
  var t = _ref.types;

  function getRuntimeModuleName(opts) {// return opts.moduleName || "babel-runtime";
  }

  function has(obj, key) {// return Object.prototype.hasOwnProperty.call(obj, key);
  }

  var HELPER_BLACKLIST = ["interopRequireWildcard", "interopRequireDefault"];
  return {
    pre: function pre(file) {
      // 获得运行时模块名称, 即当前要编译的方法或对象的类型名称.
      var moduleName = getRuntimeModuleName(this.opts); // 给当前方法添加helper函数

      if (this.opts.helpers !== false) {
        file.set("helperGenerator", function (name) {
          if (HELPER_BLACKLIST.indexOf(name) < 0) {
            return file.addImport("".concat(moduleName, "/helpers/").concat(name), "default", name);
          }
        });
      }

      this.setDynamic("regeneratorIdentifier", function () {
        return file.addImport("".concat(moduleName, "/regenerator"), "default", "regeneratorRuntime");
      });
    },
    visitor: {
      ReferencedIdentifier: function ReferencedIdentifier(path, state) {
        var node = path.node,
            parent = path.parent,
            scope = path.scope;

        if (node.name === "regeneratorRuntime" && state.opts.regenerator !== false) {
          path.replaceWith(state.get("regeneratorIdentifier"));
          return;
        }

        if (state.opts.polyfill === false) return;
        if (t.isMemberExpression(parent)) return;
        if (!has(definitions.builtins, node.name)) return;
        if (scope.getBindingIdentifier(node.name)) return; // Symbol() -> _core.Symbol(); new Promise -> new _core.Promise

        var moduleName = getRuntimeModuleName(state.opts);
        path.replaceWith(state.addImport("".concat(moduleName, "/core-js/").concat(definitions.builtins[node.name]), "default", node.name));
      },
      // arr[Symbol.iterator]() -> _core.$for.getIterator(arr)
      CallExpression: function CallExpression(path, state) {
        if (state.opts.polyfill === false) return; // we can't compile this

        if (path.node.arguments.length) return;
        var callee = path.node.callee;
        if (!t.isMemberExpression(callee)) return;
        if (!callee.computed) return;
        if (!path.get("callee.property").matchesPattern("Symbol.iterator")) return;
        var moduleName = getRuntimeModuleName(state.opts);
        path.replaceWith(t.callExpression(state.addImport("".concat(moduleName, "/core-js/get-iterator"), "default", "getIterator"), [callee.object]));
      },
      // Symbol.iterator in arr -> core.$for.isIterable(arr)
      BinaryExpression: function BinaryExpression(path, state) {
        if (state.opts.polyfill === false) return;
        if (path.node.operator !== "in") return;
        if (!path.get("left").matchesPattern("Symbol.iterator")) return;
        var moduleName = getRuntimeModuleName(state.opts);
        path.replaceWith(t.callExpression(state.addImport("".concat(moduleName, "/core-js/is-iterable"), "default", "isIterable"), [path.node.right]));
      },
      // Array.from -> _core.Array.from
      MemberExpression: {
        enter: function enter(path, state) {
          if (state.opts.polyfill === false) return;
          if (!path.isReferenced()) return;
          var node = path.node;
          var obj = node.object;
          var prop = node.property;
          if (!t.isReferenced(obj, node)) return;
          if (node.computed) return;
          if (!has(definitions.methods, obj.name)) return;
          var methods = definitions.methods[obj.name];
          if (!has(methods, prop.name)) return; // doesn't reference the global

          if (path.scope.getBindingIdentifier(obj.name)) return; // special case Object.defineProperty to not use core-js when using string keys

          if (obj.name === "Object" && prop.name === "defineProperty" && path.parentPath.isCallExpression()) {
            var call = path.parentPath.node;
            if (call.arguments.length === 3 && t.isLiteral(call.arguments[1])) return;
          }

          var moduleName = getRuntimeModuleName(state.opts);
          path.replaceWith(state.addImport("".concat(moduleName, "/core-js/").concat(methods[prop.name]), "default", "".concat(obj.name, "$").concat(prop.name)));
        },
        exit: function exit(path, state) {
          if (state.opts.polyfill === false) return;
          if (!path.isReferenced()) return;
          var node = path.node;
          var obj = node.object;
          if (!has(definitions.builtins, obj.name)) return;
          if (path.scope.getBindingIdentifier(obj.name)) return;
          var moduleName = getRuntimeModuleName(state.opts);
          path.replaceWith(t.memberExpression(state.addImport("".concat(moduleName, "/core-js/").concat(definitions.builtins[obj.name]), "default", obj.name), node.property, node.computed));
        }
      }
    }
  };
}