import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchLat: 0,
            searchLng: 0
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            this.setState({ searchLat: coords.latitude })
            this.setState({ searchLng: coords.longitude })

            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: { lat: this.state.searchLat, lng: this.state.searchLng }
            });

            this.setState({ searchLat: coords.latitude, searchLng: coords.longitude })

            const locMarker = new window.google.maps.Marker({
                position: { lat: coords.latitude, lng: coords.longitude },
                map: map,
                icon: {
                    url: 'https://s3.us-east-2.amazonaws.com/selfietester/assets/user.gif',
                    anchor: new window.google.maps.Point(10, 45)
                }

            });

            fetch('http://powerful-savannah-66747.herokuapp.com/api/stops')
                .then(response => {
                    return response.json()
                }).then(data => {
                    data.map((stop) => {
                        let infoContent = `<div class='gm-info-div'> 
                                                <h3 >${stop.name}</h3>
                                                <img class="gm-info-image" src=${stop.imgurl} /> 
                                                <br />
                                                <button class="gm-info-btn" onClick="javascript:window.location.href='/details/${stop.id}'">click here to see more details</button>
                                            </div>`
                        const infowindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        const marker = new window.google.maps.Marker({
                            position: { lat: stop.lat, lng: stop.lng },
                            map: map,
                            icon: {
                                url: 'https://s3.us-east-2.amazonaws.com/selfietester/assets/stop_pin.png',
                                anchor: new window.google.maps.Point(27, 57)
                            }
                        });

                        let bool = false

                        marker.addListener('click', () => {
                            if (bool === false) {
                                infowindow.open(map, marker);
                                bool = true;
                            } else {
                                infowindow.close()
                                bool = false;
                            }
                        })
                        map.addListener('click', () => {
                            infowindow.close();
                            bool = false;
                        })
                    })
                })
        })
    }

    searchSubmit(x) {
        this.setState({ searchLat: x.lat });
        this.setState({ searchLng: x.lng})
        console.log(`lat-- state  ${(this.state.searchLat)}`)

        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: { lat: this.state.searchLat, lng: this.state.searchLng }
        });

        fetch('http://powerful-savannah-66747.herokuapp.com/api/stops')
                .then(response => {
                    return response.json()
                }).then(data => {
                    data.map((stop) => {
                        let infoContent = `<div class='gm-info-div'> 
                                                <h3 >${stop.name}</h3>
                                                <img class="gm-info-image" src=${stop.imgurl} /> 
                                                <br />
                                                <button class="gm-info-btn" onClick="javascript:window.location.href='/details/${stop.id}'">click here to see more details</button>
                                            </div>`
                        const infowindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        const marker = new window.google.maps.Marker({
                            position: { lat: stop.lat, lng: stop.lng },
                            map: map,
                            icon: {
                                url: 'https://s3.us-east-2.amazonaws.com/selfietester/assets/stop_pin.png',
                                anchor: new window.google.maps.Point(27, 57)
                            }
                        });

                        let bool = false

                        marker.addListener('click', () => {
                            if (bool === false) {
                                infowindow.open(map, marker);
                                bool = true;
                            } else {
                                infowindow.close()
                                bool = false;
                            }
                        })
                        map.addListener('click', () => {
                            infowindow.close();
                            bool = false;
                        })
                    })
                })
        // gMap = new google.maps.Map(document.getElementById('map'));
        // gMap.setZoom(13);      // This will trigger a zoom_changed on the map
        // gMap.setCenter(new google.maps.LatLng(37.4419, -122.1419));
    }

    render() {
        return (
            <div>
                <Search submit={this.searchSubmit.bind(this)} />
                <div id="map">
                </div>

            </div>)
    }
}

export default Home;