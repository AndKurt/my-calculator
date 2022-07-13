import { DisplayClass } from '@components/Display'
import { KeypadClass } from '@components/Keypad'
import React, { Component } from 'react'
import {
	CalculationHelper,
	CalculationWrapper,
} from './componets'

export class CalculationClass extends Component {
	render() {
		return (
			<CalculationWrapper>
				<CalculationHelper>
					<DisplayClass />
					<KeypadClass />
				</CalculationHelper>
			</CalculationWrapper>
		)
	}
}

export default CalculationClass
