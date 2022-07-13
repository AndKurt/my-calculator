import React, { Component } from 'react'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'

export class DisplayClass extends Component {
	render() {
		return (
			<DisplayWrapper>
				<ExpressionField>(55 + 1) + 7</ExpressionField>
				<UserValueField>55</UserValueField>
			</DisplayWrapper>
		)
	}
}

export default DisplayClass
