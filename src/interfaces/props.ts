export type ChangeTheme = {
	handleChangeTheme: (theme: string) => void,
}

export interface ISettingsPageClassProps extends ChangeTheme {
	clearHistory: () => void;
}

export interface IControlPanelProps {
	isShowHistory: boolean;
	handleShowHistory: () => void;
}

export interface IDisplayProps {
	currentValue: string;
	expression: string;
}

export interface IHistoryProps {
	isShowHistory: boolean;
	arrayExpressions?: string[];
}

export interface IKeyPadClassProps {
	setCurrentValue: (num: number | string) => void;
	removeLastChar: () => void;
	resetAll: () => void;
	swapSignValue: () => void;
	mathOperation: () => void;
}
