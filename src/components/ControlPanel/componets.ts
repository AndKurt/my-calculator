import styled from 'styled-components/macro'

export const ControlPanelWrapper = styled.div`
	display: flex;
	justify-content: center;
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
