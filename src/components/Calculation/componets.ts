import styled from 'styled-components/macro'

interface IProps {
  isShowHistory: boolean
}

export const CalculationWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const CalculationHelper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: ${({ isShowHistory }) => (isShowHistory ? '92% ' : '80% ')};
  padding: 0 23px;
  border-right: 2px solid ${({ theme }) => theme.borderColor};
  transition: 0.5s;

  @media (max-width: 570px) {
    padding: 0 5px;
    width: ${({ isShowHistory }) => (isShowHistory ? '85% ' : '70% ')};
  }
`

export const HistoryHelper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  width: ${({ isShowHistory }) => (isShowHistory ? '8% ' : '20% ')};
  transition: 0.5s;

  @media (max-width: 570px) {
    width: ${({ isShowHistory }) => (isShowHistory ? '15% ' : '30% ')};
  }
`
