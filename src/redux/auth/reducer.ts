import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, LOG_IN_REQUEST, LOG_IN_SUCCESS, SIGN_UP_FAILURE, LOG_IN_FAILURE } from '../types'

const initialState = {
	isLoading: false,
	error: null,
	data: {}
}

export const authReducer = (state = initialState, action: {type: any, data: any, error: any}) => {
//	console.log(action)
	switch (action.type) {
		case SIGN_UP_REQUEST:
		case LOG_IN_REQUEST:
			return {...state, isLoading: true, error: null}

		case SIGN_UP_SUCCESS:
		case LOG_IN_SUCCESS:
			return {...state, isLoading: false, data: action.data, error: null}

		case SIGN_UP_FAILURE:
		case LOG_IN_FAILURE:
			return {...state, isLoading: false, error: action.error}


		// case LOG_OUT:
		// 	return {...payload, isLoggedIn: false}

		default: 
			return state
	}
}