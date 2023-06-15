import { signUpTypes, logInTypes } from '../types'
const initialState = {
	isLoading: false,
	error: null,
	data: {}
}

export const authReducer = (state = initialState, action: {type: any, data: any, error: any}) => {
	switch (action.type) {
		case signUpTypes.SIGN_UP_REQUEST:
			return {...state, isLoading: true, error: null}

		case logInTypes.LOG_IN_REQUEST:
			return {...state, isLoading: true, error: null}

		case signUpTypes.SIGN_UP_SUCCESS:
			return {...state, isLoading: false, data: action.data, error: null}

		case logInTypes.LOG_IN_SUCCESS:
			return {...state, isLoading: false, data: action.data, error: null}

		case signUpTypes.SIGN_UP_FAILURE:
			return {...state, isLoading: false, error: action.error}

		case logInTypes.LOG_IN_FAILURE:
			return {...state, isLoading: false, error: action.error}

		default: 
			return state
	}
}