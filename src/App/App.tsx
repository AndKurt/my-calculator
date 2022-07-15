import React, { Fragment, useState } from 'react'
import { Header } from '@components/Header'
import { Router } from '@components/Router'
import { GlobalStyles } from '@styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from '@styles/theme'
import { getThemeFromLS } from '@utils/localStorageFunc'
import { Provider } from 'react-redux'
import { setupStore } from '@redux/store'

export const store = setupStore()

export const App = () => {
	const [theme, setTheme] = useState(() => getThemeFromLS())

	const handleChangeTheme = (theme: string) =>
		setTheme(theme)

	return (
		<Provider store={store}>
			<ThemeProvider
				theme={
					theme === 'themeLight' ? themeLight : themeDark
				}>
				<Header />
				<Router handleChangeTheme={handleChangeTheme} />
				<GlobalStyles />
			</ThemeProvider>
		</Provider>
	)
}
