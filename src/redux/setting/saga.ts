import { loadFailureSettingsAction, saveSettingsRequestAction, loadRequestSettingsAction } from './actions'
import { takeEvery, call, put } from 'redux-saga/effects';
import { defaultSettings} from './constants'

function* loadSettings() {
	try {
		const settings = defaultSettings
	}
	catch (error) {
		yield put(loadFailureSettingsAction(error))
	}
}

function* saveSettings({newSettings}: {newSettings: any}) {

	const def = {...defaultSettings}
	console.log(newSettings, defaultSettings, def)
	try {
		if (newSettings) {
			localStorage.setItem('user', JSON.stringify(newSettings))
		} else {
			localStorage.setItem('user', JSON.stringify(def))
		}
		yield put(saveSettingsRequestAction({content: newSettings || def}))
	} catch (err) {
		console.log(err)
	}


}

export function* settingsSaga() {
	// yield takeEvery(loadRequestSettingsAction, loadSettings)
	yield takeEvery(saveSettingsRequestAction, saveSettings)
}