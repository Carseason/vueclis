/*axios异步请求库*/
import { Message } from 'element-ui'
import axios from 'axios'
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
})
request.interceptors.request.use(//请求拦截器
    res => {
        return res;
    },
    err => {
        return err;
    },
);
request.interceptors.response.use(//响应拦截器
    res => {
        return res;
    },
    err => {
        Message.error({ showClose: true, message: err, type: "error", })
        return err
    }
);
export {
    request,
    axios,
} 