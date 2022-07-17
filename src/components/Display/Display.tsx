import { useAppSelector } from '@redux/hooks/hooks'
import React from 'react'
import { DisplayWrapper, ExpressionField, UserValueField } from './componets'

export const Display = () => {
	const { currentValue, expression } = useAppSelector((state) => state.calculatorReducer)

	return (
		<DisplayWrapper>
			<UserValueField>{currentValue}</UserValueField>
			<ExpressionField>{expression}</ExpressionField>
		</DisplayWrapper>
	)
}
