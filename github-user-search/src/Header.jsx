import React from 'react' ;
import { Link } from 'react-router-dom' ;
import './Header.css' ;

const Header = () => {
    return (
        <header>
            <h1>MEYER</h1>
            <div className='header-right'>
                <Link to="/">
                    <i className="fas fa-home"></i>
                </Link>
            </div>
        </header>
    );
};

export default Header ;

