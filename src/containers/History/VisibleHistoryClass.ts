import { HistoryClass } from '@components/History'
import { RootState } from '@redux/store'
import { connect } from 'react-redux'

const mapStateToProps = (state: RootState) => {
	return {
		arrayExpressions:
			state.calculatorReducer.arrayExpressions,
	}
}

export default connect(mapStateToProps)(HistoryClass)
