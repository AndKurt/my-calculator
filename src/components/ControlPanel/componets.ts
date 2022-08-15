import styled from 'styled-components/macro';

export const ControlPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShowHistoryBtn = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.buttonColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 25px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 100px;
`;
