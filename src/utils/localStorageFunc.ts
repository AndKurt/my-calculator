import { THEME } from '@constants/operators'

export const savePathToLS = (path: string) => {
	localStorage.setItem('path', path ? path : '')
}

export const getThemeFromLS = () => {
	const currentTheme = localStorage.getItem('theme')
	if (currentTheme) return JSON.parse(currentTheme)
	else return THEME.LIGHT
}
