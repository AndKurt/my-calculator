export const flipSign = (num: number) =>
	num > 0 ? num * -1 : Math.abs(num)

export const getRemainderOfDivision = (
	historyValue: number,
	currentValue: number
) => Number(historyValue % currentValue)

export const addFunc = (
	historyValue: number,
	currentValue: number
) => historyValue + currentValue
