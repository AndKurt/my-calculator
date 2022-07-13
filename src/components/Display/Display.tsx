import React from 'react'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'

export const Display = () => {
	return (
		<DisplayWrapper>
			<ExpressionField>(55 + 1) + 7</ExpressionField>
			<UserValueField>55</UserValueField>
		</DisplayWrapper>
	)
}
