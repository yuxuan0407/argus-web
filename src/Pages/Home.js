import React, { Component } from 'react';
import axios from 'axios';
import Camera from 'react-camera';
import './Home.css';

class Home extends Component{
    fileSelectHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('null', fd)
        .then(res => {
            console.log(res);
        });
    }

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
      }
    
      takePicture() {
        this.camera.capture()
        .then(pic => {
            const blobFileURL = URL.createObjectURL(pic)
            // Fetch the blob from the blob file url
            fetch(blobFileURL)
            .then(maybe_a_blob => {
                // The blob has been fetched, now attach it as an image to FormData to upload
                // and attaach to the body of the request

                console.log(maybe_a_blob)
                // fetch('http://54.39.185.15:3002/classify', {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //     },
                //     body: formData
                // })
                // .then(results => {
                    // Deal with the JSON response from the server
                //     console.log(results)
                // })
            })
            // fetch('http://54.39.185.15:3002/classify', {
            //     method: 'POST',
            //     body: 
            // })
        //   this.img.src = URL.createObjectURL(pic);
        //   this.img.onload = () => { URL.revokeObjectURL(this.src); }
        })
      }
      

    render(){
        return(
            <center>
            <Camera
            style={{width: 500, height: 500}}
            ref={(cam) => {this.camera = cam;}}/>
            
            <button className="captureButton"
            onClick={this.takePicture}> Capture </button>

            <br />
            <br />
            <text > OR </text>
            <br />
            <br />
            <input type="file" onChange={this.fileSelectHandler}
            ref={fileInput => this.fileInput = fileInput}/>

            <button className="uploadButton" onClick={this.fileSelectHandler}>Upload</button>
            <br />
            <br />
            </center>
        );
    }
}

export default Home;