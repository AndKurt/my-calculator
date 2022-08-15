import React, { Component } from 'react'

import { IControlPanelProps } from '@interfaces/props'
import { ControlPanelWrapper, ShowHistoryBtn } from './componets'

export class ControlPanelClass extends Component<IControlPanelProps> {
  render() {
    const { isShowHistory, handleShowHistory } = this.props
    return (
      <ControlPanelWrapper data-cy="control-panel">
        <ShowHistoryBtn data-cy="toggle-history" onClick={handleShowHistory}>
          {!isShowHistory ? 'Hide' : 'Show'}
        </ShowHistoryBtn>
      </ControlPanelWrapper>
    )
  }
}

export default ControlPanelClass
