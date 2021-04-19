import styled from '@emotion/styled';
import React, { useState } from 'react'
import PayPal from './PayPal'
import { stylingVariables } from './stylingVariables';

const DonationContainer = styled.div`
  position: absolute;
  background: ${stylingVariables.menuBackgroundColor};
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%
  }
`;


const DonationAmount = ({ donationAmount, setDonationAmount, setCheckout }) => {
  const [openPaypal, setOpenPaypal] = useState(false);
  const inputHandler = (event) => {
    setDonationAmount(event.target.value);
    console.log(`donationAmount`, donationAmount)
  }
  return (
    <DonationContainer>
      {openPaypal ? (

        <PayPal donationAmount={donationAmount} setOpenPaypal={setOpenPaypal}/>
      ) : (
      <section>
        <label for="donation-amount">How much would you like to donate?</label>
        <input type="number" id="donation-amount" name="donation-amount" onChange={inputHandler} value={donationAmount} />
        <button onClick={() => setOpenPaypal(true)}>Donate ${donationAmount}</button>
        <button onClick={() => setCheckout(false)}> close </button>
      </section>
      )}
    </DonationContainer>
  )
};

export default DonationAmount;
