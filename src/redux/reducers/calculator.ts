import { MAX_INPUT, OPERATOR } from '@constants/operators'
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { checkMissingBrackets, expressionCalculator } from '@utils/calculatorMath'
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

			if (operand === OPERATOR.DOT && lastSymbol !== OPERATOR.BRACKET_RIGHT) {
				if (currentValue === '0') {
					state.currentValue = state.currentValue + OPERATOR.DOT
					state.expression = expression.slice(0, expression.length - 1) + state.currentValue
				} else if (Object.values(OPERATOR).includes(lastSymbol)) {
					if (lastSymbol !== OPERATOR.DOT) {
						state.currentValue = currentValue + '0.'
						state.expression = expression + '0.'
					}
				} else {
					state.currentValue = currentValue + operand
					state.expression = expression + operand
				}
			} else {
				if (Object.values(OPERATOR).includes(operand)) {
					if (operand === OPERATOR.BRACKET_LEFT) {
						if (currentValue === '0') {
							state.currentValue = operand
							state.expression = expression + operand
						} else if (isNaN(+lastSymbol)) {
							state.currentValue = currentValue + operand
							state.expression = expression + operand
						}
					} else if (operand === OPERATOR.BRACKET_RIGHT) {
						if (missingBracket) {
							if (currentValue !== '0') {
								if (lastSymbol === OPERATOR.DOT) {
									state.currentValue =
										currentValue.slice(0, currentValue.length - 1) + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
									state.expression = expression.slice(0, expression.length - 1) + operand
								} else if (!isNaN(+lastSymbol)) {
									state.currentValue = currentValue + OPERATOR.BRACKET_RIGHT
									state.expression = state.currentValue
								} else {
									if (missingBracket > 0) {
										if (isNaN(+lastSymbol) && lastSymbol !== OPERATOR.BRACKET_RIGHT) {
											state.currentValue = currentValue + '0' + OPERATOR.BRACKET_RIGHT
										} else {
											state.currentValue = currentValue + OPERATOR.BRACKET_RIGHT
										}
									} else {
										state.currentValue = currentValue + '0' + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
									}
									state.expression = state.currentValue
								}
							} else {
								state.currentValue = currentValue + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
								state.expression = expression + operand
							}
						}
					} else if (currentValue !== '0') {
						if (!Object.values(OPERATOR).includes(lastSymbol)) {
							state.currentValue = currentValue + operand
							state.expression = expression + operand
						} else if (
							Object.values(OPERATOR).includes(operand) &&
							lastSymbol === OPERATOR.BRACKET_RIGHT &&
							operand !== OPERATOR.DOT
						) {
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
					} else if (lastSymbol !== OPERATOR.BRACKET_RIGHT) {
						state.currentValue = expression + operand
						state.expression = expression + operand
					}
				}
				if (!Object.values(OPERATOR).includes(lastSymbol)) {
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

			if (expression.length > 1) {
				state.currentValue = currentValue.slice(0, -1)
				state.expression = expression.slice(0, -1)
			} else {
				state.currentValue = '0'
				state.expression = ''
			}
		},

		resetAll: () => initialState,

		swapSignValue: (state) => {
			const lastSymbol = state.currentValue.slice(-1)
			const missingBracket = checkMissingBrackets(state.expression).brackets

			if (state.currentValue[0] === OPERATOR.SUBSTRACT) {
				if (missingBracket > 0) {
					state.currentValue = state.currentValue.slice(2)
				} else {
					state.currentValue = state.currentValue.slice(1)
				}
				state.expression = state.currentValue
			} else {
				if (Object.values(OPERATOR).includes(lastSymbol) && lastSymbol !== OPERATOR.DOT) {
					if (missingBracket === 0) {
						if (state.currentValue[0] === OPERATOR.BRACKET_LEFT) {
							state.currentValue = OPERATOR.SUBSTRACT + state.currentValue.slice(1, -1)
						} else {
							state.currentValue = OPERATOR.SUBSTRACT + OPERATOR.BRACKET_LEFT + state.currentValue
						}
					} else {
						state.currentValue =
							OPERATOR.SUBSTRACT + OPERATOR.BRACKET_LEFT + state.currentValue + '0' + OPERATOR.BRACKET_RIGHT
					}
				} else {
					state.currentValue = OPERATOR.SUBSTRACT + OPERATOR.BRACKET_LEFT + state.currentValue + OPERATOR.BRACKET_RIGHT
				}
				state.expression = state.currentValue
			}
		},

		mathOperation: (state) => {
			const missingBracket = checkMissingBrackets(state.expression).brackets
			let lastExpression = state.expression
			const isMinus = lastExpression[0] === OPERATOR.SUBSTRACT
			if (isMinus) {
				lastExpression = lastExpression.slice(1)
			}
			const lastSymbol = lastExpression[lastExpression.length - 1]
			let passedExpression = ''

			if (Object.values(OPERATOR).includes(lastSymbol)) {
				if (lastSymbol === OPERATOR.DOT) {
					passedExpression =
						lastExpression.slice(0, lastExpression.length - 1) + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				}
				if (
					lastSymbol === OPERATOR.SUBSTRACT ||
					lastSymbol === OPERATOR.ADD ||
					lastSymbol === OPERATOR.MULTIPLE ||
					lastSymbol === OPERATOR.DIVIDE ||
					lastSymbol === OPERATOR.PERCENTAGE
				) {
					passedExpression = lastExpression + '0' + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				} else if (lastSymbol === OPERATOR.BRACKET_LEFT) {
					passedExpression = lastExpression + '0' + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				} else {
					passedExpression = lastExpression + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				}
			} else {
				passedExpression = lastExpression + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
			}

			if (passedExpression) {
				let result = roundValue(
					isMinus ? -1 * expressionCalculator(passedExpression) : expressionCalculator(passedExpression)
				)
				state.currentValue = result
				state.expression = result
				state.arrayExpressions = [
					...state.arrayExpressions,
					isMinus ? OPERATOR.SUBSTRACT + passedExpression : passedExpression,
				]
			}
		},
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation } = calculatorSlice.actions
