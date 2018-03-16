import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: 'Birmingham, AL' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        console.log(`event--${event}`)

        console.log(`geocode--${this.state.address}`)
        geocodeByAddress(this.state.address)
            .then(results => {
                console.log(`results--- ${results}`)
                // this.props.submit(results[0])
                getLatLng(results[0])
            })
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    handleEnter = (address) => {
        geocodeByAddress(address, (err, { lat, lng }, results) => {
            if (err) { console.error('Error'); return; }
            let latLng={lat, lng}
            this.props.submit(latLng)
            console.log("Geocode success" + lat)
        })
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }
        console.log(inputProps)

        return (
            <div>
                <form className='home-search' onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={this.handleEnter} />
                </form>
            </div>
        )
    }
}

export default Search;