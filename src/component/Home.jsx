import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MyMapComponent from './Map';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            centerLat: 33.5150,
            centerLng: -86.8000
        }
    }

    async componentDidMount() {
        await navigator.geolocation.getCurrentPosition((x) => {
                    console.log(x);
                    this.setState({centerLat: x.coords.latitude})
                    this.setState({centerLng: x.coords.longitude})
                    console.log(this.state.centerLat + '   2' + this.state.centerLng)
                })
        await fetch('http://localhost:3001/api/stops/web')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({ list: responseJson });

            })
        await this.forceUpdate();
    }

    // componentWillMount() {
    //     navigator.geolocation.getCurrentPosition((x) => {
    //         console.log(x)
    //     })
    // }

    handleMarkerClick(props){
        console.log(props + ' bobobobo');
    }

    render() {
        return <div>
            <h5 className="text-danger text-center">Birmingham, AL</h5>
            <MyMapComponent 
                stops={this.state.list}
                function={this.handleMarkerClick.bind(this)}
                lat={this.state.centerLat}
                lng={this.state.centerLng}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC02n3c0MkUtJa9-aJqcgcXiCREmJp54ig"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            {this.state.list.slice().reverse().map((x) => {
                return (
                    <div className="border col-5 mx-auto mb-2" key={x.id}>
                        <h2 className="text-center">{x.name}</h2>
                        <h5 className="text-center ">{x.description}</h5>
                        <Link className="text-center text-wrap" to={`/blog/${x.id}`}><p>more info</p></Link>
                    </div>
                )
            })}
        </div>
    }
}

export default Home;