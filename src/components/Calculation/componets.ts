import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const CalculationWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`

export const CalculationHelper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 92%;
	padding: 0 23px;
	border-right: 2px solid
		${({ theme }) => theme.borderColor};
	transition: 0.5s;

	&.active {
		width: 80%;
	}
`

export const HistoryHelper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 8%;
	transition: 0.5s;

	&.active {
		width: 20%;
	}
`
