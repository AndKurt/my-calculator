//import { historyListData } from '@mock/historyList'
import React, { Component } from 'react'
import {
	HistoryList,
	HistoryWrapper,
	ListItem,
	ShowHistoryBtn,
} from './componets'

const historyListData = [
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
	'55 + 7',
	'55 * 7',
	'21 / 7',
	'55 + 7',
]

export interface IHistoryProps {
	isShowHistory: boolean;
	HandleShowHistory: () => void;
}

export class HistoryClass extends Component<IHistoryProps> {
	render() {
		return (
			<HistoryWrapper
				className={
					this.props.isShowHistory ? 'active' : ''
				}>
				<h2>History</h2>
				<ShowHistoryBtn
					onClick={this.props.HandleShowHistory}>
					{this.props.isShowHistory ? 'Hide' : 'Show'}
				</ShowHistoryBtn>
				<HistoryList
					className={
						!this.props.isShowHistory ? 'active' : ''
					}>
					{historyListData.map((item: string) => (
						<ListItem
							key={item}
							className={
								!this.props.isShowHistory ? 'active' : ''
							}>
							{item}
						</ListItem>
					))}
				</HistoryList>
			</HistoryWrapper>
		)
	}
}

export default HistoryClass
