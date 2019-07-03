import Axios from 'axios';
import { authRoutest } from './routes';

function loginApi(data) {
    return Promise.resolve(Axios.post(authRoutest.login, data))
}

export {
    loginApi
}