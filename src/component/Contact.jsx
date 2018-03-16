import React, { Component } from 'react';
// import { render } from 'react-dom';
import Bruce from './assets/GN3I7558.JPG';
import Mat from './assets/GN3I7569.JPG';
import Jayce from './assets/GN3I7565.JPG'
import Github from './assets/jIaHxwz.png';
import LinkedIn from './assets/Linkedin.png';



class Contact extends Component {


    render() {


        return (
            <div>

                <div className='con-main-dev' >
                    <div className='con-shadow-div' />
                    <img src={Mat} className='con-img' alt="Mathew" />
                    <div className='con-text-div'>
                        <h4>Matthew Aderhold</h4>
                        <p><small>MatthewAderhold@gmail.com</small></p>
                        <img className='github' src={Github} alt="GitHub" />
                        <p ><small>github.com/AderCode </small></p>
                        <img className='linked' src={LinkedIn} alt="LinkedIn" />
                        <p><small> linkedin.com/in/matthew-aderhold </small></p>
                        <h4 className='con-bottom'> Responsibilities </h4>
                        <p className='con-bottom'><small>Created Front-End Mobile Framework in React-Native to develop mobile app.</small></p>
                    </div>
                </div>

                <div className='con-main-dev' >
                    <div className='con-shadow-div' />
                    <img src={Bruce} className='con-img' alt="Bruce" />
                    <div className='con-text-div'>
                        <h4>Bruce Harris</h4>
                        <p><small>bruceharris91@gmail.com</small></p>
                        <img src={Github} className='github' alt="GitHub" />
                        <p><small>github.com/bruceh91 </small></p>
                        <img src={LinkedIn} className='linked' alt="LinkedIn" />
                        <p><small> linkedin.com/in/bruceevanharris </small></p>
                        <h4 className='con-bottom'> Responsibilities </h4>
                        <p className='con-bottom'><small>Used nodejs and express to create the back-end API. Created the front-end of the website.</small></p>
                    </div>
                </div>

                <div className='con-main-dev page-bottom' >
                    <div className='con-shadow-div' />
                    <img src={Jayce} className='con-img' alt="Jayce" />
                    <div className='con-text-div'>
                        <h4>Jayce Edwards</h4>
                        <p><small>jedwards1008@gmail.com</small></p>
                        <img src={Github} className='github' alt="GitHub" />
                        <p><small>https://github.com/jaceyedwards </small></p>
                        <img src={LinkedIn} className='linked'  alt="LinkedIn" />
                        <p><small> linkedin.com/in/jacey-edwards </small></p>
                        <h4 className='con-bottom' > Responsibilities </h4>
                        <p className='con-bottom' ><small>Created and maintained MySQL database.</small></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;