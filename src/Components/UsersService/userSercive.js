
import axios from 'axios';
// const EMPLOYEE_API_BASE_URL = "http://localhost:3030/users";

// const getEmployees =() => {
//     return axios.get(EMPLOYEE_API_BASE_URL);
// }

const getAllUsersService = (data) => {
    axios.get('http://localhost:3030/users')
    console.log(data);
};
export {
    getAllUsersService
}

// // const getAllUsers = axios.get({
// //     baseURL: "http://localhost:3030/users"
// // });

// // export {
// //     getAllUsers
// // }