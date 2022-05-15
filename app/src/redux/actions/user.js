import { types } from "../types/types";
import { authFetch } from "../../helpers/fetch";

export const startLoadDestinations = () => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(loadDestinations(body.destinations));
    }
}

const loadDestinations = (destinations) => {
    return {
        type: types.destinationList,
        payload: destinations
    }
}

export const startLoadDestination = (id) => {
    return async (dispatch) => {
        const resp = await authFetch("destinations/" + id);
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(loadDestination(body.destination));
        dispatch(startLoadComments(body.destination.id));

    }
}

const loadDestination = (destination) => {
    return {
        type: types.destinationActive,
        payload: destination
    }
}

export const startLoadComments = (id) => {
    return async (dispatch) => {
        const resp = await authFetch("comments/" + id);
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(loadComments(body.comments));
    }
}

const loadComments = (comments) => {
    return {
        type: types.commentList,
        payload: comments
    }
}

export const startAddComment = (comment) => {
    return async (dispatch) => {
        const resp = await authFetch("comments/", comment, "POST");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(addComment(body.comment));
    }
}

const addComment = (comment) => {
    return {
        type: types.commentAdd,
        payload: comment
    }
}

export const startUpdateComment = (comment) => {
    return async (dispatch) => {
        const resp = await authFetch("comments/" + comment.id, comment, "PUT");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(updateComment(body.comment));
    }
}

const updateComment = (comment) => {
    return {
        type: types.commentUpdate,
        payload: comment
    }
}

export const startDeleteComment = (id) => {
    return async (dispatch) => {
        const resp = await authFetch("comments/" + id, {}, "DELETE");
        const body = await resp.json();

        if (!body.ok) {
            console.log("error: " + body.error);
            return;
        }

        dispatch(deleteComment(id));
    }
}

const deleteComment = (id) => {
    return {
        type: types.commentDelete,
        payload: id
    }
}