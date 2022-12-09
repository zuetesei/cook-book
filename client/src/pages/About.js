import React, { useState } from 'react';
import OnlyCooks from '../assets/onlycooks.png';
import '../styles/About.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function About() {
    // object
  const [donation] = useState({
    name:"Donation",
    price: 500,
    description: 'Small donation'
  })

  async function handleToken(token, addresses) {
    const response = await axios.post('http://localhost:3000/checkout', {token, donation})

    // take response 
    console.log(response.status)
    let error, status
    try {

    } catch (error) {
      console.log(error)
    }
  }

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
            <a href="https://github.com/jonathonb1"> Jon </a>,
            <a href="https://github.com/ryanpjhickey"> Ryan </a> &
            <a href="https://github.com/zuetesei"> Zue Tesei </a>

            <h2>Donations</h2>
            <div className="Donate">
      <div className="container">
        <h1 className="text-center">Do you like what we do and would like to support? Please consider donating</h1>
        <div className='form-group container'>
          <StripeCheckout 
          className='center'
          stripeKey="pk_test_51MCegRHNHirOlOeXhAaOeJsW4Inb4cB6s7TPew0b5OA2jWJtZtvCqBdu36zp9VXuM7AdroPmbzE2tRl8swTzHBxO00AUuwpY78"
          token={handleToken}
          amount={donation.price}
          name={donation.name}
          billingAddress
          shippingAddress
          />
        </div>
      </div>
    </div>
        </div>
    )
}

export default About; 