import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


class Map extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         list: []
    //     }
    // }

    withGoogleMap(props) {
    return (<GoogleMap
    // googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC02n3c0MkUtJa9-aJqcgcXiCREmJp54ig"}
        defaultZoom={14}
        defaultCenter={{ lat: 33.5200, lng: -86.8000 }}>
        {/* {markers.map((marker, index) => (
            <Marker {...marker} />
        )
        )} */}
    </GoogleMap>
    )}

    render() {
        const markers = this.props.markers || [];
        const MyMap = <GoogleMap
        // googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC02n3c0MkUtJa9-aJqcgcXiCREmJp54ig"}
            defaultZoom={14}
            defaultCenter={{ lat: 33.5200, lng: -86.8000 }}>
            {/* {markers.map((marker, index) => (
                <Marker {...marker} />
            )
            )} */}
        </GoogleMap>;


        return (
        <Fragment>
            <p>this is where the map should be</p>
            {MyMap}
        </Fragment> 
        )
    }
}
            
            

            
            
export default Map;