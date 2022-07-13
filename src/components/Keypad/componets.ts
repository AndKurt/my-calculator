import styled, { css } from 'styled-components'
import theme from '@styles/theme'

export const KeyPadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 600px;
	height: 100%;
`

const btnTemplate = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 110px;
	width: 110px;
	border-radius: 32px;
	border: 2px solid ${theme.colors.darkGrey};
	background: ${theme.colors.lightGrey};
	color: ${theme.colors.black};
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
