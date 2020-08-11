const initialState = {}

const blog = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_BLOG':
			return action.payload
		default:
			return state
	}
}

export default blog