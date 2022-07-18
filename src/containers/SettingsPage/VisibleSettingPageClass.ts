import { connect } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { resetAll } from '@redux/reducers/calculator'
import { SettingsPageClass } from '@screens/SettingsPage'

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		resetAll: () => dispatch(resetAll()),
	}
}

export default connect(null, mapDispatchToProps)(SettingsPageClass)
