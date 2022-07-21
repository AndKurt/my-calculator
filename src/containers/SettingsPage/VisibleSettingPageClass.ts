import { connect } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { clearHistory } from '@redux/reducers/calculator'
import { SettingsPageClass } from '@screens/SettingsPage'

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		clearHistory: () => dispatch(clearHistory()),
	}
}

export default connect(null, mapDispatchToProps)(SettingsPageClass)
