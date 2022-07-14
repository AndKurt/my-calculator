import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const HistoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 8%;
	padding: 0 15px;
	transition: 0.5s;

	&.active {
		width: 20%;
	}

	& h2 {
		text-align: center;
		${theme.fontSizes.font32}
		color: ${({ theme }) => theme.textColor};
		margin-bottom: 10px;
	}
`

export const ShowHistoryBtn = styled.button`
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	border-radius: 25px;
	border: 2px solid ${({ theme }) => theme.borderColor};
	background: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
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
