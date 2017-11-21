import {LOAD_MARKERS, ADD_TO_ROUTE, REMOVE_FROM_ROUTE} from './actions';


export function markerReducer(state= [], action) {
    switch (action.type) {
        case LOAD_MARKERS:
            return action.payload;
        default:
            return state;
    }
}

export function markerRouteReducer(state= [], action) {
    switch (action.type) {
        case ADD_TO_ROUTE:
            return state.concat(action.payload);
        case REMOVE_FROM_ROUTE:
            return state.filter((marker) => action.payload !== marker);
        default:
            return state;
    }
}