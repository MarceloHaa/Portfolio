import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo1.png';

const Navbar = ({ scrollToContact }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="logo-button">
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                </a>
            </div>

            <button onClick={scrollToContact} className="navbar-contact">
                Contato
            </button>
        </nav>
    );
};

export default Navbar;
