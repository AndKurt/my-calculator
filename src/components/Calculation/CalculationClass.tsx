import { DisplayClass } from '@components/Display'
import { HistoryClass } from '@components/History'
import { KeypadClass } from '@components/Keypad'
import React, { Component } from 'react'
import {
	CalculationHelper,
	CalculationWrapper,
} from './componets'

interface IHistoryState {
	isShow: boolean;
}

export class CalculationClass extends Component<
	{},
	IHistoryState
> {
	constructor(props: IHistoryState) {
		super(props)

		this.state = {
			isShow: false,
		}
	}

	HandleShowHistory = () =>
		this.setState((prevState) => ({
			isShow: !prevState.isShow,
		}))

	render() {
		const isShowHistory = this.state.isShow

		return (
			<CalculationWrapper>
				<CalculationHelper
					className={isShowHistory ? 'active' : ''}>
					<DisplayClass />
					<KeypadClass />
				</CalculationHelper>
				<HistoryClass
					isShowHistory={isShowHistory}
					HandleShowHistory={this.HandleShowHistory}
				/>
			</CalculationWrapper>
		)
	}
}

export default CalculationClass
