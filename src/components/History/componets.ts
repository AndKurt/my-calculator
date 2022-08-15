import theme from '@styles/theme';
import styled from 'styled-components/macro';

interface IProps {
  isShowHistory: boolean;
}

export const HistoryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  & h2 {
    color: ${({ theme }) => theme.textColor};
    ${theme.fontSizes.font32}
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const HistoryList = styled.ul<IProps>`
  margin-top: 20px;
  max-height: 650px;
  opacity: ${({ isShowHistory }) => (!isShowHistory ? 1 : 0)};
  overflow: auto;
  transition: 0.5s;
  width: 100%;
`;

export const ListItem = styled.li<IProps>`
  color: ${({ theme }) => theme.textColor};
  list-style: none;
  margin-top: 20px;
  opacity: ${({ isShowHistory }) => (!isShowHistory ? 1 : 0)};
  transition: 0.5s;
  width: 100%;
  ${theme.fontSizes.font30}
`;
