import theme from '@styles/theme'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: center;
	padding: 42px 32px;
	background-color: ${theme.colors.darkGrey};
	height: 120px;
	width: 100%;
	color: ${theme.colors.white};
`

export const HeaderContainer = styled.header`
	${theme.fontSizes.font32}
	display: flex;
	justify-content: space-between;
	max-width: 1920px;
	width: 100%;
`

export const NavigationBtn = styled(NavLink)`
	margin-right: 32px;
	text-decoration: none;
	color: ${theme.colors.midGrey};
	${theme.fontSizes.font32}
	cursor: pointer;

	&:last-child {
		margin-right: 0;
	}

	&.active {
		border-bottom: 2px solid ${theme.colors.white};
		color: ${theme.colors.white};
	}
`
