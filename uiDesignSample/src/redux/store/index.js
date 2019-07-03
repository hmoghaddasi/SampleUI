import { combineReducers } from 'redux';
import {
    searchValue,
    inputNumber,
    loginResponse
} from './commonReducers';

export default combineReducers({
    searchValue,
    inputNumber,
    loginResponse
})