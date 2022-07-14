const roundValue = (num: number) =>
	Number((Math.floor(num * 1000) / 1000).toFixed(1))

export const flipSign = (num: number) =>
	num > 0 ? num * -1 : Math.abs(num)

export const getRemainderOfDivision = (
	historyValue: number,
	currentValue: number
) => roundValue(historyValue % currentValue)

export const addFunc = (
	historyValue: number,
	currentValue: number
) => roundValue(historyValue + currentValue)

export const substractFunc = (
	historyValue: number,
	currentValue: number
) => roundValue(historyValue - currentValue)

export const multipleFunc = (
	historyValue: number,
	currentValue: number
) => roundValue(historyValue * currentValue)

export const devideFunc = (
	historyValue: number,
	currentValue: number
) => roundValue(historyValue / currentValue)
