import { types } from "../types/types";

const initialState = {
    user: null,
    authCheck: true,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }
        case types.authLogout:
            return initialState;
        case types.authCheck:
            return {
                ...state,
                authCheck: action.payload
            }
        default:
            return state;
    }
}