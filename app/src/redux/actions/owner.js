import { authFetch } from "../../helpers/fetch";
import { types } from "../types/types";

export const startAddDestination = (destination) => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/", destination, "POST");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(addDestination(body.destination));
    }
}

const addDestination = (destination) => {
    return {
        type: types.destinationAdd,
        payload: destination
    }
}

export const startUpdateDestination = (destination) => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/update/"+destination._id, destination, "PUT");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(updateDestination(body.destination));
    }
}

export const updateDestination = (destination) => {
    return {
        type: types.destinationUpdate,
        payload: destination
    }
}

export const startDeleteDestination = (id) => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/delete/"+id, {}, "DELETE");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(deleteDestination(id));
    }
}

const deleteDestination = (id) => {
    return {
        type: types.destinationDelete,
        payload: id
    }
}


export const clearDestinations = () => {
    return {
        type: types.clearDestination
    }
}