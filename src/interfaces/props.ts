export type ChangeTheme = {
	handleChangeTheme: (theme: string) => void,
}

export interface IControlPanelProps {
	isShowHistory: boolean;
	handleShowHistory: () => void;
}
