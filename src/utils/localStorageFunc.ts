export const savePathToLS = (path: string) => {
	localStorage.setItem('path', path ? path : '')
}

export const getDataFromLS = (field: string, defaulValue: any) => {
	const currentTheme = localStorage.getItem(field)
	if (currentTheme) return JSON.parse(currentTheme)
	else return defaulValue
}
