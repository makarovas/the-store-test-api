import React, { Component } from 'react'

export default class BookStoreService extends Component {

	getBooks = () => {
		return []
	}

	render() {
		return (
			<div>
				{this.getBooks()}
			</div>
		)
	}
}
