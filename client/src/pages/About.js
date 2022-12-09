import React from 'react';
import OnlyCooks from '../assets/onlycooks.png';
import '../styles/About.css';

function About() {
    return (
        <div className='about-section'>
            <img className="only-cooks-logo" src={OnlyCooks} alt="Only Cooks logo"></img>
            <h2> Project Description </h2>
            <p> Only Cooks is a blogging site that helps to connect people who are interested in cooking, creating, and sharing recipes! Come dicuss anything with your fellow chefs about any types of cuisine, anytime, any place, for any reason! </p>
            <h2> Technologies </h2>
            <p> HTML, CSS, JavaScript, React, GraphQL, Node.js, Heroku </p>
            <h2> Contributors </h2>
            <a href="https://github.com/monkeyd87"> Dennis Jackson </a>,
            <a href="https://github.com/idahuy"> Huy Nguyen </a>,
            <a href="https://github.com/jonathonb1"> Jonathon Biala </a>,
            <a href="https://github.com/ryanpjhickey"> Ryan Hickey </a> &
            <a href="https://github.com/zuetesei"> Zue Tesei </a>
        </div>
    )
}

export default About;
