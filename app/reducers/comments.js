const initialState = []

const comments = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_COMMENTS':
			return action.payload
		default:
			return state
	}
}

export default comments