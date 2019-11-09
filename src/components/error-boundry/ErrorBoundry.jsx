import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/ErrorIndicator';


export default class ErrorBoundry extends Component {
	state = {
		hasError: false
	}

	static  getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}
	render() {
		if(this.state.hasError) {
return (<ErrorIndicator />)
		} else {
			return (this.props.children)
		}
	}
}
