import axios from 'axios'
import { AxiosInstance } from '../../API/axios' 

export const userApi = {
	logInRequest({...rest}) {
		console.log('login', rest)
		return axios.post('http://localhost:8080/login', rest)
	},
	signUpRequest({...rest}) {
		return axios.post('http://localhost:8080/register', rest)
	},
}
