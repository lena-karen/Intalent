import { IUser, ISignUp } from '../../types'
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../types'
import {ACTION} from '../../constants/actions'

export const signUpRequestAction = ({email, password, onSuccess, onError}: ISignUp) => {
	console.log(email, password)
	return {type: SIGN_UP_REQUEST, email, password, onSuccess, onError}
}

export const signUpSuccessAction = (response: any) => {
	console.log(response)
	return {type: SIGN_UP_SUCCESS, data: response}
}

// export const signUpFailureAction = (error: any) => {
// 	console.log(error)
// 	return {type: SIGN_UP_FAILURE, error: error}
// }

export const logInRequestAction = ({email, password, onSuccess, onError}: ISignUp) => (
	{type: LOG_IN_REQUEST, email, password, onSuccess, onError}
)

export const logInSuccessAction = (response: ISignUp) => (
	{type: LOG_IN_SUCCESS, data: response}
)

