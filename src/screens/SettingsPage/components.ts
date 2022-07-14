import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const SettingsWrapper = styled.main`
	display: flex;
	justify-content: center;
`

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1920px;
	width: 100%;
	padding: 61px 84px;
	color: ${({ theme }) => theme.textColor};

	& h2 {
		${theme.fontSizes.font64}
		margin-bottom: 42px;
	}

	& h3 {
		font-size: 24px;
		line-height: 29px;
		font-weight: bold;
	}
`

export const Select = styled.select`
	${theme.fontSizes.font30}
	border: 2px solid ${({ theme }) => theme.borderColor};
	background: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.textColor};
	display: flex;
	align-items: center;
	padding: 0 28px;
	width: 401px;
	height: 93px;
	border-radius: 8px;
	cursor: pointer;
	margin-bottom: 32px;
	outline: none;

	option {
		${theme.fontSizes.font30}
		display: flex;
		height: 93px;
		padding: 0 28px;
	}
`

export const ClearBtn = styled.button`
	${theme.fontSizes.font30}
	border: 2px solid ${({ theme }) => theme.borderColor};
	background: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.textColor};
	display: flex;
	padding: 28px;
	width: 401px;
	height: 93px;
	border-radius: 8px;
	cursor: pointer;
`
