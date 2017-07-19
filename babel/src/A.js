module.exports = function () {
	const increment = val => val++
	let num = 77
	const num_new  = increment(num)
	console.log(num_new);

	function* Gener () {
		yield* 'abcd'
	}
	const sg = Gener();
	let res = sg.next()
	console.log(res);
	res = sg.next()
	console.log(res);
	res = sg.next()
	console.log(res);
	res = sg.next()
	console.log(res);
}