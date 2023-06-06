export type IUser = {
	email: string,
	password: string,
	isLoggedIn?: boolean
}

export type ISignUp = {
	email: string, 
	password: string, 
	confirm_password: string,
	onSuccess?: (() => void) | null, 
	onError?: (() => void) | null
}

export type ILogIn = Omit<ISignUp, 'confirm_password'>