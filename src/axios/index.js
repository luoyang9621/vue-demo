import axios from 'axios';
import { stringify } from 'qs';

axios.defaults.baseURL = 'http://api.wallet.szspapp.com/api';
axios.defaults.transformRequest = data => stringify(data);
// axios.defaults.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded',
// };
// 在请求之前对数据和配置做出处理
axios.interceptors.request.use((config) => {
    // console.log('axios request', config);
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log('axios response', response);
    return response.data;
}, (error) => {
    return Promise.reject(error);
});

export default axios;