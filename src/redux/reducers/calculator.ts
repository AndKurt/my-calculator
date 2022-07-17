import { MAX_INPUT, OPERATOR } from '@constants/operators'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
						const lastExpression = state.expression
						const missingBracket = checkMissingBrackets(lastExpression).brackets
						if (missingBracket) {
							if (currentValue !== '0') {
								if (lastSymbol === OPERATOR.DOT) {
									state.currentValue =
										currentValue.slice(0, currentValue.length - 1) + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
									state.expression = expression.slice(0, expression.length - 1) + operand
								} else if (!isNaN(+lastSymbol)) {
									state.currentValue = currentValue + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
									state.expression = expression + operand
								} else {
									state.currentValue = currentValue + '0' + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
									state.expression = expression + '0' + operand
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
			}
		},

		removeLastChar: (state) => {
			//let passValue: string | null = null
			//if (state.expression.length === 1) {
			//	if (state.expression[0].length === 1) {
			//		passValue = '0'
			//		state.currentValue = passValue
			//		state.historyValue = passValue
			//		state.expression = ''
			//	} else {
			//		passValue = state.expression[0].slice(0, -1)
			//		state.historyValue = passValue
			//		state.expression = [passValue]
			//		state.currentValue = passValue
			//	}
			//	state.operator = ''
			//} else {
			//	if (state.expression.length > 1) {
			//		if (state.secondValue.length === 1) {
			//			state.expression.pop()
			//			passValue = '0'
			//			state.secondValue = passValue
			//			state.currentValue = passValue
			//		} else {
			//			state.expression.pop()
			//			passValue = state.secondValue.slice(0, -1)
			//			state.secondValue = passValue
			//			state.currentValue = passValue
			//			state.expression = [
			//				...state.expression,
			//				passValue,
			//			]
			//		}
			//	}
			//}
		},

		resetAll: () => initialState,

		swapSignValue: (state) => {
			//const flippedvalue = flipSign(state.currentValue)
			//const index = state.expression.lastIndexOf(
			//	state.currentValue
			//)
			//state.expression[index] = flippedvalue
			//state.currentValue = flippedvalue
			//if (state.secondValue !== '0') {
			//	state.secondValue = flippedvalue
			//}
		},

		mathOperation: (state) => {
			const missingBracket = checkMissingBrackets(state.expression).brackets
			const lastExpression = state.expression
			const lastSymbol = lastExpression[lastExpression.length - 1]
			let passedExpression = ''

			if (Object.values(OPERATOR).includes(lastSymbol)) {
				if (lastSymbol === OPERATOR.DOT) {
					passedExpression =
						lastExpression.slice(0, lastExpression.length - 1) + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				}
				if (!missingBracket) {
					passedExpression = lastExpression + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				} else {
					passedExpression = lastExpression + '0' + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
				}
			} else {
				passedExpression = lastExpression + OPERATOR.BRACKET_RIGHT.repeat(missingBracket)
			}

			if (passedExpression) {
				const result = roundValue(expressionCalculator(passedExpression))
				state.currentValue = result
				state.expression = result
				state.arrayExpressions = [...state.arrayExpressions, passedExpression]
			}
		},
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation } = calculatorSlice.actions
