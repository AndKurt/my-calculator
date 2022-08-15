import React, { MouseEvent } from 'react'

import { keypadBtns, keypadSpecBtns } from '@constants/keypadBtns'
import { useAppDispatch } from '@redux/hooks/hooks'
import { activateDispatchByKeypad } from '@utils/activateDispatch'
import { BtnsCommonContainer, BtnsSpecContainer, CommonBtn, KeyPadWrapper, SpecBtn } from './componets'

export const Keypad = () => {
  const dispatch = useAppDispatch()

  const handelClick = (e: MouseEvent<HTMLElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value
    if (buttonValue) {
      activateDispatchByKeypad(buttonValue, dispatch)
    }
  }

  return (
    <KeyPadWrapper onClick={handelClick} data-cy="keypad">
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
  )
}
