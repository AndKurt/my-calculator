import { createGlobalStyle } from 'styled-components/macro'
import HelveticaNeue from '../assets/fonts/HelveticaNeue.ttf'

import theme from './theme'

interface IGlobalStyle {
	[key: string]: string;
}

export const GlobalStyles =
	createGlobalStyle <
	{ theme: IGlobalStyle } >
	`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeue}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.bodyColor};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.borderColor};
    border: 1px solid $blue;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: $blue;
  }
`
