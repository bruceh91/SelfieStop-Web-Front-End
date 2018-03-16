import React, { Component, Fragment } from 'react';
import Search from './Search';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            display: false
        }
    }

    componentWillMount() {
        fetch('http://powerful-savannah-66747.herokuapp.com/api/stops/')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({ list: responseJson });
                console.log('1')
            })
    }

    onClick(id){
        window.location = `details/${id}`
    }

    render() {
        console.log(this.state.list[0])
        return (
            <Fragment>                
                {this.state.list.map((stop, index) => {
                    return (
                        <div key={index}  onClick={() => this.onClick(stop.id)} className='brow-main-div'>
                            <div className='brow-sub-div' />
                                <img src={stop.imgurl} className='brow-img' alt="Card cap" />
                                    <div className="brow-text-div">
                                    <h2>{stop.name}</h2>
                                    <h6>{stop.city}</h6>
                                    <p>{stop.description}</p>
                                    </div>
                        </div>                    
                    )
                })}    
            </Fragment>
        )
    }
}

export default Home;