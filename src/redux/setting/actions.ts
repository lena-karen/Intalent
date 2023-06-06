import  {LOAD_SETTINGS_REQUEST, SAVE_SETTINGS_SUCCESS, LOAD_SETTINGS_FAILURE} from '../types'

export const saveSettingsRequestAction = (newSettings: any) => {
	console.log('newSettings')
	return {type: SAVE_SETTINGS_SUCCESS, ...newSettings}
}

export const loadRequestSettingsAction = () => {
	return {type: LOAD_SETTINGS_REQUEST}
}

export const loadFailureSettingsAction = (payload: any) => {
	return {type: LOAD_SETTINGS_FAILURE, payload}
}