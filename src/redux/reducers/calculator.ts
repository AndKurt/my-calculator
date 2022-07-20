import { MAX_INPUT, OPERATOR } from '@constants/operators'
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { checkMissingBrackets, expressionCalculator, getExpressionArray } from '@utils/calculatorMath'
import { checkDotsInLastValue, countDots, countMathSigns, findLastIndexMathSign } from '@utils/helpers'
import {
	addFunc,
	devideFunc,
	flipSign,
	getRemainderOfDivision,
	limitInput,
	multipleFunc,
	roundValue,
	substractFunc,
} from '@utils/mathFunc'

export interface ICalculatorStore {
	currentValue: string;
	expression: string;
	arrayExpressions: string[];
}

const initialState: ICalculatorStore = {
	currentValue: '0',
	expression: '',
	arrayExpressions: [],
}

const { ADD, SUBSTRACT, MULTIPLE, DEVIDE, PERCENTAGE, DOT, BRACKET_LEFT, BRACKET_RIGHT } = OPERATOR

const MATH_OPERATIONS = {
	ADD,
	SUBSTRACT,
	MULTIPLE,
	DEVIDE,
	PERCENTAGE,
}

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setCurrentValue: (state, action: PayloadAction<string>) => {
			const currentValue = state.currentValue
			const operand = action.payload
			const expression = state.expression
			const lastSymbol = expression[expression.length - 1]
			const lastExpression = state.expression
			const missingBracket = checkMissingBrackets(lastExpression).brackets

			if (operand === DOT && lastSymbol !== BRACKET_RIGHT) {
				if (currentValue === '0') {
					state.currentValue = state.currentValue + DOT
					state.expression = expression.slice(0, expression.length - 1) + state.currentValue
				} else {
					if (Object.values(OPERATOR).includes(lastSymbol)) {
						if (lastSymbol !== DOT) {
							state.currentValue = currentValue + '0.'
							state.expression = expression + '0.'
						}
					}
					if (Object.values(MATH_OPERATIONS).includes(lastSymbol)) {
						state.currentValue = '0.'
					} else {
						if (lastSymbol !== DOT) {
							if (checkDotsInLastValue(expression) < 1) {
								state.currentValue = currentValue + operand
								state.expression = expression + operand
							}
						}
						if (countDots(expression) > countMathSigns(expression)) {
							state.currentValue = currentValue
							state.expression = expression
						}
					}
				}
			} else {
				if (Object.values(OPERATOR).includes(operand)) {
					if (operand === BRACKET_LEFT) {
						if (currentValue === '0') {
							state.currentValue = operand
							state.expression = expression + operand
						} else if (isNaN(+lastSymbol)) {
							state.currentValue = currentValue + operand
							state.expression = expression + operand
						}
					} else if (operand === BRACKET_RIGHT) {
						if (missingBracket) {
							if (currentValue !== '0') {
								if (lastSymbol === DOT) {
									//state.currentValue =
									//	currentValue.slice(0, currentValue.length - 1) + BRACKET_RIGHT.repeat(missingBracket)
									state.expression = expression.slice(0, expression.length - 1) + operand
								} else if (!isNaN(+lastSymbol)) {
									//state.currentValue = currentValue + BRACKET_RIGHT
									state.expression += BRACKET_RIGHT
								} else {
									if (missingBracket > 0) {
										if (isNaN(+lastSymbol) && lastSymbol !== BRACKET_RIGHT) {
											state.currentValue = currentValue + '0' + BRACKET_RIGHT
										} else {
											state.expression += BRACKET_RIGHT
										}
									} else {
										state.currentValue = currentValue + '0' + BRACKET_RIGHT.repeat(missingBracket)
										state.expression = state.currentValue
									}
								}
							} else {
								state.currentValue = currentValue + BRACKET_RIGHT.repeat(missingBracket)
								state.expression = expression + operand
							}
						}
					} else if (currentValue !== '0') {
						if (!Object.values(OPERATOR).includes(lastSymbol)) {
							//state.currentValue = currentValue + operand
							state.expression = expression + operand
						} else if (Object.values(OPERATOR).includes(operand) && lastSymbol === BRACKET_RIGHT && operand !== DOT) {
							state.currentValue = currentValue + operand
							state.expression = expression + operand
						}
					} else {
						if (expression.length === 1) {
							state.currentValue = currentValue + operand
							state.expression = state.currentValue
						} else {
							state.currentValue = currentValue + operand
							state.expression = expression + state.currentValue
						}
					}
				} else if (operand !== '0') {
					if (expression.length === 1 && expression[0] === '0') {
						state.currentValue = operand
						state.expression = operand
					} else if (lastSymbol !== BRACKET_RIGHT) {
						if (lastSymbol === DOT) {
							state.currentValue += operand
						} else {
							if (currentValue === '0') {
								state.currentValue = operand
							} else {
								if (Object.values(OPERATOR).includes(lastSymbol)) {
									state.currentValue = operand
								} else {
									state.currentValue += operand
								}
							}
						}
						state.expression += operand
					}
				} else if (expression.length) {
					state.currentValue = operand
					state.expression += operand
				} else if (!Object.values(OPERATOR).includes(lastSymbol)) {
					if (operand === '0' && expression.length) {
						state.currentValue = expression + operand
						state.expression = expression + operand
					}
				}
			}
		},

		removeLastChar: (state) => {
			const expression = state.expression
			const currentValue = state.currentValue
			if (currentValue.length > 1) {
				state.currentValue = currentValue.slice(0, -1)
				state.expression = expression.slice(0, -1)
			} else {
				state.currentValue = '0'
				state.expression = expression.slice(0, -1)
			}
		},

		resetAll: (state) => {
			state.currentValue = '0'
			state.expression = ''
		},

		swapSignValue: (state) => {
			const lastSymbol = state.currentValue.slice(-1)
			const missingBracket = checkMissingBrackets(state.expression).brackets

			if (state.currentValue[0] === SUBSTRACT) {
				if (missingBracket > 0) {
					state.currentValue = state.currentValue.slice(2)
				} else {
					state.currentValue = state.currentValue.slice(1)
				}
				state.expression = state.currentValue
			} else {
				if (Object.values(OPERATOR).includes(lastSymbol) && lastSymbol !== DOT) {
					if (missingBracket === 0) {
						if (state.currentValue[0] === BRACKET_LEFT) {
							state.currentValue = SUBSTRACT + state.currentValue.slice(1, -1)
						} else {
							state.currentValue = SUBSTRACT + BRACKET_LEFT + state.currentValue
						}
					} else {
						state.currentValue = SUBSTRACT + BRACKET_LEFT + state.currentValue + '0' + BRACKET_RIGHT
					}
				} else {
					state.currentValue = SUBSTRACT + BRACKET_LEFT + state.currentValue + BRACKET_RIGHT
				}
				state.expression = state.currentValue
			}
		},

		mathOperation: (state) => {
			const missingBracket = checkMissingBrackets(state.expression).brackets
			let lastExpression = state.expression
			const isMinus = lastExpression[0] === SUBSTRACT
			if (isMinus) {
				lastExpression = lastExpression.slice(1)
			}
			const lastSymbol = lastExpression[lastExpression.length - 1]
			let passedExpression = ''

			if (Object.values(OPERATOR).includes(lastSymbol)) {
				if (lastSymbol === DOT) {
					passedExpression = lastExpression.slice(0, lastExpression.length - 1) + BRACKET_RIGHT.repeat(missingBracket)
				}
				if (
					lastSymbol === SUBSTRACT ||
					lastSymbol === ADD ||
					lastSymbol === MULTIPLE ||
					lastSymbol === DEVIDE ||
					lastSymbol === PERCENTAGE
				) {
					passedExpression = lastExpression + '0' + BRACKET_RIGHT.repeat(missingBracket)
				} else if (lastSymbol === BRACKET_LEFT) {
					passedExpression = lastExpression + '0' + BRACKET_RIGHT.repeat(missingBracket)
				} else {
					passedExpression = lastExpression + BRACKET_RIGHT.repeat(missingBracket)
				}
			} else {
				passedExpression = lastExpression + BRACKET_RIGHT.repeat(missingBracket)
			}

			if (passedExpression) {
				const expressionArray = getExpressionArray(passedExpression)
				let result = roundValue(
					isMinus ? -1 * expressionCalculator(expressionArray) : expressionCalculator(expressionArray)
				)

				state.currentValue = result
				state.expression = result
				state.arrayExpressions = [...state.arrayExpressions, isMinus ? SUBSTRACT + passedExpression : passedExpression]
			}
		},
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation } = calculatorSlice.actions
