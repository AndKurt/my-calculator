import { OPERATOR } from '@constants/operators'

export const countDots = (str: string) => {
	return str.split('').reduce((acc, e) => {
		if (e === OPERATOR.DOT) {
			return (acc += 1)
		}
		return acc
	}, 0)
}
export const countMathSigns = (str: string) => {
	return str.split('').reduce((acc, e) => {
		if (e === (OPERATOR.ADD || OPERATOR.SUBSTRACT || OPERATOR.MULTIPLE || OPERATOR.DEVIDE || OPERATOR.PERCENTAGE)) {
			return (acc += 1)
		}
		return acc
	}, 0)
}

export const findLastIndexMathSign = (str: string) => {
	const arr: number[] = []
	arr.push(str.lastIndexOf(OPERATOR.ADD))
	arr.push(str.lastIndexOf(OPERATOR.SUBSTRACT))
	arr.push(str.lastIndexOf(OPERATOR.MULTIPLE))
	arr.push(str.lastIndexOf(OPERATOR.DEVIDE))
	arr.push(str.lastIndexOf(OPERATOR.PERCENTAGE))
	return arr.sort((a, b) => b - a)[0]
}

export const checkDotsInLastValue = (str: string) => {
	const lastIndexMathOperator = findLastIndexMathSign(str)
	let checkedStr = str
	if (lastIndexMathOperator !== -1) {
		checkedStr = str.slice(lastIndexMathOperator)
	}
	return countDots(checkedStr)
}
