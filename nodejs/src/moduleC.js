var B = require('./moduleB.js')
console.log(B);
// B()

console.log('CCC');
module.exports = function () {
	console.log('我是CC');
}