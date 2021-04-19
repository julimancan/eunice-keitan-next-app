import React, { useEffect, useRef } from 'react'

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
        console.log("Succesful order: ", order);
      },
      onError: err => console.log(`err`, err)
    }).render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
      <button onClick={() => setOpenPaypal(false)}>Go Back to change amount</button>
    </div>
  )
};

export default PayPal;
