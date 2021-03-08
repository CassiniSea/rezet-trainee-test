// ------------------ ARRAY CHECKING ----------------------------

const array = [1, 3, 5, 4, 5, 7]

function arrayChecking(array) {
	let result = []
	for (let i = 0; i < array.length - 2; i++) {
		if (	array[i] > array[i + 1] && array[i + 1] < array[i + 2] ||
					array[i] < array[i + 1] && array[i + 1] > array[i + 2]
		) result.push(1)
		else result.push(0)
	}
	return result
}

console.log(arrayChecking(array))

// ------------------ MATRIX CHECKING ---------------------------

const matrix = [
	[1, 2, 3, 2, 7],
	[4, 5, 6, 8, 1],
	[7, 8, 9, 4, 5]
]

function matrixChecking(matrix) {
	let result = []
	let isExistNumber = {}
	for(let i = 0; i < matrix[0].length - 2; i++) {
		isExistNumber = {}
		matrix.forEach(value => {
			for(let j = 0; j < 3; j++) {
				isExistNumber[value[i + j]] = true
			}
		})
		if(Object.keys(isExistNumber).length === 9) result.push(true)
		else result.push(false)
	}
	return result
}

console.log(matrixChecking(matrix))

// ------------------ TEXT FORMATTING ---------------------------

const text = [
	['Hello', 'world'],
	['Brad', 'came', 'to', 'dinner', 'width', 'us'],
	['He',  'loves', 'tacos']
]
const format = ['LEFT', 'RIGHT', 'LEFT']
const limit = 16

function textFormatting(text, format, limit) {
	if(text.length === 0 || format.length === 0 || limit <= 0) return	[]
	let result = []
	let newFormat = []
	let newStrNumber = 0
	result.push('*'.repeat(limit + 2))
	// Lines breaking:
	text.forEach((str, strNumber) => {
		newStrNumber++
		result[newStrNumber] = ''
		newFormat[newStrNumber] = format[strNumber]
		str.forEach(word => {
			if(result[newStrNumber].length === 0) result[newStrNumber] += word
			else if(result[newStrNumber].length + word.length + 1 <= limit) 
				result[newStrNumber] += ' ' + word
			else {
				newStrNumber++
				result[newStrNumber] = word
				newFormat[newStrNumber] = format[strNumber]
			}
		})
	})
	// Lines shifting:
	for(let i = 1; i < result.length; i++) {
		if(newFormat[i] === 'RIGHT')
			result[i] = '*' + ' '.repeat(limit - result[i].length) + result[i] + '*'
		else if(newFormat[i] === 'LEFT')
			result[i] = '*' + result[i] + ' '.repeat(limit - result[i].length) + '*'
	}
	result.push('*'.repeat(limit + 2))
	return result
}

console.log(textFormatting(text, format, limit))