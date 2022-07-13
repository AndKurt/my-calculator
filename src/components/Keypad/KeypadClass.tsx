import React, { Component } from 'react'
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

export class KeypadClass extends Component {
	render() {
		return (
			<KeyPadWrapper>
				<BtnsCommonContainer>
					{keypadBtns.map(({ view }) => (
						<CommonBtn key={view}>{view}</CommonBtn>
					))}
				</BtnsCommonContainer>
				<BtnsSpecContainer>
					{keypadSpecBtns.map(({ view }) => (
						<SpecBtn key={view}>{view}</SpecBtn>
					))}
				</BtnsSpecContainer>
			</KeyPadWrapper>
		)
	}
}

export default KeypadClass
