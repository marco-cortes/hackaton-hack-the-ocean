import { types } from "../types/types";

const initialState = {
    reports: null,
    reportActive: null,
}

export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.reportList:
            return {
                ...state,
                reports: action.payload
            }
        case types.reportActive:
            return {
                ...state,
                reportActive: action.payload
            }
        case types.reportAdd:
            return {
                ...state,
                reports: [...state.reports, action.payload]
            }
        case types.clearReport:
            return initialState;
        default:
            return state;
    }
}

