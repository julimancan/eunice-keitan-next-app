import styled from '@emotion/styled';
import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useEffect, useRef, useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PAYPAL_CLIENT_ID } from '../utils/constants';
import Head from 'next/head';

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
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");

  //create a paypal order
  // const createOrder = (data, actions) => {
  //   return actions.order
  //     .create({
  //       purchase_units: [
  //         {
  //           amount: {
  //             // description: "donation",
  //             amount: {
  //               // currency_code: "CAD",
  //               value: donationAmount,
  //             },
  //           },
  //         },
  //       ],
  //       // remove application_context if users need to add shipping address
  //       application_context: {
  //         shipping_preference: "NO_SHIPPING",
  //       },
  //     })
  //     .then((orderID) => {
  //       setOrderID(orderID);
  //       return orderID;
  //     })
  // };

  // const onApprove = (data, actions) => {
  //   return actions.order.capture().then((detailes) => {
  //     const { payer } = details;
  //     setBillingDetails(payer);
  //     setPaymentSucceeded(true);
  //   }).catch((err) => { setPaypalErrorMessage("Something went wrong: ", err); console.log(paypalErrorMessage) })
  // };

  useEffect(() => {
    console.log(`in use effect`)
    console.log(`window.paypal`, window.paypal)
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
      {/* <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID.clientId }}>

        <PayPalButtons style={{
          color: "blue",
          shape: "pill",
          label: "pay",
          tagline: "false",
          layout: "horizontal",
        }}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider> */}
      <button onClick={() => setOpenPaypal(false)}>Go Back to change amount</button>
    </PayPaylContainer>
  )
};

export default PayPal;
