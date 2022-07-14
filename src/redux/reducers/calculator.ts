import { OPERATOR } from '@constants/operators'
import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import {
	addFunc,
	devideFunc,
	flipSign,
	getRemainderOfDivision,
	multipleFunc,
	substractFunc,
} from '@utils/mathFunc'

export interface ICalculatorStore {
	currentValue: number;
	historyValue: number;
	secondValue: number;
	operator: string;
	expression: string;
	arrayExpressions: string[];
}

const initialState: ICalculatorStore = {
	currentValue: 0,
	historyValue: 0,
	secondValue: 0,
	expression: '',
	operator: '',
	arrayExpressions: [],
}

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setCurrentValue: (
			state,
			action: PayloadAction<number>
		) => {
			const currentValue = state.currentValue
			const secondValue = state.secondValue
			const operator = state.operator

			if (operator) {
				console.log(1)
				state.currentValue = Number(
					secondValue + action.payload
				)
				state.secondValue = state.currentValue
			} else {
				console.log(2)
				state.currentValue = Number(
					currentValue + action.payload
				)
			}
		},

		removeLastChar: (state) => {
			if (
				state.currentValue > -10 &&
				state.currentValue < 0
			) {
				state.currentValue = 0
			} else {
				state.currentValue = Number(
					state.currentValue.toString().slice(0, -1)
				)
			}
		},

		removeAllChar: (state) => {
			state.currentValue = 0
		},

		swapSignValue: (state) => {
			state.currentValue = flipSign(state.currentValue)
		},

		setOperator: (state, action: PayloadAction<string>) => {
			state.historyValue = state.currentValue
			state.operator = action.payload
		},

		mathOperation: (state) => {
			const currentValue = state.currentValue
			const historyValue = state.historyValue
			const operator = state.operator

			switch (operator) {
				case OPERATOR.ADD:
					state.currentValue = addFunc(
						historyValue,
						Number(currentValue)
					)
					state.operator = ''
					state.secondValue = 0
					break
				case OPERATOR.SUBSTRACT:
					state.currentValue = substractFunc(
						historyValue,
						Number(currentValue)
					)
					state.operator = ''
					state.secondValue = 0

					break
				case OPERATOR.DIVIDE:
					state.currentValue = devideFunc(
						historyValue,
						Number(currentValue)
					)
					state.operator = ''
					state.secondValue = 0
					break
				case OPERATOR.MULTIPLE:
					state.currentValue = multipleFunc(
						historyValue,
						Number(currentValue)
					)
					state.operator = ''
					state.secondValue = 0
					break
				case OPERATOR.PERCENTAGE:
					state.currentValue = getRemainderOfDivision(
						historyValue,
						Number(currentValue)
					)
					state.operator = ''
					state.secondValue = 0
					break
				default:
			}
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
