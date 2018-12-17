import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AMenu.css';


class AMenu extends Component {


    render() {
        
        const backgroundUrl = `url(${this.props.logo})` 


        const lists = (
            <div className ='menu__link'>

                  <Link to='/Pages/Home'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/Pages/History'>History</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/Pages/Profile'>Profile</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/Pages/Logout'>Logout</Link> 

              </div>
          );
  
        return (
            <nav className="menu">
                <h1 style={{
                backgroundImage: backgroundUrl }} className="menu__logo">Argus Menu</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {lists}
                    </ul>

                </div>
            </nav>
        );
    }
}

export default AMenu;