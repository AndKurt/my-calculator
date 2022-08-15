import styled from 'styled-components/macro';

interface IProps {
  isShowHistory: boolean;
}

export const CalculationWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const CalculationHelper = styled.div<IProps>`
  align-items: center;
  border-right: 2px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 0 23px;
  transition: 0.5s;
  width: ${({ isShowHistory }) => (isShowHistory ? '92% ' : '80% ')};

  @media (max-width: 570px) {
    padding: 0 5px;
    width: ${({ isShowHistory }) => (isShowHistory ? '85% ' : '70% ')};
  }
`;

export const HistoryHelper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  transition: 0.5s;
  width: ${({ isShowHistory }) => (isShowHistory ? '8% ' : '20% ')};

  @media (max-width: 570px) {
    width: ${({ isShowHistory }) => (isShowHistory ? '15% ' : '30% ')};
  }
`;
