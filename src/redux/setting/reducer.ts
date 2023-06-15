import { defaultSettings } from './constants'
import { settingsTypes } from '../types'

const defaultState = {
	isLoading: true,
	data: defaultSettings,
	error: null 
}

export const settingsReducer = (state = defaultState, action: any) => {
	const {type} = action
	//console.log(action)
	switch (type) {
		// case LOAD_SETTINGS_REQUEST:
		// 	return {...state, isLoading: true, error: null}

		case settingsTypes.LOAD_SETTINGS_SUCCESS:
			console.log(action)
			return {isLoading: false, data: action.content, error: null}
		
		// case LOAD_SETTINGS_FAILURE:
		// 	return {isLoading: false, data: action.content, error: action.error}

		// case settingsTypes.SAVE_SETTINGS_REQUEST:
		// 	console.log('req')
		// 	return {...state, isLoading: true, error: null}
	
		case settingsTypes.SAVE_SETTINGS_SUCCESS:
			console.log(action)
			return {isLoading: false, data: action.content, error: null}
			
		// case SAVE_SETTINGS_FAILURE:
		// 	return {isLoading: false, data: action.content, error: action.error}
		default:
			return state
	}
}