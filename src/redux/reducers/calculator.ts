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

			if (operand === OPERATOR.DOT) {
				if (currentValue === '0') {
					state.currentValue = '0.'
					state.expression = expression + state.currentValue
				} else if (Object.values(OPERATOR).includes(lastSymbol)) {
					state.currentValue = currentValue + '0.'
					state.expression = expression + '0.'
				} else {
					state.currentValue = currentValue + operand
					state.expression = expression + operand
				}
			} else {
				if (operand !== '0' || currentValue !== '0') {
					state.currentValue = expression + operand
					state.expression = expression + operand
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

		setOperator: (state, action: PayloadAction<string>) => {
			//const currentOperator = action.payload
			//const currentValue = state.currentValue
			//state.operator = currentOperator
			//state.historyValue = currentValue
			//state.expression = [currentValue, currentOperator]
		},

		mathOperation: (state) => {
			const expression =
				state.expression + OPERATOR.BRACKET_RIGHT.repeat(checkMissingBrackets(state.expression).brackets)
			state.currentValue = expressionCalculator(expression)
			state.expression = expression
			state.arrayExpressions = [...state.arrayExpressions, expression]
		},
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const { setCurrentValue, removeLastChar, resetAll, swapSignValue, setOperator, mathOperation } =
	calculatorSlice.actions
