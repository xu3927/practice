var C = require('./moduleC.js')
C()
console.log('BBB');

module.exports = function () {
	console.log('我是BB');
}