import React, { useState ,useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from "axios"
import StipeCheckout from "react-stripe-checkout";
import "./Pay.css"

const KEY = "pk_test_51Lg00fLHTb6YwyvAFVKB9GRIenmbei847pnSNWLqI4j476WBymUy7GORtGwOrUdPXVbEzDHoNfcLBIDBjdq5geHE00Mru9z1hT"



const Pay = () => {
    
    const [stripeToken ,setStripeToken] = useState(null)

    const onToken = (token) =>{
        console.log(token);
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.get
                ("http://localhost:5000/api/checkout/payment",
                    {
                    tokenId: stripeToken.id,
                    amount : 4000,
                    }
                );
                console.log(res.data);
            } catch(err) {
                console.log(err + "useEffect problem");
            }
        };
        if(stripeToken) {
            return makeRequest
        }
          
    }, [stripeToken]);

  return (
    <div className='pay-div'>
    <StipeCheckout name="Kuper's Shop" 
    billingAddress
    shippingAddress
    description='Your total is 40$'
    amount = {4000}
    token = {onToken}
    stripeKey = {KEY}
    >
      <button className='pay-button' >Pay Now</button>
    </StipeCheckout>
    </div>
    
  )
}

export default Pay;
