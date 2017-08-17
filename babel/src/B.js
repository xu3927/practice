const arr = [1, 2, 3, 4, 5]
const res = arr.find(item => {
	return item > 3
})
console.log(res)

const p = new Promise(function (resolve, reject) {
	setTimeout(()  => {
		resolve('ok')
	}, 100)
})
p.then(res => console.log(res))