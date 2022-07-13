import React from 'react'
import {
	HOME_CLASS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@constants/router'
import {
	HeaderContainer,
	HeaderWrapper,
	NavigationBtn,
} from './componets'

const navBtnsData = [
	{ name: 'Home', path: HOME_PAGE_ROUTE },
	{ name: 'Home Class', path: HOME_CLASS_PAGE_ROUTE },
	{ name: 'Settings', path: SETTINGS_PAGE_ROUTE },
]

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				Calculator App
				<nav>
					{navBtnsData.map(({ name, path }) => (
						<NavigationBtn key={name} to={path}>
							{name}
						</NavigationBtn>
					))}
				</nav>
			</HeaderContainer>
		</HeaderWrapper>
	)
}
