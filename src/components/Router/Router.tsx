import React from 'react'
import { HomePage, HomePageClass } from '@screens/HomePage'
import { SettingsPage } from '@screens/SettingsPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
	HOME_PAGE_ROUTE,
	HOME_CLASS_PAGE_ROUTE,
	SETTINGS_PAGE_ROUTE,
} from '@constants/router'

export const Router = () => {
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
				element={<SettingsPage />}
			/>
			<Route
				path="*"
				element={<Navigate to={HOME_PAGE_ROUTE} />}
			/>
		</Routes>
	)
}