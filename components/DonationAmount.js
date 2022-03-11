import styled from "@emotion/styled";
import React, { useState } from "react";
import { useGlobalState } from "../state";
import PayPal from "./PayPal";

const DonationContainer = styled.div`
  background: ${({ colors }) => colors.menuBackgroundColor};
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const DonationAmount = ({ donationAmount, setDonationAmount, setCheckout }) => {
  const [colors] = useGlobalState("colors");
  const [siteSettings] = useGlobalState("siteSettings");
  const [openPaypal, setOpenPaypal] = useState(false);
  const inputHandler = (event) => {
    setDonationAmount(event.target.value);
  };
  return (
    <DonationContainer colors={colors} siteSettings={siteSettings}>
      {openPaypal ? (
        <PayPal donationAmount={donationAmount} setOpenPaypal={setOpenPaypal} />
      ) : (
        <section>
          <label>How much would you like to donate?</label>
          <input
            type="number"
            id="donation-amount"
            name="donation-amount"
            onChange={inputHandler}
            value={donationAmount}
          />
          <button onClick={() => setOpenPaypal(true)}>
            Donate ${donationAmount}
          </button>
        </section>
      )}
    </DonationContainer>
  );
};

export default DonationAmount;
