import React from 'react';

import { useAppSelector } from '@redux/hooks/hooks';

import { DisplayWrapper, ExpressionField, UserValueField } from './componets';

export const Display = () => {
  const { currentValue, expression } = useAppSelector((state) => state.calculatorReducer);

  return (
    <DisplayWrapper data-cy="display">
      <UserValueField>{currentValue}</UserValueField>
      <ExpressionField>{expression}</ExpressionField>
    </DisplayWrapper>
  );
};
