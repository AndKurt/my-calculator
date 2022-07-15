const roundValue = (num: number) =>
	Number(Math.ceil(num * 1000) / 1000)

export const flipSign = (num: number) =>
	num > 0 ? (num * -1).toString() : Math.abs(num).toString()

export const getRemainderOfDivision = (
	historyValue: string,
	currentValue: string
) =>
	roundValue(
		Number(historyValue) % Number(currentValue)
	).toString()

export const addFunc = (
	historyValue: string,
	currentValue: string
) =>
	roundValue(
		Number(historyValue) + Number(currentValue)
	).toString()

export const substractFunc = (
	historyValue: string,
	currentValue: string
) =>
	roundValue(
		Number(historyValue) - Number(currentValue)
	).toString()

export const multipleFunc = (
	historyValue: string,
	currentValue: string
) =>
	roundValue(
		Number(historyValue) * Number(currentValue)
	).toString()

export const devideFunc = (
	historyValue: string,
	currentValue: string
) =>
	roundValue(
		Number(historyValue) / Number(currentValue)
	).toString()

export const limitInput = (
	string: string,
	length: number
) =>
	length >= string.length
		? string
		: string.substring(0, length)
