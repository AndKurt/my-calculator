import { IHistoryProps } from '@interfaces/props'
import { store } from '@redux/store'
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
}
