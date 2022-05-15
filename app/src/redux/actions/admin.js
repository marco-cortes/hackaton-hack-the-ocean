import { authFetch } from "../../helpers/fetch";
import { types } from "../types/types";
import { updateDestination } from "./owner";

export const startLoadReports = () => {
    return async (dispatch) => {
        const resp = await authFetch("reports/");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(loadReports(body.reports));
    }
}

const loadReports = (reports) => {
    return {
        type: types.reportList,
        payload: reports
    }
}

export const startChangeStatus = (id, status) => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/update/status/" + id, {}, "PUT");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(updateDestination(id, status));
    }
}