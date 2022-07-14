import React from 'react'
import { HomePage, HomePageClass } from '@screens/HomePage'
import { SettingsPage } from '@screens/SettingsPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
	HOME_PAGE_ROUTE,
	HOME_CLASS_PAGE_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@constants/router'
import { ChangeTheme } from '@interfaces/props'

export const Router = ({
	handleChangeTheme,
}: ChangeTheme) => {
	return (
		<Routes>
			<Route
				path={HOME_PAGE_ROUTE}
				element={<HomePage />}
			/>
			<Route
				path={HOME_CLASS_PAGE_ROUTE}
				element={<HomePageClass />}
			/>
			<Route
				path={SETTINGS_PAGE_ROUTE}
				element={
					<SettingsPage
						handleChangeTheme={handleChangeTheme}
					/>
				}
			/>
			<Route
				path="*"
				element={<Navigate to={HOME_PAGE_ROUTE} />}
			/>
		</Routes>
	)
}
