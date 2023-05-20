import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
            <div class="container">
                <NavLink class="navbar-brand text-white" to="/">Logo</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  " id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <NavLink class="nav-link " aria-current="page" to="/about">About</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink class="nav-link " to="/orders">Orders</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link " to="/grandfather">Grandfather</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;