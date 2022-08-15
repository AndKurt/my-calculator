import { connect } from 'react-redux'

import { HistoryClass } from '@components/History'
import { RootState } from '@redux/store'

const mapStateToProps = (state: RootState) => {
  return {
    arrayExpressions: state.calculatorReducer.arrayExpressions,
  }
}

export default connect(mapStateToProps)(HistoryClass)
