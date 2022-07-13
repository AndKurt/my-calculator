export const savePathToLS = (path: string) => {
	localStorage.setItem('path', path ? path : '')
}
