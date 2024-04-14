import axios from "axios";

const BASE_URI = process.env.REACT_APP_API_BASE_URL;

const CustomAxios = axios.create({
    baseURL: BASE_URI,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
})

// const interceptor = customAxios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         if (error.response.status !== 401) {
//             return Promise.reject(error);
//         }
  
//         axios.interceptors.response.eject(interceptor);
  
//         const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
//         const headers = {
//             'RefreshToken': localStorage.getItem('refreshToken')
//         };
  
//         try {
//             try {
//                 const response = await axios.get(`${apiBaseURL}/login`, { headers: headers });
//                 error.response.config.headers["Authorization"] = response.data.token;
//                 localStorage.setItem('token', response.data.token);
//                 localStorage.setItem('refreshToken', response.data.refreshToken);
//                 localStorage.setItem('validTillDate', response.data.validTillDate);
//                 return await axios(error.response.config);
//             } catch (err) {
//                 console.log(err);
//                 return await Promise.reject(err);
//             }
//         } finally {}
//     }
// );

export default CustomAxios;