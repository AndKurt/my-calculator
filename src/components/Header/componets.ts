import { NavLink } from 'react-router-dom';

import theme from '@styles/theme';
import styled from 'styled-components/macro';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColorHeader};
  display: flex;
  height: 120px;
  justify-content: center;
  padding: 42px 32px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 42px 15px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 570px) {
    padding: 42px 15px;
  }
`;

export const HeaderContainer = styled.header`
  ${theme.fontSizes.font32}
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  width: 100%;
`;

export const NavigationBtn = styled(NavLink)`
  color: ${theme.colors.midGrey};
  cursor: pointer;
  margin-right: 32px;
  ${theme.fontSizes.font32}
  text-decoration: none;

  @media (max-width: 570px) {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.textColorHeader};
    color: ${({ theme }) => theme.textColorHeader};
  }
`;
