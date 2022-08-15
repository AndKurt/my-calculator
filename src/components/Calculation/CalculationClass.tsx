import React, { Component } from 'react';

import { ControlPanelClass } from '@components/ControlPanel';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { VisibleDisplayClass } from '@containers/Display';
import { VisibleHistoryClass } from '@containers/History';
import { VisibleKeypdaClass } from '@containers/Keypad';

import { CalculationHelper, CalculationWrapper, HistoryHelper } from './componets';

interface IHistoryState {
  isShow: boolean;
}

export class CalculationClass extends Component<Record<string, unknown>, IHistoryState> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handleShowHistory = () =>
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));

  render() {
    const isShowHistory = this.state.isShow;

    return (
      <ErrorBoundary>
        <CalculationWrapper>
          <CalculationHelper data-cy="calc-helper" isShowHistory={isShowHistory}>
            <VisibleDisplayClass />
            <VisibleKeypdaClass />
          </CalculationHelper>
          <HistoryHelper data-cy="history-helper" isShowHistory={isShowHistory}>
            <ControlPanelClass isShowHistory={isShowHistory} handleShowHistory={this.handleShowHistory} />
            <VisibleHistoryClass isShowHistory={isShowHistory} />
          </HistoryHelper>
        </CalculationWrapper>
      </ErrorBoundary>
    );
  }
}

export default CalculationClass;
