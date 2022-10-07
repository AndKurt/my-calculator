import styled, { css } from 'styled-components/macro'

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
	@media (max-width: 820px) {
		height: 95px;
		width: 95px;
		border-radius: 20px;
	}
	@media (max-width: 725px) {
		height: 80px;
		width: 80px;
	}
	@media (max-width: 630px) {
		height: 70px;
		width: 70px;
	}
	@media (max-width: 570px) {
		height: 65px;
		width: 65px;
		border-radius: 10px;
	}
	@media (max-width: 500px) {
		height: 62px;
		width: 62px;
	}
	@media (max-width: 470px) {
		height: 55px;
		width: 55px;
	}
	@media (max-width: 425px) {
		height: 47px;
		width: 47px;
	}
	@media (max-width: 380px) {
		height: 40px;
		width: 40px;
	}
	@media (max-width: 350px) {
		height: 35px;
		width: 35px;
	}
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
