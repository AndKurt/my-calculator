import { THEME } from '@constants/operators'
import { ChangeTheme } from '@interfaces/props'
import { useAppDispatch } from '@redux/hooks/hooks'
import { clearHistory } from '@redux/reducers/calculator'
import { getDataFromLS } from '@utils/localStorageFunc'
import React, { ChangeEvent, useState } from 'react'
import { ClearBtn, Select, SettingsContainer, SettingsWrapper } from './components'

export const SettingsPage = ({ handleChangeTheme }: ChangeTheme) => {
	const [theme, setTheme] = useState < string > (() => getDataFromLS('theme', THEME.LIGHT))
	const dispatch = useAppDispatch()

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const currentTheme = e.target.value
		setTheme(currentTheme)
		handleChangeTheme(currentTheme)
		localStorage.setItem('theme', JSON.stringify(currentTheme))
	}

	const handleClearAll = () => {
		dispatch(clearHistory())
	}

	return (
		<SettingsWrapper>
			<SettingsContainer>
				<h2>Settings</h2>
				<h3>Switch Theme</h3>
				<Select value={theme} onChange={handleChange}>
					<option value={THEME.LIGHT}>Light Theme</option>
					<option value={THEME.DARK}>Dark Theme</option>
				</Select>
				<ClearBtn onClick={handleClearAll}>Clear All History</ClearBtn>
			</SettingsContainer>
		</SettingsWrapper>
	)
}
