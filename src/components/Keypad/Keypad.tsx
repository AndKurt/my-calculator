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
	mathOperation,
	 } from '@redux/reducers/calculator'

export const Keypad = () => {
	const dispatch = useAppDispatch()

	const handelClick = (e: MouseEvent<HTMLElement>) => {
		const buttonValue = (e.target as HTMLButtonElement).value
		if (buttonValue) {
				switch (buttonValue) {
					case OPERATOR.REMOVE_LAST:
						dispatch(removeLastChar())
						break
					case OPERATOR.DOT:
						dispatch(setCurrentValue(OPERATOR.DOT))
						break
					case OPERATOR.REMOVE_ALL:
						dispatch(resetAll())
						break
					case OPERATOR.SWAP_SIGN:
						dispatch(swapSignValue())
						break
					case OPERATOR.EQUAL:
						dispatch(mathOperation())
						break
					default:
						dispatch(setCurrentValue(buttonValue))
						break
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
