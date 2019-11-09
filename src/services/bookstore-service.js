import React, { Component } from 'react'

export default class BookStoreService extends Component {

	getBooks = () => {
		console.log('from getBooks')
		return [
			{
				id: 1,
				name: 'Production-Ready Microservices',
				author: 'Susan J. Fowler'
			},
			{
				id: 2,
				name: 'Release It!',
				author: 'Michael T. Nygard'
			}
		]
	}
}
