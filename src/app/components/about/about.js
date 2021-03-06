import React, { Component } from 'react';

import Header from 'app/components/common/header/header';


const About = () => (
    <div className="app-comp--about">
        <Header className="l-one-col"></Header>
        <main className="l-one-col">
            <h1>About CoStar</h1>
            <article>
                <h2>You're one step ahead.</h2>
                <p>At CoStar, we’re in the business of equipping our clients with what they need to succeed.</p>
                <p>We create opportunity through a combination of reliable tools, resources, and deep understanding on over 5 million commercial real estate properties in today’s market. Find relevant information, meet the right people, and make the deals that are critical to your success.</p>
                <p>Whatever your business, we’re here to help you reach your goals, and keep you moving ahead with confidence.</p>
            </article>
        </main>
    </div>
);

export default About;