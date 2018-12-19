import React, { Component } from 'react';
import axios from 'axios';
import constants from '../constants/general';


class Logout extends Component {
    componentDidMount() {
        axios.post(constants.host + '/logout')
            .then(data => {
                alert(data.msg)
            })
            .catch(err => {
                alert(err.msg)
            })
    }

    render(){
        return(
            <div className='homeText1'>
                <p> You have logged out!</p>
            </div>
        );
    }
}

export default Logout;