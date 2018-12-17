import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Redirect,Link,Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Home from './Pages/Home';
import History from './Pages/History';
import AHeader from './Pages/AHeader';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
// import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {
      loggedIn: false,
      name: "",
    }    
  }
  handleLoginClick() {
        this.setState({ loggedIn:true });
      }

  render() {
    var route = (
      <BrowserRouter>
        <div className = "App">
          <Switch>
            <Route path = "/Pages/Login" exact component = { Login } />
            <Route path = "/Pages/Register" component ={ Register } />
            {/* <Redirect to = "/Pages/Login"/> */}
          </Switch>
        </div>
      </BrowserRouter>
    ); 

    if(this.state.loggedIn) {
      route = (
        <BrowserRouter>
          <div className = "App">
            <div className = "nav">
              <AHeader/>
              <div className = "flexRow" style = {{marginLeft: "auto"}}>
                <span 
                  style = {{fontSize: "22px", marginRight: "10px"}}
                >
                  <Link 
                    to = "/Pages/Profile" 
                    style = {{color: "white"}}
                  >
                    {this.state.name}
                  </Link>
                </span>
                {/* <Button 
                  onClick={this.logout} 
                  style = {{color:'white', fontSize: "17px"}}
                >
                  Logout
                </Button> */}
              </div>
            </div>
            <Switch>
              <Route path= "/Pages/Home" exact component = { Home } />
              <Route path= "/Pages/History" exact component = { History } />
              <Route path= "/Pages/Profile" exact component = { Profile } />
            </Switch>
          </div>
        </BrowserRouter>
      ); 
    } 

    return (
      <div className="App">
        {route}
        <button onClick={this.handleLoginClick}>TEST LOG IN</button>
      </div>
    );
  }
}

export default App;
