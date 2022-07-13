import styled from 'styled-components'
import theme from '@styles/theme'

export const CalculationWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 80%;
`

export const CalculationHelper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 100%;
	padding: 25px 23px;
	border-right: 2px solid ${theme.colors.midGrey};
`
