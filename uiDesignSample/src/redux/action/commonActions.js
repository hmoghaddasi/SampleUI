import C from '../store/constants';

export const setSearchValue = (value) => ({ type: C.SET_SEARCH_VALUE, payload: value })
export const setInputNumber = (value) => ({ type: C.SET_NUMBER, payload: value })
export const addInputNumber = (value) => ({ type: C.ADD_NUMBER, payload: value })
export const addInputArray = (value) => ({ type: C.ADD_TO_ARRAY, payload: value })
export const clearInput = () => ({ type: C.CLEAR_ARRAY })
export const setLoginResponse = (value) => ({ type: C.SET_LOGIN_RESPONSE, payload: value })