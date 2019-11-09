import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/ErrorIndicator';


export default class ErrorBoundry extends Component {
	state = {
		hasError: false
	}

	static static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		logErrorToService(error, errorInfo);
	}
	render() {
		this.state.hasError ? return <ErrorIndicator /> : return this.props.children
	}
}
