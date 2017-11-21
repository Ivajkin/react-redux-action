import React, { Component } from 'react';
import {connect} from 'react-redux';

import RealtyMapView from './realtyMapView';
import {http} from 'app/httpService';
import {loadMarkersAction, addToRouteAction} from 'app/redux/actions';


const RealtyMap= connect(
(state) => {
    return {
        markers: state.markers,
        routeMarkers: state.routeMarkers,
    }
},
(dispatch) => {
    return {
        getMarkers: () => {
            return http.getMapPoints().then((loadedMarkers) => {
                let isCoordinatesProvided= true;
                const filteredMarkers= loadedMarkers.data.filter((marker) => {
                    isCoordinatesProvided= marker.latitude !== null && marker.longitude !== null && marker.latitude !== undefined && marker.longitude !== undefined;

                    if (!isCoordinatesProvided) {
                        console.error('marker without coordinates!', marker);
                    }

                    return isCoordinatesProvided;
                });
                dispatch(loadMarkersAction(filteredMarkers))
            });
        },
        addMarkerToRoute: (markerData) => {
            dispatch(addToRouteAction(markerData))
        }
    }
})(RealtyMapView);

export default RealtyMap;