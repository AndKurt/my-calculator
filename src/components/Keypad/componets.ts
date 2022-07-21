import styled, { css } from 'styled-components/macro'
import theme from '@styles/theme'

export const KeyPadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	width: 100%;
	height: 100%;
`

const btnTemplate = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 110px;
	width: 110px;
	border-radius: 32px;
	border: 2px solid ${({ theme }) => theme.borderColor};
	background: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
`

export const BtnsCommonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	gap: 5px;
	margin: 10px 0;
`
export const CommonBtn = styled.button`
	${btnTemplate}
`
export const BtnsSpecContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 5px;
`

export const SpecBtn = styled.button`
	${btnTemplate}
	width: 300px;
`
