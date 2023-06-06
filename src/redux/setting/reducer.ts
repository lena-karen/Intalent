import { 
	LOAD_SETTINGS_REQUEST, 
	LOAD_SETTINGS_FAILURE, 
	LOAD_SETTINGS_SUCCESS,
	SAVE_SETTINGS_REQUEST,
	SAVE_SETTINGS_SUCCESS,
	SAVE_SETTINGS_FAILURE
} from '../types'
import { defaultSettings } from './constants'

const defaultState = {
	isLoading: true,
	data: defaultSettings,
	error: null 
}

export const settingsReducer = (state = defaultState, action: any) => {
	const {type} = action
	//console.log(action)
	switch (type) {
		case LOAD_SETTINGS_REQUEST:
			return {...state, isLoading: true, error: null}

		case LOAD_SETTINGS_SUCCESS:
			return {isLoading: false, content: action.content, error: null}
		
		case LOAD_SETTINGS_FAILURE:
			return {isLoading: false, data: action.content, error: action.error}

		case SAVE_SETTINGS_REQUEST:
			return {...state, isLoading: true, error: null}
	
		case SAVE_SETTINGS_SUCCESS:
			console.log(action)
			return {isLoading: false, content: action.content, error: null}
			
		case SAVE_SETTINGS_FAILURE:
			return {isLoading: false, data: action.content, error: action.error}
		default:
			return state
	}
}