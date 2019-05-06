"use strict";

var arr = [1, 2, 3, 4, 5];
var res = arr.find(function (item) {
  return item > 3;
});
console.log(res);
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('ok');
  }, 100);
});
p.then(function (res) {
  return console.log(res);
});