import React, { Component } from 'react'
import { ErrorMessage } from './componets'

interface IErrorBoundaryProps {
	children?: JSX.Element;
}

interface IErrorBoundaryState {
	error: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
	constructor(props: IErrorBoundaryProps) {
		super(props)

		this.state = {
			error: false,
		}
	}

	// eslint-disable-next-line prettier/prettier
	public static getDerivedStateFromError(_: Error) {
		return {
			error: true,
		}
	}

	render() {
		
		const { error } = this.state
		const { children } = this.props
		if (error) {
			return (
				<ErrorMessage>
					Something went wrong...
					<br />
					Try reloading the page or contact the administrator.
				</ErrorMessage>
			)
		}
		return children
	}
}

export default ErrorBoundary
