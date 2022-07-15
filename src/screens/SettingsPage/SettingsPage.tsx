import { THEME } from '@constants/operators'
import { ChangeTheme } from '@interfaces/props'
import { getThemeFromLS } from '@utils/localStorageFunc'
import React, { ChangeEvent, useState } from 'react'
import {
	ClearBtn,
	Select,
	SettingsContainer,
	SettingsWrapper,
} from './components'

export const SettingsPage = ({
	handleChangeTheme,
}: ChangeTheme) => {
	const [theme] = useState(() => getThemeFromLS())

	const handleChange = (
		e: ChangeEvent<HTMLSelectElement>
	) => {
		const currentTheme = e.target.value
		handleChangeTheme(currentTheme)
		localStorage.setItem(
			'theme',
			JSON.stringify(currentTheme)
		)
	}

	const handleClearAll = () => {
		const currentTheme = THEME.LIGHT
		handleChangeTheme(currentTheme)
		localStorage.setItem(
			'theme',
			JSON.stringify(currentTheme)
		)
	}

	return (
		<SettingsWrapper>
			<SettingsContainer>
				<h2>Settings</h2>
				<h3>Switch Theme</h3>
				<Select
					defaultValue={theme}
					onChange={handleChange}>
					<option value={THEME.LIGHT}>Light Theme</option>
					<option value={THEME.DARK}>Dark Theme</option>
				</Select>
				<ClearBtn onClick={handleClearAll}>
					Clear All History
				</ClearBtn>
			</SettingsContainer>
		</SettingsWrapper>
	)
}
