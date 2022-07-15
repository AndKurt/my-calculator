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
				console.log(2)
				state.expression = [state.currentValue]
			}
		},

		removeLastChar: (state) => {
			if (state.currentValue.length < 2) {
				state.currentValue = '0'
			} else {
				state.currentValue = state.currentValue
					.toString()
					.slice(0, -1)

				state.expression = [
					...state.expression.slice(0, -1),
					state.currentValue,
				]
			}
		},

		removeAllChar: (state) => {
			state.currentValue = '0'
			state.historyValue = '0'
			state.secondValue = '0'
			state.operator = ''
			state.expression = []
			state.arrayExpressions = []
		},

		swapSignValue: (state) => {
			const flippedvalue = flipSign(state.currentValue)
			state.expression = state.expression.map(
				(value, index) => {
					if (value === state.currentValue) {
						return (state.expression[index] = flippedvalue)
					}
					return state.expression[index]
				}
			)
			state.currentValue = flippedvalue
		},

		setOperator: (state, action: PayloadAction<string>) => {
			if (!state.operator) {
				state.historyValue = state.currentValue
				state.operator = action.payload
				state.expression = [
					...state.expression,
					action.payload,
				]
			}
		},

		mathOperation: (state) => {
			const currentValue = state.currentValue
			const historyValue = state.historyValue
			const operator = state.operator

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
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const {
	setCurrentValue,
	removeLastChar,
	removeAllChar,
	swapSignValue,
	setOperator,
	mathOperation,
} = calculatorSlice.actions
