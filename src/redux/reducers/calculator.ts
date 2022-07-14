import { OPERATOR } from '@constants/operators'
import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { flipSign } from '@utils/mathFunc'

export interface ICalculatorStore {
	currentValue: number;
	historyValue: number;
	operator: string;
	expression: string;
	arrayExpressions: string[];
}

const initialState: ICalculatorStore = {
	currentValue: 0,
	historyValue: 0,
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
			state.currentValue = Number(
				state.currentValue + action.payload
			)
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
	},
})

export const calculatorReducer = calculatorSlice.reducer
export const {
	setCurrentValue,
	removeLastChar,
	removeAllChar,
	swapSignValue,
	setOperator,
} = calculatorSlice.actions
