/* eslint-disable prettier/prettier */
export class Calculator{
	public value: number | null
	constructor() {
		this.value = null
	}

	executeCommand(command) {
		this.value = command.execute(this.value)
	}
}

export class AddCommand {
	private secondValue: number
	constructor(secondValue: number) {
		this.secondValue = secondValue
	}

	execute(firstValue: number) {
		return firstValue + this.secondValue
	}
}

export class SubtractCommand {
	private secondValue: number
	constructor(secondValue: number) {
		this.secondValue = secondValue
	}

	execute(firstValue: number) {
		return firstValue - this.secondValue
	}
}

export class MultiplyCommand {
	private secondValue: number
	constructor(secondValue: number) {
		this.secondValue = secondValue
	}

	execute(firstValue: number) {
		return firstValue * this.secondValue
	}
}

export class DivideCommand {
	private secondValue: number
	constructor(secondValue: number) {
		this.secondValue = secondValue
	}

	execute(firstValue: number) {
		return firstValue / this.secondValue
	}
}

export class RemainderOfDivCommand {
	private secondValue: number
	constructor(secondValue: number) {
		this.secondValue = secondValue
	}

	execute(firstValue: number) {
		return firstValue % this.secondValue
	}
}
