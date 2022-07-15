import React, { Component } from 'react'
import { ControlPanelClass } from '@components/ControlPanel'
import { VisibleDisplayClass } from '@containers/Display'
import {
	CalculationHelper,
	CalculationWrapper,
	HistoryHelper,
} from './componets'
import { VisibleKeypdaClass } from '@containers/Keypad'
import { VisibleHistoryClass } from '@containers/History'

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
			isShow: true,
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
					<VisibleDisplayClass />
					<VisibleKeypdaClass />
				</CalculationHelper>
				<HistoryHelper
					className={isShowHistory ? 'active' : ''}>
					<ControlPanelClass
						isShowHistory={isShowHistory}
						handleShowHistory={this.HandleShowHistory}
					/>
					<VisibleHistoryClass
						isShowHistory={isShowHistory}
					/>
				</HistoryHelper>
			</CalculationWrapper>
		)
	}
}

export default CalculationClass
