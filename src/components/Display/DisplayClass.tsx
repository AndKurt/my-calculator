import { store } from '@App/App'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'
import { RootState } from '../../redux/store'

interface IDisplay {
	currentValue: string;
	expression: string;
}

class DisplayClass extends Component<IDisplay, IDisplay> {
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

const mapStateToProps = (state: RootState) => {
	return {
		currentValue: state.calculatorReducer.currentValue,
		expression:
			state.calculatorReducer.expression.join(' '),
	}
}

export default connect(mapStateToProps)(DisplayClass)
