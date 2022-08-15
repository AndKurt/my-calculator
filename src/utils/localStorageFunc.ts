export const savePathToLS = (path: string) => {
  localStorage.setItem('path', path ? path : '');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDataFromLS = (field: string, defaulValue: any) => {
  const currentTheme = localStorage.getItem(field);
  if (currentTheme) return JSON.parse(currentTheme);
  else return defaulValue;
};
