import React, { Component } from 'react'
import { ControlPanelClass } from '@components/ControlPanel'
import { VisibleDisplayClass } from '@containers/Display'
import { CalculationHelper, CalculationWrapper, HistoryHelper } from './componets'
import { VisibleKeypdaClass } from '@containers/Keypad'
import { VisibleHistoryClass } from '@containers/History'
import { ErrorBoundary } from '@components/ErrorBoundary'

interface IHistoryState {
	isShow: boolean;
}

export class CalculationClass extends Component<{}, IHistoryState> {
	constructor(props) {
		super(props)
		this.state = {
			isShow: true,
		}
	}

	handleShowHistory = () =>
		this.setState((prevState) => ({
			isShow: !prevState.isShow,
		}))

	render() {
		const isShowHistory = this.state.isShow

		return (
			<ErrorBoundary>
				<CalculationWrapper>
					<CalculationHelper data-cy="calc-helper" className={isShowHistory ? 'active' : ''}>
						<VisibleDisplayClass />
						<VisibleKeypdaClass />
					</CalculationHelper>
					<HistoryHelper data-cy="history-helper" className={isShowHistory ? 'active' : ''}>
						<ControlPanelClass isShowHistory={isShowHistory} handleShowHistory={this.handleShowHistory} />
						<VisibleHistoryClass isShowHistory={isShowHistory} />
					</HistoryHelper>
				</CalculationWrapper>
			</ErrorBoundary>
		)
	}
}

export default CalculationClass
