import { store } from '@App/App'
import { IHistoryProps } from '@interfaces/props'
import React, { Component } from 'react'
import { HistoryList, HistoryWrapper, ListItem } from './componets'

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

	componentDidUpdate() {
		localStorage.setItem('history', JSON.stringify(this.props.arrayExpressions))
	}

	render() {
		const { isShowHistory, arrayExpressions } = this.props
		return (
			<HistoryWrapper data-cy="history" className={isShowHistory ? 'active' : ''}>
				<h2>History</h2>
				<HistoryList className={!isShowHistory ? 'active' : ''}>
					{arrayExpressions &&
						arrayExpressions.map((item: string, index) => (
							<ListItem key={item + index} className={!isShowHistory ? 'active' : ''}>
								{item}
							</ListItem>
						))}
				</HistoryList>
			</HistoryWrapper>
		)
	}
}
