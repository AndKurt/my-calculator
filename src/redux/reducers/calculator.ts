import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OPERATOR } from '@constants/operators'
import { checkMissingBrackets, expressionCalculator, getExpressionArray } from '@utils/calculatorMath'
import { checkDotsInLastValue, countDots, countMathSigns } from '@utils/helpers'
import { roundValue } from '@utils/helpers'
import { getDataFromLS } from '@utils/localStorageFunc'

export interface ICalculatorStore {
  currentValue: string
  expression: string
  arrayExpressions: string[]
}

const initialState: ICalculatorStore = {
  currentValue: '0',
  expression: '',
  arrayExpressions: getDataFromLS('history', []),
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
          state.currentValue += DOT
          if (expression.length) {
            if (lastSymbol === BRACKET_LEFT) {
              state.expression += '0.'
            } else {
              state.expression += DOT
            }
          } else {
            state.expression = expression.slice(0, expression.length - 1) + state.currentValue
          }
        } else {
          if (Object.values(OPERATOR).includes(lastSymbol)) {
            if (lastSymbol === BRACKET_LEFT) {
              state.currentValue = '0.'
              state.expression += '0.'
            } else if (lastSymbol !== DOT) {
              state.currentValue = currentValue + '0.'
              state.expression = expression + '0.'
            }
          }
          if (Object.values(MATH_OPERATIONS).includes(lastSymbol)) {
            state.currentValue = '0.'
          } else {
            if (lastSymbol !== BRACKET_LEFT) {
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
        }
      } else {
        if (Object.values(OPERATOR).includes(operand)) {
          if (operand === BRACKET_LEFT) {
            if (lastSymbol !== DOT) {
              if (currentValue === '0') {
                //state.currentValue = operand
                state.expression = expression + operand
              } else if (isNaN(+lastSymbol)) {
                //state.currentValue = currentValue + operand
                state.expression = expression + operand
              }
            }
          } else if (operand === BRACKET_RIGHT) {
            if (missingBracket) {
              if (currentValue !== '0') {
                if (lastSymbol === DOT) {
                  state.expression = expression.slice(0, expression.length - 1) + operand
                } else if (!isNaN(+lastSymbol)) {
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
              state.expression += operand
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
          if (operand === '0' && currentValue !== '0') {
            if (Object.values(OPERATOR).includes(lastSymbol)) {
              if (lastSymbol === DOT) {
                state.currentValue += operand
              } else {
                state.currentValue = operand
              }
            } else {
              state.currentValue += operand
            }
            state.expression += operand
          } else {
            state.currentValue = operand
          }
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

    clearHistory: (state) => {
      state.arrayExpressions = []
    },

    swapSignValue: (state) => {
      const expression = state.expression
      const lastSymbol = expression.slice(-1)
      const isMinusActive = expression.slice(-5) === '*(-1)'

      if (isMinusActive) {
        state.expression = expression.replace('*(-1)', '')
      } else {
        if (expression.length && !Object.values(MATH_OPERATIONS).includes(lastSymbol)) {
          state.expression += '*(-1)'
        }
      }
    },

    mathOperation: (state) => {
      const missingBracket = checkMissingBrackets(state.expression).brackets
      let lastExpression = state.expression
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

        let result = roundValue(expressionCalculator(expressionArray))
        state.currentValue = result
        state.expression = result

        state.arrayExpressions = [...state.arrayExpressions, passedExpression]
      }
    },
  },
})

export const calculatorReducer = calculatorSlice.reducer
export const { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation, clearHistory } =
  calculatorSlice.actions
