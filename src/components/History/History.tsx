import React from 'react'
import { IHistoryProps } from '@interfaces/props'
import { HistoryList, HistoryWrapper, ListItem } from './componets'
import { useAppSelector } from '@redux/hooks/hooks'

export const History = ({ isShowHistory }: IHistoryProps) => {
	const { arrayExpressions } = useAppSelector((state) => state.calculatorReducer)

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
