import theme from '@styles/theme'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: center;
	padding: 42px 32px;
	background-color: ${({ theme }) => theme.headerColor};
	height: 120px;
	width: 100%;
	color: ${({ theme }) => theme.textColorHeader};

	@media (max-width: 700px) {
		padding: 42px 15px;
		display: flex;
		align-items: center;
	}
	@media (max-width: 570px) {
		padding: 42px 15px;
	}
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

	@media (max-width: 570px) {
		margin-right: 10px;
	}

	&:last-child {
		margin-right: 0;
	}

	&.active {
		border-bottom: 2px solid ${({ theme }) => theme.textColorHeader};
		color: ${({ theme }) => theme.textColorHeader};
	}
`
