import { MAX_INPUT, OPERATOR } from '@constants/operators'
import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
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
	historyValue: string;
	secondValue: string;
	operator: string;
	expression: string[];
	arrayExpressions: string[];
}

const initialState: ICalculatorStore = {
	currentValue: '0',
	historyValue: '0',
	secondValue: '0',
	expression: [],
	operator: '',
	arrayExpressions: [],
}

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setCurrentValue: (
			state,
			action: PayloadAction<string>
		) => {
			const currentValue = state.currentValue
			const operand = action.payload
			const secondValue = state.secondValue
			const operator = state.operator

			if (operator) {
				switch (operand) {
					case OPERATOR.DOT: {
						if (secondValue.includes('.')) {
							state.currentValue = secondValue
						} else {
							state.currentValue = limitInput(
								`${secondValue}${action.payload}`,
								MAX_INPUT
							)
							state.secondValue = state.currentValue
						}
						break
					}
					default:
						if (secondValue === '0') {
							state.currentValue = action.payload
							state.secondValue = state.currentValue
						} else {
							state.currentValue = limitInput(
								`${secondValue}${action.payload}`,
								MAX_INPUT
							)
							state.secondValue = state.currentValue
						}
				}

				if (state.expression.length > 2) {
					state.expression = [
						...state.expression.slice(0, -1),
						state.currentValue,
					]
				} else {
					state.expression = [
						...state.expression,
						state.currentValue,
					]
				}
			} else {
				switch (operand) {
					case OPERATOR.DOT: {
						if (currentValue.includes('.')) {
							state.currentValue = currentValue
						} else {
							state.currentValue = limitInput(
								`${currentValue}${action.payload}`,
								MAX_INPUT
							)
						}
						break
					}
					default:
						if (currentValue === '0') {
							state.currentValue = action.payload
						} else {
							state.currentValue = limitInput(
								`${currentValue}${action.payload}`,
								MAX_INPUT
							)
						}
				}
				state.expression = [state.currentValue]
			}
		},

		removeLastChar: (state) => {
			let passValue: string | null = null

			if (state.expression.length === 1) {
				if (state.expression[0].length === 1) {
					passValue = '0'
					state.currentValue = passValue
					state.historyValue = passValue
					state.expression = []
				} else {
					passValue = state.expression[0].slice(0, -1)
					state.historyValue = passValue
					state.expression = [passValue]
					state.currentValue = passValue
				}
				state.operator = ''
			} else {
				if (state.expression.length > 1) {
					if (state.secondValue.length === 1) {
						state.expression.pop()
						passValue = '0'
						state.secondValue = passValue
						state.currentValue = passValue
					} else {
						state.expression.pop()
						passValue = state.secondValue.slice(0, -1)
						state.secondValue = passValue
						state.currentValue = passValue
						state.expression = [
							...state.expression,
							passValue,
						]
					}
				}
			}
		},

		resetAll: () => initialState,

		swapSignValue: (state) => {
			const flippedvalue = flipSign(state.currentValue)
			const index = state.expression.lastIndexOf(
				state.currentValue
			)
			state.expression[index] = flippedvalue
			state.currentValue = flippedvalue
			if (state.secondValue !== '0') {
				state.secondValue = flippedvalue
			}
		},

		setOperator: (state, action: PayloadAction<string>) => {
			const currentOperator = action.payload
			const currentValue = state.currentValue

			state.operator = currentOperator
			state.historyValue = currentValue
			state.expression = [currentValue, currentOperator]
		},

		mathOperation: (state) => {
			const historyValue = state.historyValue
			const secondValue = state.secondValue
			const operator = state.operator
			const currentValue =
				secondValue === '0'
					? secondValue
					: state.currentValue

			switch (operator) {
				case OPERATOR.ADD:
					state.currentValue = addFunc(
						historyValue,
						currentValue
					)
					state.operator = ''
					state.secondValue = '0'
					break
				case OPERATOR.SUBSTRACT:
					state.currentValue = substractFunc(
						historyValue,
						currentValue
					)
					state.operator = ''
					state.secondValue = '0'
					break
				case OPERATOR.DIVIDE:
					state.currentValue = devideFunc(
						historyValue,
						currentValue
					)
					state.operator = ''
					state.secondValue = '0'
					break
				case OPERATOR.MULTIPLE:
					state.currentValue = multipleFunc(
						historyValue,
						currentValue
					)
					state.operator = ''
					state.secondValue = '0'
					break
				case OPERATOR.PERCENTAGE:
					state.currentValue = getRemainderOfDivision(
						historyValue,
						currentValue
					)
					state.operator = ''
					state.secondValue = '0'
					break
				default:
					state
			}
			state.arrayExpressions = [
				...state.arrayExpressions,
				state.expression.join(' '),
			]
			state.expression = [state.currentValue]
		},

		setBracket: (state, action: PayloadAction<string>) => {
			const currentValue = state.currentValue
			const operator = state.operator
			const bracket = action.payload

			switch (bracket) {
				case OPERATOR.BRACKET_LEFT: {
					if (!operator) {
						if (currentValue === '0') {
							state.currentValue = bracket
						}
						if (
							currentValue.lastIndexOf(bracket) ===
							currentValue.length - 1
						) {
							state.currentValue = currentValue + bracket
						}
					}
				}
			}
		},
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const {
	setCurrentValue,
	removeLastChar,
	resetAll,
	swapSignValue,
	setOperator,
	mathOperation,
	setBracket,
} = calculatorSlice.actions
