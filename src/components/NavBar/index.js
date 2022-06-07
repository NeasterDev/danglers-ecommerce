import React from 'react';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand'>Danglers</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Purchase our Danglers</a>
                        </li>
                        {/*
                        just a reminder that i can disable the links in the navbar
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
}