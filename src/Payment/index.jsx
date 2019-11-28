import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const config = require('./config')

//thats your publishable jey obtained form strip
//for testing use testing key

const STRIPE_PUBLISHABLE = config.STRIPE_PUBLISHABLE;

const PAYMENT_SERVER_URL = '/payment'

const CURRENCY = 'EUR'

const fromEuroToCent = amount => amount * 10;

const successPayment = data => {
  debugger
  alert("Payment Successful")
  console.log(data)
}

const errorPayment = data => {
  debugger
  alert("Payment Error")
  console.error(data)
}

const onToken = (amount, description) => token =>
  axios.post('')
//finish up later on