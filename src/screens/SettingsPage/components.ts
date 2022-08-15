import theme from '@styles/theme';
import styled from 'styled-components/macro';

export const SettingsWrapper = styled.main`
	display: flex;
	justify-content: center;
`;

export const SettingsContainer = styled.div`
	color: ${({ theme }) => theme.textColor};
	display: flex;
	flex-direction: column;
	max-width: 1920px;
	padding: 61px 84px;
	width: 100%;

	& h2 {
		${theme.fontSizes.font64}
		margin-bottom: 42px;
	}

	& h3 {
		font-size: 24px;
		font-weight: bold;
		line-height: 29px;
	}

	@media (max-width: 570px) {
		padding: 45px 10px;
	}
`;

export const Select = styled.select`
	${theme.fontSizes.font30}
	align-items: center;
	background: ${({ theme }) => theme.buttonColor};
	border: 2px solid ${({ theme }) => theme.borderColor};
	border-radius: 8px;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
	display: flex;
	height: 93px;
	margin-bottom: 32px;
	outline: none;
	padding: 0 28px;
	width: 401px;

	@media (max-width: 570px) {
		width: 300px;
		height: 65px;
	}

	option {
		${theme.fontSizes.font30}
		display: flex;
		height: 93px;
		padding: 0 28px;
	}
`;

export const ClearBtn = styled.button`
	${theme.fontSizes.font30}
	background: ${({ theme }) => theme.buttonColor};
	border: 2px solid ${({ theme }) => theme.borderColor};
	border-radius: 8px;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
	display: flex;
	height: 93px;
	padding: 28px;
	width: 401px;

	@media (max-width: 570px) {
		width: 300px;
		height: 65px;
	}
`;
