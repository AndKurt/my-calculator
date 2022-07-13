import React from 'react'
import {
	keypadBtns,
	keypadSpecBtns,
} from '@constants/keypadBtns'
import {
	BtnsCommonContainer,
	BtnsSpecContainer,
	CommonBtn,
	KeyPadWrapper,
} from './componets'

export const Keypad = () => {
	return (
		<KeyPadWrapper>
			<BtnsCommonContainer>
				{keypadBtns.map(({ view }) => (
					<CommonBtn key={view}>{view}</CommonBtn>
				))}
			</BtnsCommonContainer>
			<BtnsSpecContainer>
				{keypadSpecBtns.map(({ view }) => (
					<CommonBtn key={view}>{view}</CommonBtn>
				))}
			</BtnsSpecContainer>
		</KeyPadWrapper>
	)
}
