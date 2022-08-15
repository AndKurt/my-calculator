import { Dispatch } from 'react';

import { OPERATOR } from '@constants/operators';
import { setCurrentValue, removeLastChar, resetAll, swapSignValue, mathOperation } from '@redux/reducers/calculator';
import { AnyAction } from 'redux';

export const activateDispatchByKeypad = (buttonValue: string, dispatch: Dispatch<AnyAction>) => {
	switch (buttonValue) {
		case OPERATOR.REMOVE_LAST:
			dispatch(removeLastChar());
			break;
		case OPERATOR.DOT:
			dispatch(setCurrentValue(OPERATOR.DOT));
			break;
		case OPERATOR.REMOVE_ALL:
			dispatch(resetAll());
			break;
		case OPERATOR.SWAP_SIGN:
			dispatch(swapSignValue());
			break;
		case OPERATOR.EQUAL:
			dispatch(mathOperation());
			break;
		default:
			dispatch(setCurrentValue(buttonValue));
			break;
	}
};
