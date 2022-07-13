import React, { Fragment } from 'react'
import { Header } from '@components/Header'
import { Router } from '@components/Router'
import { GlobalStyles } from '@styles/globalStyles'

export const App = () => {
	return (
		<Fragment>
			<Header />
			<Router />
			<GlobalStyles />
		</Fragment>
	)
}
