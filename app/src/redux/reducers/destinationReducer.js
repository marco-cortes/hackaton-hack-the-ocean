import { types } from "../types/types"

const initialState = {
    destinations : null,
    destinationActive : null,
}

export const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.destinationList:
            return {
                ...state,
                destinations: action.payload
            }
        case types.destinationActive:
            return {
                ...state,
                destinationActive: action.payload
            }
        case types.destinationAdd:
            return {
                ...state,
                destinations: [...state.destinations, action.payload]
            }
        case types.destinationUpdate:
            return {
                ...state,
                destinations: state.destinations.map(destination => destination.id === action.payload.id ? action.payload : destination)
            }
        case types.destinationDelete:
            return {
                ...state,
                destinations: state.destinations.filter(destination => destination.id !== action.payload)
            }
        case types.commentList:
            return {
                ...state,
                destinationActive: {
                    ...state.destinationActive,
                    comments: action.payload
                }
            }
        case types.commentAdd:
            return {
                ...state,
                destinationActive: {
                    ...state.destinationActive,
                    comments: [ action.payload, ...state.destinationActive.comments ]
                }
            }
        case types.commentDelete:
            return {
                ...state,
                destinationActive: {
                    ...state.destinationActive,
                    comments: state.destinationActive.comments.filter(comment => comment.id !== action.payload)
                }
            }
        case types.commentEdit:
            return {
                ...state,
                destinationActive: {
                    ...state.destinationActive,
                    comments: state.destinationActive.comments.map(comment => comment.id === action.payload.id ? action.payload : comment)
                }
            }
        case types.clearDestination:
            return initialState;
        default:
            return state;
    }
}

