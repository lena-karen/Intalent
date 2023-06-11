import axios from 'axios';
const BASE_URL = 'http://localhost:8080'

const instance = {
	timeout: 1000,
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
		// common: {
		//   'Authorization': accessToken,
		// }
	  }
}

export const AxiosInstance = axios.create(instance)


AxiosInstance.interceptors.request.use( (req) => {
	const user = localStorage.getItem('user')
    if (user) {
        req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    }
    return req;
}
  );
  
  AxiosInstance.interceptors.response.use(
	(res) => res,
	// (error) => {
	//   if (error.response && error.response.status === 401) {
	// 	localStorage.removeItem('user');
	//   }
	//   return Promise.reject(error);
	// },
  );