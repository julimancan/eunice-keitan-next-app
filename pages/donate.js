import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import DonationAmount from "../components/DonationAmount";
import { getSiteSettings } from "../lib/api";
import { useGlobalState } from "../state";



export async function getStaticProps() {
  const siteConfig = await getSiteSettings();
  return {
    props: {
      siteConfig,
    },
  };
}

const Donate = ({ siteConfig }) => {
  const setSiteSettings = useGlobalState("siteSettings")[1];
  const [colors, setColors] = useGlobalState("colors");
  const [donationAmount, setDonationAmount] = useState(10);
  useEffect(() => {
    setSiteSettings(siteConfig[0]);
    setColors({
      ...colors,
      menuBackgroundColor: "white",
      menuTextColor: "black",
      menuBarColor: "black"
    })
  }, []);
  return (
      <main>
        <DonationAmount
          donationAmount={donationAmount}
          setDonationAmount={setDonationAmount}
        />
      </main>
  );
};

export default Donate;
