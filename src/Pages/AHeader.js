import React, { Component } from 'react';
import ArgusMenu from './AMenu';
import ArgusLogo from '../ArgusLogo.png';

class ArgusHeader extends Component {

    render() {
  
      return (
        <div>
            <center>
            <ArgusMenu logo={ArgusLogo} />  
            </center>
        </div>
      );
    }  
}

export default ArgusHeader;