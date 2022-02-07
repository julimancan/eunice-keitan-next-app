import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

const PayPaylContainer = styled.div`
  /* background: red; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: scroll; */
`;

const PayPal = ({ donationAmount, setOpenPaypal }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "donation",
              amount: {
                currency_code: "CAD",
                value: donationAmount

              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log("Succesful order: ", order, "this is where you should send info to db!");
        setOpenPaypal(false);
      },
      onError: err => console.log(`err`, err)
    }).render(paypal.current)
  }, [])

  return (
    <PayPaylContainer>
      <div ref={paypal}></div>
      <button onClick={() => setOpenPaypal(false)}>Go Back to change amount</button>
    </PayPaylContainer>
  )
};

export default PayPal;
