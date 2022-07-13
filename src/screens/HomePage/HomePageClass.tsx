import { CalculationClass } from '@components/Calculation'
import React, { Component } from 'react'
import { HomeContainer, HomeWrapper } from './components'

export class HomePageClass extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeContainer>
					<CalculationClass />
				</HomeContainer>
			</HomeWrapper>
		)
	}
}

export default HomePageClass
