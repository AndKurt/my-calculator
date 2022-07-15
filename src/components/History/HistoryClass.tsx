import { RootState } from '../../redux/store'
import { store } from '@App/App'
import React, { Component } from 'react'
import {
	HistoryList,
	HistoryWrapper,
	ListItem,
} from './componets'
import { connect } from 'react-redux'

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
