import {createStore, combineReducers} from 'redux';

import {markerReducer, markerRouteReducer} from './reducers';


const reducers= combineReducers({
    markers: markerReducer,
    routeMarkers: markerRouteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const AppStore= createStore(reducers, undefined, composeEnhancers);

export default AppStore;