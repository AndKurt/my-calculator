import React, {MouseEvent} from 'react'
import {
	keypadBtns,
	keypadSpecBtns,
} from '@constants/keypadBtns'
import {
	BtnsCommonContainer,
	BtnsSpecContainer,
	CommonBtn,
	KeyPadWrapper,
	SpecBtn,
} from './componets'
import { useAppDispatch } from '@redux/hooks/hooks'
import { OPERATOR } from '@constants/operators'
import { 	setCurrentValue,
	removeLastChar,
	resetAll,
	swapSignValue,
	setOperator,
	mathOperation,
	setBracket } from '@redux/reducers/calculator'

export const Keypad = () => {
	const dispatch = useAppDispatch()

	const handelClick = (e: MouseEvent<HTMLElement>) => {
		const buttonValue = (e.target as HTMLButtonElement).value
		if (buttonValue) {
			if (!isNaN(Number(buttonValue))) {
				dispatch(setCurrentValue(buttonValue))
			} else {
				switch (buttonValue) {
					case OPERATOR.REMOVE_LAST:
						dispatch(removeLastChar())
						break
					case OPERATOR.DOT:
						dispatch(setCurrentValue(OPERATOR.DOT))
						break
					case OPERATOR.PERCENTAGE:
						dispatch(setOperator(OPERATOR.PERCENTAGE))
						break
					case OPERATOR.REMOVE_ALL:
						dispatch(resetAll())
						break
					case OPERATOR.SWAP_SIGN:
						dispatch(swapSignValue())
						break
					case OPERATOR.ADD:
						dispatch(setOperator(OPERATOR.ADD))
						break
					case OPERATOR.SUBSTRACT:
						dispatch(setOperator(OPERATOR.SUBSTRACT))
						break
					case OPERATOR.DIVIDE:
						dispatch(setOperator(OPERATOR.DIVIDE))
						break
					case OPERATOR.MULTIPLE:
						dispatch(setOperator(OPERATOR.MULTIPLE))
						break
					case OPERATOR.EQUAL:
						dispatch(mathOperation())
						break
					case OPERATOR.BRACKET_LEFT:
						dispatch(setBracket(OPERATOR.BRACKET_LEFT))
						break
					case OPERATOR.BRACKET_RIGHT:
						dispatch(setBracket(OPERATOR.BRACKET_RIGHT))
						break

					default:
				}
			}
		}
	}

	return (
		<KeyPadWrapper onClick={handelClick}>
			<BtnsCommonContainer>
				{keypadBtns.map(({ view }) => (
					<CommonBtn key={view} value={view}>
						{view}
					</CommonBtn>
				))}
			</BtnsCommonContainer>
			<BtnsSpecContainer>
				{keypadSpecBtns.map(({ view }) => (
					<SpecBtn key={view} value={view}>
						{view}
					</SpecBtn>
				))}
			</BtnsSpecContainer>
		</KeyPadWrapper>
	)
}
