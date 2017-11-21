import 'libraries/js-marker-clusterer/src/markerclusterer';
import './realtyMap.css';

import React, { Component } from 'react';

import Header from 'app/components/common/header/header';
import MarkersRoute from './markersRoute/markersRoute';


class RealtyMapView extends Component {
    map= null;
    mapRoute= null;

    static defaultProps= {
        markers: []
    };

    componentWillMount() {
        this.props.getMarkers().then(() => {
            this.initMap();
            this.setMarkers();
        });
    }

    componentDidMount() {
    }

    componentWillReceiveProps(props) {
        this.updateMapRoute(props);
    }

    findMapCenter() {
        let minLatitude;
        let maxLatitude;
        let minLongitude;
        let maxLongitude;
        this.props.markers.forEach((markerData) => {
            if (minLatitude === undefined || markerData.latitude < minLatitude) {
                minLatitude= markerData.latitude;
            }
            if (maxLatitude === undefined || markerData.latitude > maxLatitude) {
                maxLatitude= markerData.latitude;
            }

            if (minLongitude === undefined || markerData.longitude < minLongitude) {
                minLongitude= markerData.longitude;
            }
            if (maxLongitude === undefined || markerData.longitude > maxLongitude) {
                maxLongitude= markerData.longitude;
            }
        });

        return {
            minLatitude,
            maxLatitude,
            minLongitude,
            maxLongitude,

            latitude: minLatitude + (minLatitude + maxLatitude) / 2,
            longitude: minLongitude + (minLongitude + maxLongitude) / 2,
        }
    }
    initMap() {
        const deltaCoords= this.props.markers.length > 1 ? this.findMapCenter() : this.props.markers;
        const center = new window.google.maps.LatLng(deltaCoords.latitude, deltaCoords.longitude);
        this.map = new window.google.maps.Map(this.refs.mapElement, {
            zoom: 3,
            center: center,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP
        });

        if (this.props.markers.length > 1) {
            const bounds = new google.maps.LatLngBounds(
                new window.google.maps.LatLng(deltaCoords.minLatitude, deltaCoords.minLongitude),
                new window.google.maps.LatLng(deltaCoords.maxLatitude, deltaCoords.minLongitude)
            );
            this.map.fitBounds( bounds );
        }
    }
    setMarkers() {
        const mapMarkers = [];
        let marker;
        let latLng;

        this.props.markers.forEach((markerData) => {
            latLng = new window.google.maps.LatLng(markerData.latitude, markerData.longitude);
            marker = new window.google.maps.Marker({
                position: latLng,
                label: markerData.building_grade ? markerData.building_grade.toUpperCase() : '',
            });
            mapMarkers.push(marker);

            marker.addListener('click', () => {
                this.props.addMarkerToRoute(markerData);
                this.updateMapRoute();
            });
        });

        const markerCluster = new MarkerClusterer(this.map, mapMarkers, {imagePath: '/img/marker-cluster/m'});
    }
    updateMapRoute= (receivedProps) => {
        const props= receivedProps ? receivedProps : this.props;
        const pointCoords = props.routeMarkers.map((marker) => {
            return {
                lat: marker.latitude,
                lng: marker.longitude,
            }
        });

        if (this.mapRoute) {
            this.mapRoute.setMap(null);
            this.mapRoute= null;
        }
        this.mapRoute = new google.maps.Polyline({
            path: pointCoords,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        this.mapRoute.setMap(this.map);
    }

    render() {
        return (
        <div className="app-comp--realty-map">
            <Header className="l-one-col"></Header>
            <main className="l-full">
                <MarkersRoute /*updateMapRoute={this.updateMapRoute}*/ />
                <div id="map" ref="mapElement"></div>
            </main>
        </div>
        );
    }
}

export default RealtyMapView;