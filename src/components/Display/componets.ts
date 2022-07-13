import styled from 'styled-components/macro'
import theme from '@styles/theme'

export const DisplayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 130px;
	width: 100%;
	padding: 10px 30px;
	border-bottom: 2px solid ${theme.colors.midGrey};
`

export const ExpressionField = styled.p`
	${theme.fontSizes.font30}
	color: ${theme.colors.midGrey};
	text-align: right;
`

export const UserValueField = styled.h2`
	${theme.fontSizes.font64}
	color: ${theme.colors.black};
	text-align: right;
`
