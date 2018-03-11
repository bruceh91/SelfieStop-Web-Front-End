
import React, { Component, Fragment } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import StopsMarkerList from './StopsMarkerList';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: props.lat, lng: props.lng }}>
        {<Marker position={{ lat: props.lat, lng: props.lng }} />}
        {<StopsMarkerList markers={props}/>}
    </GoogleMap>
))

export default MyMapComponent;
