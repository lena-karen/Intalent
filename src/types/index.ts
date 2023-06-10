export type IUser = {
	email: string,
	password: string,
	isLoggedIn?: boolean
}

export type ISignUp = {
	email: string, 
	password: string, 
	onSuccess?: (() => void) | null, 
	onError?: (() => void) | null
}
