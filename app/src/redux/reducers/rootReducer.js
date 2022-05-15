import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { destinationReducer } from "./destinationReducer";
import { reportReducer } from "./reportReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    destination: destinationReducer,
    report: reportReducer,
})