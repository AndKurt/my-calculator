import theme from '@styles/theme';
import styled from 'styled-components/macro';

export const HomeWrapper = styled.main`
	display: flex;
	justify-content: center;
`;

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1920px;
	padding: 20px;
	width: 100%;

	& h1 {
		${theme.fontSizes.font64}
	}
`;
