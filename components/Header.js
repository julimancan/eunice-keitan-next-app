import styled from '@emotion/styled'
import { useState } from 'react'
import menuItems from './menuItems';
import { stylingVariables } from './stylingVariables';
import Menu from './BurgerMenu';
import Link from 'next/link';
import { PayPalButton } from "react-paypal-button-v2";
import Head from 'next/head';
import PayPal from './PayPal';
import DonationAmount from './DonationAmount';

const DesktopNav = styled.nav`
  /* background: red; */
  /* width: fit-content; */
  /* position: absolute; */
  display: none;
  ul {
    display: flex;
    list-style: none;
    /* margin-right: 2rem; */
    li {
      cursor: pointer;
      margin-left: 1rem;
      text-transform: uppercase;
    }
  }
  @media (min-width: 900px) {
    display: block;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 100vw;
  -webkit-box-shadow: 3px 1px 5px 3px #ccc;  
  -moz-box-shadow:    3px 1px 5px 3px #ccc;  
  box-shadow:         3px 1px 5px 3px #ccc;  
  padding: 2rem;
  position: fixed;
  z-index: 100;

  @media (min-width: 900px) {
    padding: 2rem 12% 2rem 10%;
  }

`;

const Logo = styled.div`
  cursor: pointer;
`;

const DesktopNavItem = styled.li`
  color: ${stylingVariables.menuTextColor};
  transition: font-size .2s;
  border-bottom:  ${({ selected }) => !selected ? "none" : stylingVariables.menuBottomBorder};
  &:hover {
    border-bottom: ${stylingVariables.menuBottomBorder};
  }
`;

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("/");
  const [checkout, setCheckout] = useState(false);
  const [donationAmount, setDonationAmount] = useState(10);

  return (
    <Header>
      <Head>
        <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=CAD`}></script>
      </Head>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <Link href="/" onClick={() => setNavOpen(false)}>
        <Logo>
          <h1>Eunice Keitan</h1>
          <h5>Musician | Singer-Songwriter</h5>
        </Logo>
      </Link>
      <DesktopNav>
        <ul>
          {menuItems.map((item) => {
            // console.log("item", item) 
            return (
              <Link href={item.url} key={item.id}>
                <DesktopNavItem onClick={() => { setSelectedNavItem(item.url); console.log(selectedNavItem) }} key={item.index} selected={selectedNavItem === item.url ? true : false}>
                  <h3>
                    {item.name}
                  </h3>
                </DesktopNavItem>
              </Link>

            )
          })}
          {/* <PayPalButton 
              amount="0.01"
              onSuccess={(details, data) => {
                console.log(`details`, details)
                alert("Transaction completed by " + details.payer.name.given_name);
                
              }}
            

            /> */}
        </ul>
      </DesktopNav>
      {checkout ? (
        <>


          <DonationAmount donationAmount={donationAmount} setDonationAmount={setDonationAmount} setCheckout={setCheckout}/>


          {/* <PayPal amount={donationAmount} /> */}
        </>

      ) : (
        <button onClick={() => setCheckout(true)}>
          Donate!
        </button>
      )}
    </Header>
  )
}

export default Navigation
