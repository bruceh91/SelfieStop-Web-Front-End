import React, { Component } from 'react';
import Search from './Search';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stop: {}
        }
    }

    componentDidMount() {
        fetch('http://powerful-savannah-66747.herokuapp.com/api/stops/' + this.props.match.params.id)
            .then(response => {
                return response.json()
            }).then(data => {
                this.setState({ stop: data })
                console.log(this.state.stop);
                console.log(this.state.id)
            })
    }

    render() {
        let stop = this.state.stop

        return (
            <div>
                {/* <Search /> */}
                <div className='d-images-container'>
                    <div className='d-images-div'>
                        <div className='d-image-box' />
                        <img className='d-images-image' src={stop.imgurl} alt="stop" /> 
                    </div>
                    <div className='d-map-box'>
                        <img className='d-images-map' src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x400&maptype=roadmap&key=AIzaSyCEDPTevM8MfXfXYRxcmY2MY8tF0ZjaOhk&format=png&visual_refresh=true&markers=icon:https://s3.us-east-2.amazonaws.com/selfietester/assets/stop_pin.png%7Cshadow:true%7C${stop.lat},${stop.lng}`} alt={`Google Map of ${stop.name}`} />
                    </div>
                </div>
                <div className='d-text'>
                    <h1>{stop.name}</h1>
                    <p><small>{stop.city}</small></p>
                    <h5>{stop.description}</h5>
                </div>

            </div>
        )
    }
}

export default Contact;