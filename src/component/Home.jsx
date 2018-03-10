import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MyMapComponent from './Map';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/stops/web')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({ list: responseJson });

            })
    }

    render() {
        return <div>
            <h5 className="text-danger text-center">Birmingham, AL</h5>
            <MyMapComponent 
                stops={this.state.list}
                googleMapURL="https://maps.googleapis.com/maps/api/js"
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