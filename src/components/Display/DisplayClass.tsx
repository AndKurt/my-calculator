import { store } from '@App/App'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { ICalculatorStore } from '../../redux/reducers/calculator'
import {
	DisplayWrapper,
	ExpressionField,
	UserValueField,
} from './componets'
import { RootState } from '../../redux/store'

interface IDisplay {
	currentValue: number;
	expression: string;
}

class DisplayClass extends Component<IDisplay, IDisplay> {
	constructor(props: IDisplay) {
		super(props)

		this.state = {
			currentValue: 0,
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
				<ExpressionField>{expression}</ExpressionField>
				<UserValueField>{currentValue}</UserValueField>
			</DisplayWrapper>
		)
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		currentValue: state.calculatorReducer.currentValue,
		expression: state.calculatorReducer.expression,
	}
}

export default connect(mapStateToProps)(DisplayClass)
