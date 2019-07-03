import C from './constants';

export const searchValue=(state="", action)=>{
    switch (action.type) {
        case C.SET_SEARCH_VALUE:
            return action.payload
        default:
            return state
    }
}
// export const inputNumber=(state=0, action)=>{
//     switch (action.type) {
//         case C.SET_NUMBER:
//             return action.payload
//         default:
//             return state
//     }
// }
export const inputNumber=(state=0, action)=>{
    switch (action.type) {
        case C.ADD_NUMBER:
            let x=state;
            if(state.includes(',')){
                x=0
            }
             return x + parseInt(action.payload)
             case C.ADD_TO_ARRAY:
             return state +','+action.payload
             case C.CLEAR_ARRAY:
                 return 0
        default:
            return state
    }
}

export const loginResponse=(state={}, action)=>{
    switch (action.type) {
        case C.SET_LOGIN_RESPONSE:
            return action.payload
        default:
            return state
    }
}