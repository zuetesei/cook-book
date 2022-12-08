import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Donate/index";
import "../styles/Stripe.css";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MCegRHNHirOlOeXhAaOeJsW4Inb4cB6s7TPew0b5OA2jWJtZtvCqBdu36zp9VXuM7AdroPmbzE2tRl8swTzHBxO00AUuwpY78");

export default function Donate() {
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
    <div className="Donate">
      <div className="container">
        <h1 className="text-center">$5.00 Donation</h1>
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
  )
}