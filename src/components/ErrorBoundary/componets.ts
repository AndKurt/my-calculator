import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const ErrorMessage = styled.h3`
	${theme.fontSizes.font30}
	color: ${({ theme }) => theme.textColor};
	text-align: center;
`
