import React, { Component, Fragment } from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class StopsMarkerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers: []
        }
    }

    async componentDidMount() {
        await this.markerMap();
    }

    clickHandler(props) {
        this.props.markers.function(props)
    }

    async markerMap() {
        let markers = await this.props.markers.stops.map((marker, index) =>
            <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => this.clickHandler(marker.name)}>
                <InfoWindow>
                    <p>yoyoyoy</p>
                </InfoWindow>
            </Marker>
        );
        await this.setState({ markers })
    }


    render() {
        console.log(this.props)
        return (
            <Fragment>{
                this.state.markers
            }</Fragment>
        )
    }
}

