import React, { Fragment, useState } from 'react'
import { Header } from '@components/Header'
import { Router } from '@components/Router'
import { GlobalStyles } from '@styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from '@styles/theme'
import { getDataFromLS } from '@utils/localStorageFunc'
import { Provider } from 'react-redux'
import { setupStore } from '@redux/store'
import { THEME } from '@constants/operators'

export const store = setupStore()

export const App = () => {
	const [theme, setTheme] = useState < string > (() => getDataFromLS('theme', THEME.LIGHT))

	const handleChangeTheme = (theme: string) => setTheme(theme)

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme === THEME.LIGHT ? themeLight : themeDark}>
				<Header />
				<Router handleChangeTheme={handleChangeTheme} />
				<GlobalStyles />
			</ThemeProvider>
		</Provider>
	)
}
