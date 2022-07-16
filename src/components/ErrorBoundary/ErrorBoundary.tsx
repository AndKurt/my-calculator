import React, { Component } from 'react'
import { ErrorMessage } from './componets'

interface IErrorBoundaryProps {
	errorText: string;
	children: JSX.Element;
}

interface IErrorBoundaryState {
	error: boolean;
}

export class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props)

		this.state = {
			error: false,
		}
	}

	static getDerivedStateFromError() {
		return {
			error: true,
		}
	}

	render() {
		const { error } = this.state
		const { children, errorText } = this.props
		if (error) {
			return (
				<ErrorMessage>
					Something went wrong...
					<br />
					{errorText}
				</ErrorMessage>
			)
		}
		return children
	}
}

export default ErrorBoundary
