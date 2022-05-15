import { authFetch, noAuthFetch } from "../../helpers/fetch"
import { types } from "../types/types"

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await noAuthFetch("auth/", { email, password }, "POST");
        const body = await resp.json();

        console.log(body);

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        localStorage.setItem("token", body.token);
        dispatch(login(body.user));
    }
}

export const startRegister = (user) => {
    return async (dispatch) => {
        const resp = await noAuthFetch("auth/new", user, "POST");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        localStorage.setItem("token", body.token);
        dispatch(login(body.user));
    }
}

const login = (user) => {
    return {
        type: types.authLogin,
        payload: user
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        
        if(!localStorage.getItem("token")) {
            dispatch(checkingFinish());
            return;
        }

        const resp = await authFetch("auth/renew", {});
        const body = await resp.json();
        
        if (!body.ok) {
            console.log("error: " + body.error);
            dispatch(checkingFinish());
            return;
        }

        localStorage.setItem("token", body.token);
        dispatch(login(body.user));   
    }
}

const checkingFinish = () => {
    return {
        type: types.authCheck,
        payload: false
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem("token");
        dispatch(logout());
    }
}

const logout = () => {
    return {
        type: types.authLogout
    }
}