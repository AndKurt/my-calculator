export const roundValue = (num: number) => (Math.round(num * 1000) / 1000).toString()

export const flipSign = (num: string) =>
	Number(num) > 0 ? (Number(num) * -1).toString() : Math.abs(Number(num)).toString()

export const getRemainderOfDivision = (historyValue: string, currentValue: string) =>
	roundValue(Number(historyValue) % Number(currentValue)).toString()

export const addFunc = (historyValue: string, currentValue: string) =>
	roundValue(Number(historyValue) + Number(currentValue)).toString()

export const substractFunc = (historyValue: string, currentValue: string) =>
	roundValue(Number(historyValue) - Number(currentValue)).toString()

export const multipleFunc = (historyValue: string, currentValue: string) =>
	roundValue(Number(historyValue) * Number(currentValue)).toString()

export const devideFunc = (historyValue: string, currentValue: string) =>
	roundValue(Number(historyValue) / Number(currentValue)).toString()

export const limitInput = (string: string, length: number) =>
	length >= string.length ? string : string.substring(0, length)
