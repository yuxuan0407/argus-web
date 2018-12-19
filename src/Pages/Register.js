import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './Login.css';
import ArgusLogo from '../ArgusLogo.png';
import constants from '../constants/general';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            checkPassword:''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    createUser = () =>{
        console.log(this.state.username, this.state.password)
        axios.post(constants.host + '/register', {
            'username': this.state.username,
            'password': this.state.password
        })
        .then(data => {
          console.log(data)
          alert('Registered Successfully! You can now Log In!')
          const credit_var = data.credit
          localStorage.setItem('access_token', data.data.access_token)
        }) 
        .catch(err => {
          console.log(err)
          alert (err.message)
        })
    }

    render() {
        return (
            <div data-aos = "" className = "Home">
                <img src  = {ArgusLogo} alt = "logo"/>

                <Card
                    raised = {true}
                    className = "signUp"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                <Typography
                    component="h2"
                    variant="display2"
                    gutterBottom = {true}
                    style={{color:'black'}}
                >
                    Create your account
                </Typography>
                    <form>
                        < TextField className = ""
                            placeholder = "Userame"
                            onChange={this.handleChange('username')}
                            />

                        <br/>

                        < TextField
                            type = "password"
                            className = ""
                            placeholder = "Password"
                            style = {{marginTop:'15px'}}
                            onChange={this.handleChange('password')}
                        />

                        <br/>

                        < TextField
                            type = "password"
                            className = ""
                            placeholder = "Confirm Password"
                            style = {{marginTop:'15px'}}
                            onChange={this.handleChange('checkPassword')}
                        />
                        
                        <br/>

                        <Button
                            onClick={this.createUser}
                            variant = "outlined"
                            style = {{marginTop:'15px'}}
                        >
                            Sign Up
                        </Button>

                    </form>

                    <p>Already have an account? </p>
                    <Link
                        to = '/'
                        variant = "outlined"
                        style = {{marginTop:'15px'}}
                    >
                        Log In Here
                    </Link>
                </Card>
            </div>
        );
    }
}

export default Register;