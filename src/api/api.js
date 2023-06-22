import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://648db15d2de8d0ea11e81f72.mockapi.io`,
    timeout: 5000,
    responseType: 'json'
});

export default axiosClient;