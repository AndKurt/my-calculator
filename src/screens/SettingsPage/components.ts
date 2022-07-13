import styled from 'styled-components'
import theme from '@styles/theme'

export const SettingsWrapper = styled.main`
	display: flex;
	justify-content: center;
`

export const SettingsContainer = styled.div`
	display: flex;
	max-width: 1920px;
	width: 100%;
	padding: 20px;

	& h2 {
		${theme.fontSizes.font64}
	}
`
