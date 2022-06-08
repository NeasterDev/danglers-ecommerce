import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand'>Danglers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#about">About Us</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/store'>Purchase Our Danglers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}