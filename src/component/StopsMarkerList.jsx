import React, { Component, Fragment } from "react";
import { Marker } from "react-google-maps";

export default class StopsMarkerList extends Component {
    constructor(props){
        super(props)

        this.state = {
            markers: []
        }
    }

    async componentDidMount(){
        await this.markerMap();
    }

    async markerMap(){
        let markers = await this.props.markers.stops.map((marker, index) => 
        <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />
        );
        await this.setState({ markers })
    }


    render(){
        return (
            <Fragment>{
                
                this.state.markers
            }</Fragment>
        )
    }
}

