function* stateGenerator () {
	yield 1
	yield 3
	yield 5
}

const sg = stateGenerator()
let res = sg.next()
console.log(res);
res = sg.next()
console.log(res);
res = sg.next()
console.log(res);
res = sg.next()
console.log(res);