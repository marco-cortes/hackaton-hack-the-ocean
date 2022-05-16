import Swal from "sweetalert2";
import { authFetch, noAuthFetch } from "../../helpers/fetch"
import { types } from "../types/types"
import { clearReports } from "./admin";
import { clearDestinations } from "./owner";
import { startLoadDestinations } from "./user";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await noAuthFetch("auth/", { email, password }, "POST");
        const body = await resp.json();

        if (!body.ok) {
            return Swal.fire({
                title: "Error",
                text: body.message,
                icon: "error",
            });
        }
        localStorage.setItem("token", body.token);
        dispatch(login(body.user));
        dispatch(startLoadDestinations());
    }
}

export const startRegister = (user) => {
    return async (dispatch) => {
        try {
            const resp = await noAuthFetch("auth/new", user, "POST");
            const body = await resp.json();

            if (!body.ok) {
                return Swal.fire(
                    "Error",
                    body.message ? body.message : "Algo salió mal",
                    "error"
                );
            }
            localStorage.setItem("token", body.token);
            dispatch(login(body.user));
            dispatch(startLoadDestinations());
        } catch(error) {

        }
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
        dispatch(checkingFinish());
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
        localStorage.removeItem("lastPath");
        dispatch(clearDestinations());
        dispatch(clearReports());
        dispatch(logout());
        dispatch(startChecking());
    }
}

const logout = () => {
    return {
        type: types.authLogout
    }
}