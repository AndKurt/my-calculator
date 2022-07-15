import { RootState } from '../../redux/store'
import { store } from '@App/App'
import React, { Component } from 'react'
import {
	HistoryList,
	HistoryWrapper,
	ListItem,
} from './componets'
import { connect } from 'react-redux'

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
	arrayExpressions: string[];
}

export class HistoryClass extends Component<IHistoryProps> {
	constructor(props: IHistoryProps) {
		super(props)

		this.state = {
			arrayExpressions: [],
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				arrayExpressions: this.props.arrayExpressions,
			})
		})
	}

	render() {
		const { isShowHistory, arrayExpressions } = this.props
		return (
			<HistoryWrapper
				className={isShowHistory ? 'active' : ''}>
				<h2>History</h2>
				<HistoryList
					className={!isShowHistory ? 'active' : ''}>
					{arrayExpressions.length > 0 &&
						arrayExpressions.map((item: string) => (
							<ListItem
								key={item}
								className={!isShowHistory ? 'active' : ''}>
								{item}
							</ListItem>
						))}
				</HistoryList>
			</HistoryWrapper>
		)
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		arrayExpressions:
			state.calculatorReducer.arrayExpressions,
	}
}

export default connect(mapStateToProps)(HistoryClass)
