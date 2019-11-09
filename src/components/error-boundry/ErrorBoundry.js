import React, { Component } from 'react'

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
		this.state.hasError ? return <h1>Something going wrong</h1> : return this.props.children

	}
}
