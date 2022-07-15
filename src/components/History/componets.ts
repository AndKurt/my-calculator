import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const HistoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 15px;

	& h2 {
		text-align: center;
		${theme.fontSizes.font32}
		color: ${({ theme }) => theme.textColor};
		margin-bottom: 10px;
	}
`

export const HistoryList = styled.ul`
	width: 100%;
	transition: 0.5s;
	opacity: 1;
	margin-top: 20px;
	max-height: 650px;
	overflow: auto;

	&.active {
		opacity: 0;
	}
`

export const ListItem = styled.li`
	width: 100%;
	list-style: none;
	transition: 0.5s;
	opacity: 1;
	margin-top: 20px;
	color: ${({ theme }) => theme.textColor};
	${theme.fontSizes.font30}

	&.active {
		opacity: 0;
	}
`
