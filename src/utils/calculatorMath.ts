import { OPERATOR } from '@constants/operators'
import {
	AddCommand,
	Calculator,
	DivideCommand,
	MultiplyCommand,
	RemainderOfDivCommand,
	SubtractCommand,
} from './patternComand'

const { ADD, SUBSTRACT, MULTIPLE, DEVIDE, PERCENTAGE, DOT, BRACKET_LEFT, BRACKET_RIGHT } = OPERATOR

function operations(value: number, operator: string) {
	switch (operator) {
		case ADD: {
			return new AddCommand(value)
		}
		case SUBSTRACT: {
			return new SubtractCommand(value)
		}
		case MULTIPLE: {
			return new MultiplyCommand(value)
		}
		case DEVIDE: {
			return new DivideCommand(value)
		}
		case PERCENTAGE: {
			return new RemainderOfDivCommand(value)
		}
		default: {
			return 0
		}
	}
}

const calculator = new Calculator()

const FIRST_PRIORITY_OPERATORS = [MULTIPLE, DEVIDE, PERCENTAGE]
const SECOND_PRIORITY_OPERATORS = [ADD, SUBSTRACT]

export const getExpressionArray = (expr: string) => {
	let value = ''
	const newArr: string[] = []
	expr = expr.replace('*(-1)', '*-1')
	for (let i = 0; i < expr.length; i++) {
		if (expr[i] !== DOT && !isNaN(+expr[i])) {
			let j = i
			while (!isNaN(+expr[j]) || expr[j] === DOT) {
				value += expr[j]
				j++
			}

			newArr.push(value)
			value = ''
			i = j - 1
		} else {
			if (expr[i] === SUBSTRACT && i + 1 && isNaN(+expr[i - 1])) {
				let str = SUBSTRACT
				let limitLength = expr.length
				for (let g = i + 1; g < limitLength; g++) {
					if (!isNaN(+expr[g])) {
						str += expr[g]
					}
					if (expr[g] === DOT) {
						if (!str.includes(DOT)) {
							str += expr[g]
						}
					}
					if (Object.values(OPERATOR).includes(expr[g]) && expr[g] !== DOT) {
						limitLength = g
					}
				}
				newArr.push(str)
				i = limitLength - 1
			} else {
				newArr.push(expr[i])
			}
		}
	}

	return newArr
}

export const expressionCalculator = (newArr: string[]) => {
	let valueInBrackets: any = []
	let openBracketIndex = newArr.lastIndexOf('(')
	let closedBracketIndex = newArr.indexOf(')', openBracketIndex)
	if (openBracketIndex !== -1) {
		valueInBrackets = newArr.slice(openBracketIndex + 1, closedBracketIndex)
		valueInBrackets = calculate(calculate(valueInBrackets, FIRST_PRIORITY_OPERATORS), SECOND_PRIORITY_OPERATORS).join()
		newArr.splice(openBracketIndex, closedBracketIndex - openBracketIndex + 1, valueInBrackets)
		return expressionCalculator(newArr)
	}

	return calculate(calculate(newArr, FIRST_PRIORITY_OPERATORS), SECOND_PRIORITY_OPERATORS)
}

const calculate = (newArr: any, operationsArr: string[]) => {
	for (let i = 0; i < newArr.length; i++) {
		if (operationsArr.includes(newArr[i])) {
			const operator = newArr[i]
			const value = Number(newArr[i - 1])
			const secondValue = Number(newArr[i + 1])
			if (value) {
				if (operator === SUBSTRACT) {
					calculator.executeCommand(operations(value, operator))
					if (calculator.value) {
						calculator.value *= -1
					}
				}
				if (operator === ADD || operator === MULTIPLE || operator === DEVIDE || operator === PERCENTAGE) {
					calculator.value = value
				}
			} else {
				if (operator === MULTIPLE || operator === DEVIDE || operator === PERCENTAGE) {
					calculator.value = 0
				} else {
					calculator.executeCommand(operations(value, operator))
				}
			}
			calculator.executeCommand(operations(secondValue, operator))
			const result = calculator.value
			newArr.splice(i - 1, 3, result)
			calculator.value = 0
			i = -1
		}
	}

	return newArr
}

export const checkMissingBrackets = (expr: string) =>
	expr.split('').reduce(
		(acc, curr) => {
			if (curr === BRACKET_LEFT) {
				acc.brackets += 1
			}
			if (curr === BRACKET_RIGHT) {
				acc.brackets -= 1
			}
			return acc
		},
		{ brackets: 0 }
	)
