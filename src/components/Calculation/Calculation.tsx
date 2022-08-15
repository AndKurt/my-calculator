import React, { useState } from 'react';

import { ControlPanel } from '@components/ControlPanel';
import { Display } from '@components/Display';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { History } from '@components/History';
import { Keypad } from '@components/Keypad';

import { CalculationHelper, CalculationWrapper, HistoryHelper } from './componets';

export const Calculation = () => {
  const [isShowHistory, setIsShowHistory] = useState(true);

  const handleShowHistory = () => setIsShowHistory((prevState) => !prevState);

  return (
    <ErrorBoundary>
      <CalculationWrapper>
        <CalculationHelper data-cy="calc-helper" isShowHistory={isShowHistory}>
          <Display />
          <Keypad />
        </CalculationHelper>
        <HistoryHelper data-cy="history-helper" isShowHistory={isShowHistory}>
          <ControlPanel isShowHistory={isShowHistory} handleShowHistory={handleShowHistory} />
          <History isShowHistory={isShowHistory} />
        </HistoryHelper>
      </CalculationWrapper>
    </ErrorBoundary>
  );
};
