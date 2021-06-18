import styled from '@emotion/styled'
import { useState } from 'react'
import menuItems from './menuItems';
import { stylingVariables } from './stylingVariables';
import Menu from './BurgerMenu';
import Link from 'next/link';
import Head from 'next/head';
import PayPal from './PayPal';
import DonationAmount from './DonationAmount';
import { PAYPAL_CLIENT_ID } from '../utils/constants';

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
  button {
    background: black;
    color: white;
    margin: 1rem;
  }
  .donate-btn {
    position: absolute;
    right: 1.5rem;
    top: 6rem;
  }
  @media (min-width: 900px) {
    padding: 2rem 12% 2rem 10%;
    .donate-btn {
      right: 10%;
      top: 8rem;
    }
    .donation-container {
      background: red;
      /* margin-top: 10rem; */
      position: absolute;
      left: 0;
      top: 12rem;
    }
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
  const closeCheckoutAndNav = () => {
    setNavOpen(false);
    setCheckout(false);
  }


  return (
    <Header>
      <Head>
        <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=CAD`}></script>
      </Head>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} closeCheckoutAndNav={closeCheckoutAndNav} />
      <Link href="/" onClick={() => setNavOpen(false)}>
        <Logo>
          <h1>Eunice Keitan</h1>
          <h5>Musician | Singer-Songwriter</h5>
        </Logo>
      </Link>
      <DesktopNav>
        <ul>
          {menuItems.map((item, index) => {
            // console.log("item", item) 
            return (
              <Link href={item.url} key={index}>
                <DesktopNavItem onClick={() => { setSelectedNavItem(item.url); setCheckout(false) }} key={item.index} selected={selectedNavItem === item.url ? true : false}>
                  <h3>
                    {item.name}
                  </h3>
                </DesktopNavItem>
              </Link>

            )
          })}
 
        </ul>
      </DesktopNav>
      {checkout ? (
        <div className="donation-container">


          <DonationAmount donationAmount={donationAmount} setDonationAmount={setDonationAmount} setCheckout={setCheckout} />


          {/* <PayPal amount={donationAmount} /> */}
        </div>

      ) : (
        // <button className="donate-btn" onClick={() => setCheckout(true)}>
        //   Donate!
        // </button>
        <button className="donate-btn">
          <Link href="/donate">
            Donate!
          </Link>
        </button>
      )}
    </Header>
  )
}

export default Navigation
