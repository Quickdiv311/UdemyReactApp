import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hys1HD1i8q0xGdO6DXFNFLOY7TBLYhZXfSEsjBJtaKf7GtIcGIpTspCY4IMuMlRHjeFhHvEp7rsAvRhilC8QIoM00Vmf8o0Ah';

    const onToken = token => {
        console.log(token);
        alert("Payment Success");
    }

    return(
        <StripeCheckout
          labe="Pay Now"
          name="TryNCart"
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your Total is: $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;