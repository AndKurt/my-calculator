import { connect } from 'react-redux'
import { DisplayClass } from '@components/Display'
import { RootState } from '@redux/store'

const mapStateToProps = (state: RootState) => {
	return {
		currentValue: state.calculatorReducer.currentValue,
		expression: state.calculatorReducer.expression,
	}
}

export default connect(mapStateToProps)(DisplayClass)
