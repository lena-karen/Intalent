
import { put, takeEvery, call, takeLatest, take } from 'redux-saga/effects'
import { ISignUp, ILogIn } from '../../types'
import { userApi } from './api'
import { LOG_IN_FAILURE, SIGN_UP_FAILURE } from '../types'
import { signUpRequestAction, signUpSuccessAction, logInRequestAction, logInSuccessAction } from './actions'
import { saveSettingsRequestAction } from '../setting'
import { AxiosInstance } from '../../API/axios'

import {ACTION} from '../../constants/actions'
import axios from 'axios'
type responseType = {
	email: string,
	password: string,
	id: number
}

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
function authHeader() {
	const user = localStorage.getItem('user')
	if (user) {
		const res = JSON.parse(user);
		if (res.accessToken) {
			return { Authorization: 'Bearer ' + res.accessToken };
		  } else {
			return {};
		  }
	}
  
	
  }
function register(email: string, password: string) {
	return axios.post('http://localhost:8080/register',{ email, password })
}
export function* signUpSaga({email, password, confirm_password, onSuccess, onError}: ReturnType<typeof signUpRequestAction>): Generator {
	//const payload = {email, password}
	console.log(confirm_password)
	
	try {
		const response: any = yield call(userApi.signUpRequest, {email, password})
		// const response = yield axios.post(register, authHeader)
		
		yield put(saveSettingsRequestAction({token: response.data.accessToken, isLoggedIn: true}))
		console.log(response)
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
	yield takeEvery(logInRequestAction, logInSaga);
	yield takeEvery(signUpRequestAction, signUpSaga);
  }