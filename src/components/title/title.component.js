import React from 'react';
import './title.style.css';
import logo from './logo-ljm.jpg';


class Title extends React.Component {
    render() {
        return(
            <h1 className="margin0"><img src={logo}  alt='logo' /></h1>
        );
    }
}

export default Title;