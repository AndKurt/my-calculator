import React, { useEffect, useState } from 'react'

import { IHistoryProps } from '@interfaces/props'
import { HistoryList, HistoryWrapper, ListItem } from './componets'
import { useAppSelector } from '@redux/hooks/hooks'

export const History = ({ isShowHistory }: IHistoryProps) => {
  const { arrayExpressions } = useAppSelector((state) => state.calculatorReducer)

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(arrayExpressions))
  }, [arrayExpressions])

  return (
    <HistoryWrapper data-cy="history">
      <h2>History</h2>
      <HistoryList isShowHistory={isShowHistory}>
        {arrayExpressions &&
          arrayExpressions.map((item: string, index) => (
            <ListItem key={item + index} isShowHistory={isShowHistory}>
              {item}
            </ListItem>
          ))}
      </HistoryList>
    </HistoryWrapper>
  )
}
