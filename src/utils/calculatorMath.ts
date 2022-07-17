import { OPERATOR } from '@constants/operators'

export const expressionCalculator = (expr: string) => {
	let value = ''
	let newArr: any = []
	if (typeof expr === 'string') {
		expr = expr.replace(/\s/g, '')
		for (let i = 0; i < expr.length; i++) {
			if (expr[i] !== OPERATOR.DOT && !isNaN(+expr[i])) {
				let j = i
				while (!isNaN(+expr[j]) || expr[j] === OPERATOR.DOT) {
					value += expr[j]
					j++
				}
				newArr.push(value)
				value = ''
				i = j - 1
			} else {
				newArr.push(expr[i])
			}
		}
	} else {
		newArr = expr
	}
	//if (
	//	newArr.filter((bracket: string) => bracket === '(').length !==
	//	newArr.filter((bracket: string) => bracket === ')').length
	//) {
	//	throw new Error('ExpressionError: Brackets must be paired')
	//}

	let valueInBrackets: any = []
	let openBracketIndex = newArr.lastIndexOf('(')
	let closedBracketIndex = newArr.indexOf(')', openBracketIndex)
	if (openBracketIndex !== -1) {
		valueInBrackets = newArr.slice(openBracketIndex + 1, closedBracketIndex)
		valueInBrackets = plusMinus(multipleDevide(valueInBrackets)).join()
		newArr.splice(openBracketIndex, closedBracketIndex - openBracketIndex + 1, valueInBrackets)
		return expressionCalculator(newArr)
	}
	return +plusMinus(multipleDevide(newArr))
}

let plusMinus = (newArr) => {
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '+') {
			newArr.splice(i - 1, 3, +newArr[i - 1] + +newArr[i + 1])

			i = -1
		}

		if (newArr[i] === '-') {
			newArr.splice(i - 1, 3, +newArr[i - 1] - +newArr[i + 1])
			i = -1
		}
	}

	return newArr
}

let multipleDevide = (newArr) => {
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '*') {
			newArr.splice(i - 1, 3, +newArr[i - 1] * +newArr[i + 1])
			i = -1
		}

		if (newArr[i] === '/') {
			if (+newArr[i + 1] !== 0) {
				newArr.splice(i - 1, 3, +newArr[i - 1] / +newArr[i + 1])
				i = -1
			} else {
				return ['Infinity']
			}
		}
	}
	return newArr
}

export const checkMissingBrackets = (expr: string) =>
	expr.split('').reduce(
		(acc, curr) => {
			if (curr === OPERATOR.BRACKET_LEFT) {
				acc.brackets += 1
			}
			if (curr === OPERATOR.BRACKET_RIGHT) {
				acc.brackets -= 1
			}
			return acc
		},
		{ brackets: 0 }
	)
