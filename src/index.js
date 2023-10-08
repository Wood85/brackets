module.exports = function check(str, bracketsConfig) {
	const arr = str.split('')
	const openBrackets = bracketsConfig.map(item => item[0]);
	const closeBrackets = bracketsConfig.map(item => item[1]);
	const stack = [];

	if (arr.length % 2 !== 0) { return false }

	for (let i = 0; i < arr.length; i++) {

		if (openBrackets.includes(arr[i]) && closeBrackets.indexOf(arr[i]) > -1 && stack[stack.length - 1] === arr[i]) {
			stack.pop();
			continue;
		}

		if (openBrackets.includes(arr[i])) {
			stack.push(arr[i]);
			continue;
		}

		if (closeBrackets.indexOf(arr[i]) > -1) {
			const index = closeBrackets.indexOf(arr[i]);

			if (openBrackets.indexOf(stack[stack.length - 1]) === index) {
				stack.pop();
			}
		}
		if (!openBrackets.includes(arr[i]) && closeBrackets.indexOf(arr[i]) < 0) {
			return false;
		}
	}

	return stack.length === 0;
}
