const initialState = {
	books: {
		id: 1,
		name: 'Production-Ready Microservices',
		author: 'Susan J. Fowler',
		id: 2,
		name: 'Release It!',
		author: 'Michael T. Nygard'
	}
};


const reducers = (state = initialState, action) => {
	switch (action.type)
	{
		case 'BOOKS_LOADED':
			return {
				books: action.payload
			};
		default:
			return state;
	}

}

export { reducers };