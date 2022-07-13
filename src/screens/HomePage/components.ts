import styled from 'styled-components'
import theme from '@styles/theme'

export const HomeWrapper = styled.main`
	display: flex;
	justify-content: center;
`

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1920px;
	width: 100%;
	padding: 20px;

	& h1 {
		${theme.fontSizes.font64}
	}
`
