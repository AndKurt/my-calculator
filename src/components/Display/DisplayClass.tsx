import { store } from '@App/App'
import React, { Component } from 'react'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'

interface IDisplay {
	currentValue: string;
	expression: string;
}

export class DisplayClass extends Component<
	IDisplay,
	IDisplay
> {
	constructor(props: IDisplay) {
		super(props)

		this.state = {
			currentValue: '0',
			expression: '',
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				currentValue: this.props.currentValue,
				expression: this.props.expression,
			})
		})
	}

	render() {
		const { currentValue, expression } = this.props

		return (
			<DisplayWrapper>
				<UserValueField>{currentValue}</UserValueField>
				<ExpressionField>{expression}</ExpressionField>
			</DisplayWrapper>
		)
	}
}
