import {
	SHOW_LOADING,
    // GET_USERS
	GET_USERS_SUCCESS
} from '../constants/Users';

const initState = {
  loading: false,
  users: []
}

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case GET_USERS_SUCCESS: {
			return {
				...state,
				loading: false,
				users: action.payload.data
			}
		}
		default:
			return state;
	}
}

export default usersReducer