import React from 'react'
import {
	ClearBtn,
	Select,
	SettingsContainer,
	SettingsWrapper,
} from './components'

export const SettingsPage = () => {
	return (
		<SettingsWrapper>
			<SettingsContainer>
				<h2>Settings</h2>
				<h3>Switch Theme</h3>
				<Select defaultValue="lightTheme">
					<option>Light Theme</option>
					<option>Dark Theme</option>
				</Select>
				<ClearBtn>Clear All History</ClearBtn>
			</SettingsContainer>
		</SettingsWrapper>
	)
}
