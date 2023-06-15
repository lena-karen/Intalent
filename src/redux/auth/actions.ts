import { ISignUp } from '../../types'

import { signUpTypes, logInTypes } from '../types'

export const signUpRequestAction = ({email, password, onSuccess, onError}: ISignUp) => {
	return {type: signUpTypes.SIGN_UP_REQUEST, email, password, onSuccess, onError}
}

export const signUpSuccessAction = (response: any) => {
	return {type: signUpTypes.SIGN_UP_SUCCESS, data: response}
}

export const logInRequestAction = ({email, password, onSuccess, onError}: ISignUp) => (
	{type: logInTypes.LOG_IN_REQUEST, email, password, onSuccess, onError}
)

export const logInSuccessAction = (response: ISignUp) => (
	{type: logInTypes.LOG_IN_SUCCESS, data: response}
)

