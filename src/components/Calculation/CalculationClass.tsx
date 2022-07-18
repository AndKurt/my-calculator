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
			<CalculationWrapper>
				<CalculationHelper data-cy="calc-helper" className={isShowHistory ? 'active' : ''}>
					<ErrorBoundary errorText={'Display failed to load.'} children={<VisibleDisplayClass />}></ErrorBoundary>
					<ErrorBoundary errorText={'Keypad failed to load.'} children={<VisibleKeypdaClass />}></ErrorBoundary>
				</CalculationHelper>
				<HistoryHelper data-cy="history-helper" className={isShowHistory ? 'active' : ''}>
					<ErrorBoundary
						errorText={'Control panel failed to load.'}
						children={
							<ControlPanelClass isShowHistory={isShowHistory} handleShowHistory={this.handleShowHistory} />
						}></ErrorBoundary>
					<ErrorBoundary
						errorText={'History failed to load.'}
						children={<VisibleHistoryClass isShowHistory={isShowHistory} />}></ErrorBoundary>
				</HistoryHelper>
			</CalculationWrapper>
		)
	}
}

export default CalculationClass
