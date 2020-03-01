import { CHANGE_AUTH } from "../actions/types";

const initialState = {
    isAuth: false
}

export default function (state = initialState, action){
    switch(action.type) {
        case CHANGE_AUTH:
            return {...state, isAuth: action.payload}
        default: 
            return state
    }
}