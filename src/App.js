import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dash from './Pages/Dash';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div className="App">
          <Route path = "/" exact component = { Login } />
          <Route path = "/Pages/Register" exact component = { Register } />
          <Route path= "/Pages/Dash" exact component = { Dash } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
