import React, { useEffect, useMemo } from 'react';

import { IHistoryProps } from '@interfaces/props';
import { useAppSelector } from '@redux/hooks/hooks';

import { HistoryList, HistoryWrapper, ListItem } from './componets';

export const History = ({ isShowHistory }: IHistoryProps) => {
  const { arrayExpressions } = useAppSelector((state) => state.calculatorReducer);
  const memoList = useMemo(
    () =>
      arrayExpressions?.map((item: string, index) => (
        <ListItem key={item + index} isShowHistory={isShowHistory}>
          {item}
        </ListItem>
      )),
    [isShowHistory, arrayExpressions]
  );

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(arrayExpressions));
  }, [arrayExpressions]);

  return (
    <HistoryWrapper data-cy="history">
      <h2>History</h2>
      <HistoryList isShowHistory={isShowHistory}>{memoList}</HistoryList>
    </HistoryWrapper>
  );
};
