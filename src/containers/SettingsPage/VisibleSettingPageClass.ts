import { connect } from 'react-redux';

import { clearHistory } from '@redux/reducers/calculator';
import { AppDispatch } from '@redux/store';
import { SettingsPageClass } from '@screens/SettingsPage';

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    clearHistory: () => dispatch(clearHistory()),
  };
};

export default connect(null, mapDispatchToProps)(SettingsPageClass);
