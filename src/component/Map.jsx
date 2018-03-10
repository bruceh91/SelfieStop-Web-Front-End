
import React, { Component, Fragment } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import StopsMarkerList from './StopsMarkerList';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 33.5150, lng: -86.8000 }}>
        {<Marker position={{ lat: 33.6000, lng: -86.8200 }} />}
        {<StopsMarkerList markers={props}/>}
    </GoogleMap>
))

export default MyMapComponent;
