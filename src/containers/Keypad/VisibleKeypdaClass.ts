import { connect } from 'react-redux';

import { KeypadClass } from '@components/Keypad';
import { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation } from '@redux/reducers/calculator';
import { AppDispatch } from '@redux/store';

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setCurrentValue: (num) => dispatch(setCurrentValue(num)),
    removeLastChar: () => dispatch(removeLastChar()),
    resetAll: () => dispatch(resetAll()),
    swapSignValue: () => dispatch(swapSignValue()),
    mathOperation: () => dispatch(mathOperation()),
  };
};

export default connect(null, mapDispatchToProps)(KeypadClass);
