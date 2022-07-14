import { IControlPanelProps } from '@interfaces/props'
import React, { Component } from 'react'
import {
	ControlPanelWrapper,
	ShowHistoryBtn,
} from './componets'

export class ControlPanelClass extends Component<IControlPanelProps> {
	render() {
		const { isShowHistory, handleShowHistory } = this.props
		return (
			<ControlPanelWrapper>
				<ShowHistoryBtn onClick={handleShowHistory}>
					{isShowHistory ? 'Hide' : 'Show'}
				</ShowHistoryBtn>
			</ControlPanelWrapper>
		)
	}
}

export default ControlPanelClass
