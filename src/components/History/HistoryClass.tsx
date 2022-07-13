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
	'218 / 7',
	'55 + 70',
	'55 + 76',
	'55 * 74',
	'216 / 7',
	'5a5 + 76',
	'5d5 + 7',
	'dasd / 7',
	'5asd5 + 7',
	'5d5 + 76',
	'5g5 * 74',
	'2as1 / 7',
	'55 + 73',
	'5z5 + 7',
	'5c5 * 7',
	'2v1 / 4567',
	'55 + 78',
	'5ba5 + 7456',
	'55 * 467',
	'21 / 7a',
	'5c5 + 7',
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
