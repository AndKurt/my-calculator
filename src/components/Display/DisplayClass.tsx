import { store } from '@App/App'
import { IDisplayProps } from '@interfaces/props'
import { IDisplayState } from '@interfaces/state'
import React, { Component } from 'react'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'

export class DisplayClass extends Component<
	IDisplayProps,
	IDisplayState
> {
	constructor(props: IDisplayProps) {
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