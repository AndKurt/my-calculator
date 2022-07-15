import React, { MouseEvent, Component } from 'react'
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
import { connect } from 'react-redux'
import { 
	setCurrentValue, 
	removeLastChar, 
	removeAllChar, 
	swapSignValue,
	setOperator, 
	mathOperation,
} from '../../redux/reducers/calculator'
import { AppDispatch } from '../../redux/'
import { OPERATOR } from '@constants/operators'

interface IKeyPadClassProps {
	setCurrentValue: (num: number | string) => void;
	removeLastChar: () => void;
	removeAllChar: () => void;
	swapSignValue: () => void;
	setOperator: (operator: string) => void;
	mathOperation: () => void;
}

class KeypadClass extends Component<IKeyPadClassProps> {
	
	handelClick = (e: MouseEvent<HTMLElement>) => {
		const buttonValue = (e.target as HTMLButtonElement).value
		if (buttonValue) {
			if (!isNaN(Number(buttonValue))) {
				this.props.setCurrentValue(buttonValue)
			}
			else {
				switch(buttonValue) {
					case OPERATOR.REMOVE_LAST:
						this.props.removeLastChar()
						break
						case OPERATOR.DOT:
							this.props.setCurrentValue(OPERATOR.DOT)
							break
						case OPERATOR.PERCENTAGE:
							this.props.setOperator(OPERATOR.PERCENTAGE)
							break
						case OPERATOR.REMOVE_ALL:					
							this.props.removeAllChar()
							break
						case OPERATOR.SWAP_SIGN:
							this.props.swapSignValue()
							break
						case OPERATOR.ADD:
							this.props.setOperator(OPERATOR.ADD)
							break
						case OPERATOR.SUBSTRACT:
							this.props.setOperator(OPERATOR.SUBSTRACT)
							break
						case OPERATOR.DIVIDE:
							this.props.setOperator(OPERATOR.DIVIDE)
							break
						case OPERATOR.MULTIPLE:
							this.props.setOperator(OPERATOR.MULTIPLE)
							break
						case OPERATOR.EQUAL:
							this.props.mathOperation()
							break
						case OPERATOR.BRACKET_LEFT:
							this.props.setCurrentValue(OPERATOR.BRACKET_LEFT)
							break
						case OPERATOR.BRACKET_RIGHT:
							this.props.setCurrentValue(OPERATOR.BRACKET_RIGHT)
							break

							
							default: 
				}
			}
		}
	}

	render() {
		return (
			<KeyPadWrapper onClick={this.handelClick}>
				<BtnsCommonContainer >
					{keypadBtns.map(({ view }) => (
						<CommonBtn key={view} value={view} >
							{view}
						</CommonBtn>
					))}
				</BtnsCommonContainer>
				<BtnsSpecContainer >
					{keypadSpecBtns.map(({ view }) => (
						<SpecBtn key={view} value={view} >
							{view}
						</SpecBtn>
					))}
				</BtnsSpecContainer>
			</KeyPadWrapper>
		)
	}
}

const mapDispatchToProps  = (dispatch: AppDispatch) => {
	return {
		setCurrentValue: (num) => dispatch(setCurrentValue(num)),
		removeLastChar: () => dispatch(removeLastChar()),
		removeAllChar: () => dispatch(removeAllChar()),
		swapSignValue: () => dispatch(swapSignValue()),
		setOperator: (operator: string) => dispatch(setOperator(operator)),
		mathOperation: () => dispatch(mathOperation()),
	}
}

export default connect(null, mapDispatchToProps)(KeypadClass)
