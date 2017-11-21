export const LOAD_MARKERS= 'LOAD_MARKERS';
export const ADD_TO_ROUTE= 'ADD_TO_ROUTE';
export const REMOVE_FROM_ROUTE= 'REMOVE_FROM_ROUTE';


export function loadMarkersAction(data) {
    return {type: LOAD_MARKERS, payload: data};
}

export function addToRouteAction(data) {
    return {type: ADD_TO_ROUTE, payload: data};
}

export function removeFromRouteAction(data) {
    return {type: REMOVE_FROM_ROUTE, payload: data};
}