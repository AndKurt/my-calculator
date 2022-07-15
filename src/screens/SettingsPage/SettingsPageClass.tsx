import { ChangeTheme } from '@interfaces/props'
import { getThemeFromLS } from '@utils/localStorageFunc'
import React, { ChangeEvent, Component } from 'react'
import {
	ClearBtn,
	Select,
	SettingsContainer,
	SettingsWrapper,
} from './components'

export class SettingsPageClass extends Component<
	ChangeTheme,
	{ theme: string }
> {
	constructor(props: ChangeTheme) {
		super(props)

		this.state = {
			theme: getThemeFromLS(),
		}
	}

	render() {
		const { handleChangeTheme } = this.props
		const { theme } = this.state

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

		const handleClear = () => {
			const currentTheme = 'themeLight'
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
						<option value="themeLight">Light Theme</option>
						<option value="themeDark">Dark Theme</option>
					</Select>
					<ClearBtn onClick={handleClear}>
						Clear All History
					</ClearBtn>
				</SettingsContainer>
			</SettingsWrapper>
		)
	}
}

export default SettingsPageClass
