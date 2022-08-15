import theme from '@styles/theme';
import styled from 'styled-components/macro';

export const DisplayWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 10px 30px;
  width: 100%;
`;

export const ExpressionField = styled.p`
  ${theme.fontSizes.font30}
  color: ${theme.colors.midGrey};
  text-align: right;
`;

export const UserValueField = styled.h2`
  ${theme.fontSizes.font64}
  color: ${({ theme }) => theme.textColor};
  text-align: right;
`;
