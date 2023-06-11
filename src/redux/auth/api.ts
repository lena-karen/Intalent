import { todo } from 'node:test'
import { AxiosInstance } from '../../API/axios' 

export const userApi = {
	logInRequest({...rest}) {
		console.log('login', rest)
		return AxiosInstance.post('/login', rest)
	},
	signUpRequest({...rest}) {
		console.log('signup', rest)
		return AxiosInstance.post('/register', rest)
	},

	todo() {
		return AxiosInstance.get('https://jsonplaceholder.typicode.com/todos/1')
	}
}
