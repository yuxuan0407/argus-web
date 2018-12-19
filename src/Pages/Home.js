import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import constants from '../constants/general';

class Home extends Component{
    fileSelectHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () =>{
        console.log(this.state.selectedFile)
        const fd = new FormData();
        fd.append('photo', this.state.selectedFile, this.state.selectedFile.name);
        axios.post(constants.host + '/login', { username: localStorage.getItem('username'), password: localStorage.getItem('password') })
        .then(res => {
            const accessToken = res.data.access_token
            console.log('acctok', accessToken)
            fd.append('access_token', accessToken)
            return axios(constants.host + '/classify', {
                method: 'post',
                headers: {
                  'Content-Type': 'multipart/form-data',
                  "Authorization": 'Bearer ' + accessToken
                },
                data: fd
              })
        })
        
        .then(res => {
            console.log('resolved', res.data);
        })
        .catch( err => {
            console.log('errored', err)
        })        
    }

      

    render(){
        return(
            <div>
            <center>
                <p className='homeText'> Welcome to Argus!</p> 
                <p className='homeText1'>Please upload a car image you want to identify!</p>
            <br />
            <br />
            <input type="file" onChange={this.fileSelectHandler}
            ref={fileInput => this.fileInput = fileInput}/>

            <button className="uploadButton" onClick={this.fileUploadHandler}>Upload</button>

            <br />
            <br />
            </center>
            
            </div>
        );
    }
}

export default Home;