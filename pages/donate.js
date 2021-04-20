import { useState } from "react";
import DonationAmount from "../components/DonationAmount"


const Donate = () => {
  
  const [donationAmount, setDonationAmount] = useState(10);
  return (
    <main>
      <DonationAmount donationAmount={donationAmount} setDonationAmount={setDonationAmount} />
    </main>
  )
};

export default Donate;
