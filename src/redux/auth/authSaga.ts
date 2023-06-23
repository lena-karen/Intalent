
import { put, takeEvery, call, takeLatest, take } from 'redux-saga/effects'
import { ISignUp } from '../../types'
import { userApi } from './api'
import { signUpRequestAction, signUpSuccessAction, logInRequestAction, logInSuccessAction } from './actions'
import { saveSettingsRequestAction } from '../setting'
import { AxiosInstance } from '../../API/axios'
import { signUpTypes, logInTypes } from '../types'
import axios from 'axios'

export function* logInSaga({email, password, onSuccess, onError}: ReturnType<typeof logInRequestAction>): Generator {
	try {
		const response: any = yield call(userApi.logInRequest, {email, password})

		yield put(saveSettingsRequestAction({token: response.data.accessToken, isLoggedIn: true}))
		yield put(logInSuccessAction(response.data))
		onSuccess?.()
	}
	catch (error: any) {
		onError?.()
		yield put({type: logInTypes.LOG_IN_FAILURE, error})
	}
}

export function* signUpSaga({email, password, onSuccess, onError}: ReturnType<typeof signUpRequestAction>): Generator {
	try {
		const response: any = yield call(userApi.signUpRequest, {email, password})

		yield put(saveSettingsRequestAction({token: response.data.accessToken, isLoggedIn: true}))
		yield put(signUpSuccessAction(response.data))
		onSuccess?.()
	}
	catch (err: any) {
		yield put({type: signUpTypes.SIGN_UP_FAILURE, err})
		onError?.()
	}
}

export function* authSaga() {
	yield takeEvery(logInTypes.LOG_IN_REQUEST, logInSaga);
	yield takeEvery(signUpTypes.SIGN_UP_REQUEST, signUpSaga);

  }