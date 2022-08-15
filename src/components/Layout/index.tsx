import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@components/Header';
import { Router } from '@components/Router';
import { THEME } from '@constants/operators';
import { GlobalStyles } from '@styles/globalStyles';
import { themeDark, themeLight } from '@styles/theme';
import { getDataFromLS } from '@utils/localStorageFunc';

export const Layout = () => {
  const [theme, setTheme] = useState<string>(() => getDataFromLS('theme', THEME.LIGHT));
  const curretnTheme = theme === THEME.LIGHT ? themeLight : themeDark;

  const handleChangeTheme = (theme: string) => setTheme(theme);

  return (
    <ThemeProvider theme={curretnTheme}>
      <Header />
      <Router handleChangeTheme={handleChangeTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
