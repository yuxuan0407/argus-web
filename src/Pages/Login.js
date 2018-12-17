import React, { Component } from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ArgusLogo from '../ArgusLogo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
       email:'',
       password:''

    }
//    this.handleChange = this.handleChange.bind(this);
//    this.login = this.login.bind(this);
//    this.checkLoggedIn = this.checkLoggedIn.bind(this);
}

  handleChange = name => event => {
  this.setState({
      [name]: event.target.value
  });
  }

//   componentDidMount(){
//     this.checkLoggedIn();
//   }

//   checkLoggedIn(){
//     var prop = this.props;
//     firebase.auth().onAuthStateChanged(function(user) {
//        if (user) {
//           prop.history.push('/dashboard');
//        }
//     });
//   }

//   login(e){
//      e.preventDefault();
//      var prop = this.props;
//      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//      .then(function(){
//         prop.history.push('/dashboard');
//      })
//      .catch(function(error) {
//         alert(error.message);
//      });
//   }

  handleOnClick = () =>{
      this.setState(<Link to ='/Pages/Dash'/> )
  }
  render() {

    return (
      <div data-aos="" className="Home">
        <img src  = {ArgusLogo} alt = "logo"/>

        
        <Card
          raised = {true}
          className = "signIn"
          data-aos = "fade-down"
          data-aos-easing = "linear"
          data-aos-duration = "500"
        >
          <form>
            <Typography
              component="h2"
              variant="display2"
              gutterBottom = {true}
              style={{color:'black'}}
            >
              Log In
            </Typography>
            <TextField
              type = "email"
              className=""
              placeholder ="Enter Your Email"
              onChange={this.handleChange('email')}
            />
            <br/>
            <TextField
              type = "password"
              style={{marginTop:'15px'}}
              placeholder ="Enter Your Password"
              onChange={this.handleChange('password')}
            />
            <br/>
            <Button
              onClick={this.handleOnClick}
              type = 'submit'
              variant="outlined"
              style = {{marginTop:'15px'}}
            >
              Log In
            </Button>
          </form>
          <p>New User? </p>
          <Link
            to = '/Pages/Register'
            variant = "outlined"
            style = {{marginTop:'14px'}}
          >
            Register Here
          </Link>
        </Card>
      </div>

    );
  }
}

export default Login;