
import { put, takeEvery, call, takeLatest, take } from 'redux-saga/effects'
import { ISignUp } from '../../types'
import { userApi } from './api'
import { LOG_IN_FAILURE, SIGN_UP_FAILURE } from '../types'
import { signUpRequestAction, signUpSuccessAction, logInRequestAction, logInSuccessAction } from './actions'
import { saveSettingsRequestAction } from '../setting'
import { AxiosInstance } from '../../API/axios'

export function* logInSaga({email, password, onSuccess, onError}: ReturnType<typeof logInRequestAction>): Generator {
	// const payload = {email, password}
	try {
		const response: any = yield call(() => AxiosInstance.post('/login', {email, password}))
		console.log(response)
		yield put(saveSettingsRequestAction({token: response.data.accessToken, isLoggedIn: true}))
		yield put(logInSuccessAction(response.data))
		onSuccess?.()
	}
	catch (err: any) {
		onError?.()
		console.log(err.message)
		yield put({type: LOG_IN_FAILURE, err})
	}
}

export function* signUpSaga({email, password, onSuccess, onError}: ReturnType<typeof signUpRequestAction>): Generator {
	//const payload = {email, password}

	try {
		const response: any = yield call(userApi.signUpRequest, {email, password})
		console.log(response)
		// const response = yield axios.post(register, authHeader)
		
		// yield put(saveSettingsRequestAction({content: {token: response.data.accessToken, isLoggedIn: true}}))

		yield put(signUpSuccessAction(response.data))
		onSuccess?.()
	}
	catch (err: any) {
		yield put({type: SIGN_UP_FAILURE, err})
		onError?.()
		//console.log(err.message)
	}
}

export function* authSaga(): Generator {
	// yield takeEvery(logInRequestAction, logInSaga);
	yield takeEvery(signUpRequestAction, signUpSaga);
  }