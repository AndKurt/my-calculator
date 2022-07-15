import { THEME } from '@constants/operators'
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

	handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const currentTheme = e.target.value
		this.props.handleChangeTheme(currentTheme)
		localStorage.setItem(
			'theme',
			JSON.stringify(currentTheme)
		)
	}

	handleClearAll = () => {
		const currentTheme = THEME.LIGHT
		this.props.handleChangeTheme(currentTheme)
		localStorage.setItem(
			'theme',
			JSON.stringify(currentTheme)
		)
	}

	render() {
		const { theme } = this.state

		return (
			<SettingsWrapper>
				<SettingsContainer>
					<h2>Settings</h2>
					<h3>Switch Theme</h3>
					<Select
						defaultValue={theme}
						onChange={this.handleChange}>
						<option value={THEME.LIGHT}>Light Theme</option>
						<option value={THEME.DARK}>Dark Theme</option>
					</Select>
					<ClearBtn onClick={this.handleClearAll}>
						Clear All History
					</ClearBtn>
				</SettingsContainer>
			</SettingsWrapper>
		)
	}
}

export default SettingsPageClass
