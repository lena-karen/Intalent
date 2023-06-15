import { settingsTypes } from '../types'

export const saveSettingsRequestAction = (newSettings: any) => {
	console.log('newSettings', newSettings)
	return {type: settingsTypes.SAVE_SETTINGS_REQUEST, newSettings}
}

export const loadSettingsRequestAction = () => {
	return {type: settingsTypes.LOAD_SETTINGS_REQUEST}
}

export const loadSettingsSuccessAction = (content: any) => {
	console.log(content)
	return {type: settingsTypes.LOAD_SETTINGS_SUCCESS, content}
}

export const loadSettingsFailureAction = (payload: any) => {
	return {type: settingsTypes.LOAD_SETTINGS_FAILURE, payload}
}