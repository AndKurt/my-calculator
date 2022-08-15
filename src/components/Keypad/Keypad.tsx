import React, { MouseEvent, useMemo } from 'react';

import { keypadBtns, keypadSpecBtns } from '@constants/keypadBtns';
import { useAppDispatch } from '@redux/hooks/hooks';
import { activateDispatchByKeypad } from '@utils/activateDispatch';

import { BtnsCommonContainer, BtnsSpecContainer, CommonBtn, KeyPadWrapper, SpecBtn } from './componets';

export const Keypad = () => {
  const dispatch = useAppDispatch();

  const memoKeypadSpecBtns = useMemo(
    () =>
      keypadSpecBtns.map(({ view }) => (
        <SpecBtn key={view} value={view} data-cy={`calc-btn-${view}`}>
          {view}
        </SpecBtn>
      )),
    [keypadSpecBtns]
  );

  const memoKeypadBtns = useMemo(
    () =>
      keypadBtns.map(({ view }) => (
        <CommonBtn key={view} value={view} data-cy={`calc-btn-${view}`}>
          {view}
        </CommonBtn>
      )),
    [keypadBtns]
  );

  const handelClick = (e: MouseEvent<HTMLElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value;
    if (buttonValue) {
      activateDispatchByKeypad(buttonValue, dispatch);
    }
  };

  return (
    <KeyPadWrapper onClick={handelClick} data-cy="keypad">
      <BtnsCommonContainer>{memoKeypadBtns}</BtnsCommonContainer>
      <BtnsSpecContainer>{memoKeypadSpecBtns}</BtnsSpecContainer>
    </KeyPadWrapper>
  );
};
