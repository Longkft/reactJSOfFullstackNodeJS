import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
    console.log(userEmail, 'a1');
    console.log(userPassword, 'a2');
    return axios.get('/api/login', { email: userEmail, password: userPassword });
}

export { handleLoginAPI }