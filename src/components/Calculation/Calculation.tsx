import { ControlPanel } from '@components/ControlPanel'
import { Display } from '@components/Display'
import { Keypad } from '@components/Keypad'
import { History } from '@components/History'
import React, { useState } from 'react'
import { CalculationHelper, CalculationWrapper, HistoryHelper } from './componets'
import { ErrorBoundary } from '@components/ErrorBoundary'

export const Calculation = () => {
	const [isShowHistory, setIsShowHistory] = useState(true)

	const handleShowHistory = () => setIsShowHistory((prevState) => !prevState)

	return (
		<CalculationWrapper>
			<CalculationHelper data-cy="calc-helper" className={isShowHistory ? 'active' : ''}>
				<ErrorBoundary errorText={'Display failed to load.'} children={<Display />}></ErrorBoundary>
				<ErrorBoundary errorText={'Keypad failed to load.'} children={<Keypad />}></ErrorBoundary>
			</CalculationHelper>
			<HistoryHelper data-cy="history-helper" className={isShowHistory ? 'active' : ''}>
				<ErrorBoundary
					errorText={'Control panel failed to load.'}
					children={
						<ControlPanel isShowHistory={isShowHistory} handleShowHistory={handleShowHistory} />
					}></ErrorBoundary>
				<ErrorBoundary
					errorText={'History failed to load.'}
					children={<History isShowHistory={isShowHistory} />}></ErrorBoundary>
			</HistoryHelper>
		</CalculationWrapper>
	)
}
