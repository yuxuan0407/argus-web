import React, { Component } from 'react';
import Home from './Home';
import History from './History';
import AHeader from './AHeader';
import Logout from './Logout';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

class Dash extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <AHeader/>
                <Switch>
                <Route path= "/Pages/Home" exact component = { Home } />
                <Route path= "/Pages/History"  component = { History } />
                <Route path= "/Pages/Logout"  component = { Logout } />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default Dash;