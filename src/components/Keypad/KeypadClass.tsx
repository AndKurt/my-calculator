import React, { MouseEvent, PureComponent } from 'react';

import { keypadBtns, keypadSpecBtns } from '@constants/keypadBtns';
import { OPERATOR } from '@constants/operators';
import { IKeyPadClassProps } from '@interfaces/props';

import { BtnsCommonContainer, BtnsSpecContainer, CommonBtn, KeyPadWrapper, SpecBtn } from './componets';

export class KeypadClass extends PureComponent<IKeyPadClassProps> {
  handelClick = (e: MouseEvent<HTMLElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value;
    if (buttonValue) {
      switch (buttonValue) {
        case OPERATOR.REMOVE_LAST:
          this.props.removeLastChar();
          break;
        case OPERATOR.DOT:
          this.props.setCurrentValue(OPERATOR.DOT);
          break;
        case OPERATOR.REMOVE_ALL:
          this.props.resetAll();
          break;
        case OPERATOR.SWAP_SIGN:
          this.props.swapSignValue();
          break;
        case OPERATOR.EQUAL:
          this.props.mathOperation();
          break;
        default:
          this.props.setCurrentValue(buttonValue);
          break;
      }
    }
  };

  render() {
    return (
      <KeyPadWrapper onClick={this.handelClick} data-cy="keypad">
        <BtnsCommonContainer>
          {keypadBtns.map(({ view }) => (
            <CommonBtn key={view} value={view} data-cy={`calc-btn-${view}`}>
              {view}
            </CommonBtn>
          ))}
        </BtnsCommonContainer>
        <BtnsSpecContainer>
          {keypadSpecBtns.map(({ view }) => (
            <SpecBtn key={view} value={view} data-cy={`calc-btn-${view}`}>
              {view}
            </SpecBtn>
          ))}
        </BtnsSpecContainer>
      </KeyPadWrapper>
    );
  }
}
