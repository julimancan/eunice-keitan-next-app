import Head from "next/head";
import { useState } from "react";
import DonationAmount from "../components/DonationAmount"
import { PAYPAL_CLIENT_ID } from "../utils/constants";


const Donate = () => {

  const [donationAmount, setDonationAmount] = useState(10);
  return (
    <div>

    
      <main>
        <DonationAmount donationAmount={donationAmount} setDonationAmount={setDonationAmount} />
      </main>
    </div>
  )
};

export default Donate;
