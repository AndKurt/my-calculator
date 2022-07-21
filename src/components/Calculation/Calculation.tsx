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
		<ErrorBoundary>
			<CalculationWrapper>
				<CalculationHelper data-cy="calc-helper" className={isShowHistory ? 'active' : ''}>
					<Display />
					<Keypad />
				</CalculationHelper>
				<HistoryHelper data-cy="history-helper" className={isShowHistory ? 'active' : ''}>
					<ControlPanel isShowHistory={isShowHistory} handleShowHistory={handleShowHistory} />
					<History isShowHistory={isShowHistory} />
				</HistoryHelper>
			</CalculationWrapper>
		</ErrorBoundary>
	)
}
