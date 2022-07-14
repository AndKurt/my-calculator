import { IControlPanelProps } from '@interfaces/props'
import React from 'react'
import {
	ControlPanelWrapper,
	ShowHistoryBtn,
} from './componets'

export const ControlPanel = ({
	isShowHistory,
	handleShowHistory,
}: IControlPanelProps) => {
	return (
		<ControlPanelWrapper>
			<ShowHistoryBtn onClick={handleShowHistory}>
				{isShowHistory ? 'Hide' : 'Show'}
			</ShowHistoryBtn>
		</ControlPanelWrapper>
	)
}
