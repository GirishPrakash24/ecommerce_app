import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K71yWSJ6kxKD6ymsI89sVMx2i3LPmK7OyPRBPQlCCcrgSkhUYMupW0eb0j3pkjeAaunF9W87vD14fMW29dkZKAk00IMN3kUaN';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Ecommerce App"
            billingAddress
            shippingAddress
            imgae='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton