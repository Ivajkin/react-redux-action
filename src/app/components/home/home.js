import './home.css';

import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Home= () => (
    <main className="app-comp--home l-one-col">
        <div className="home-inner">
            <h1>The best real estate service</h1>
            <nav>
                <Link to='/realty-map'>
                    Map
                </Link>
                <Link to='/about'>
                    About us
                </Link>
            </nav>
        </div>
    </main>
);

export default Home;
