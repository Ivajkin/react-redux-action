import './markersRoute.css';

import React, { Component } from 'react';
import {connect} from 'react-redux';

import {removeFromRouteAction} from 'app/redux/actions';


class MarkersRouteView extends Component {
    static defaultProps= {
        routeMarkers: []
    };

    componentDidMount() {
    }

    removeMarker= (marker) => {
        this.props.removeMarkerFromRoute(marker);
        // this.props.updateMapRoute();
    }

    render() {
        return (
        <div className="app-comp--markers-route" hidden={ Boolean(!this.props.routeMarkers.length) }>
            <h4>Plan your route</h4>
            <ul>
                {this.props.routeMarkers.map((marker, i) => (
                    <RouteItem key={i}  marker={marker} onRemoveMarker={this.removeMarker} />
                ))}
            </ul>
        </div>
        );
    }
}

const MarkersRoute= connect(
    (state) => {
        return {
            routeMarkers: state.routeMarkers,
        }
    },
    (dispatch) => {
        return {
            removeMarkerFromRoute: (markerData) => {
                dispatch(removeFromRouteAction(markerData))
            }
        }
    })(MarkersRouteView);

const RouteItem= (props, context) => {

    const btnClick= function (e) {
        e.preventDefault();
        props.onRemoveMarker(props.marker);
    }

    return (
        <li>{ props.marker.name } <button type="button" onClick={btnClick}>x</button></li>
    )
}

export default MarkersRoute;