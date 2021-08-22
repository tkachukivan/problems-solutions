/**
 * https://bigfrontend.dev/problem/what-is-composition-create-a-pipe
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return function (x) {
		return funcs.reduce((acc, func) => {
			return func(acc);
		}, x);
	}
}

// const times = (y) =>  (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) =>  (x) => x - y
// const divide = (y) => (x) => x / y

// let f = pipe([
//   times(2),
//   subtract(3),
//   divide(4)
// ]);

// console.log(f(2))