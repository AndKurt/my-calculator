import { IControlPanelProps } from '@interfaces/props'
import React from 'react'
import { ControlPanelWrapper, ShowHistoryBtn } from './componets'

export const ControlPanel = ({ isShowHistory, handleShowHistory }: IControlPanelProps) => {
	return (
		<ControlPanelWrapper data-cy="control-panel">
			<ShowHistoryBtn data-cy="toggle-history" onClick={handleShowHistory}>
				{isShowHistory ? 'Hide' : 'Show'}
			</ShowHistoryBtn>
		</ControlPanelWrapper>
	)
}
