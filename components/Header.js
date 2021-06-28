import styled from '@emotion/styled'
import { useState } from 'react'
import menuItems from './menuItems';
import { stylingVariables } from './stylingVariables';
import Menu from './BurgerMenu';
import Link from 'next/link';
import Head from 'next/head';
import DonationAmount from './DonationAmount';
import { useRouter } from 'next/router'


const DesktopNav = styled.nav`
  /* background: red; */
  /* width: fit-content; */
  /* position: absolute; */
  display: none;
  ul {
    display: flex;
    list-style: none;
    /* margin-right: 2rem; */
  }
  @media (min-width: 1068px) {
    display: block;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ currentPage }) => currentPage === "/" ? "none" : stylingVariables.videosPageBackground};
  width: 100vw;
  -webkit-box-shadow: 3px 1px 5px 3px #ccc;  
  -moz-box-shadow:    3px 1px 5px 3px #ccc;  
  box-shadow:         3px 1px 5px 3px #ccc;  
  padding: 2rem;
  position: fixed;
  z-index: 100;
  
  .donate-btn {
    color: ${stylingVariables.homePageTextColor};
    padding: .1rem .5rem;
    opacity: .8;
    position: absolute;
    right: 2.5rem;
    bottom: .5rem;
    transition: .2s;
    font-size: clamp(.5rem, -0.875rem + 5.333vw, 1rem);

    a {
      font-family: "PrequelDemo";
    }
    &:hover {
      border: 2px solid #755B49;
      /* border-radius: 5px; */
      color: white;
      background: #755B49;
    }
  }
  @media (min-width: 600px) {
    .donate-btn {
      bottom: 2rem;
    }
  }
  @media (min-width: 1068px) {
    padding: 2rem 12% 2rem 10%;
    .donate-btn {
      /* right: 10%; */
      /* top: 8rem; */
      /* position: relative; */
      bottom: 4.3rem;
      right: 4.5rem;
    } 
    .donation-container {
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
  cursor: pointer;
  margin-left: 1rem;
  text-transform: uppercase;
  margin: 0 2rem;
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ selected }) => !selected ? stylingVariables.menuBarColor : stylingVariables.homePageTextColor};
    &:hover {
      color: ${stylingVariables.homePageTextColor};
    }
  }
  transition: font-size .2s;
`;

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("/");
  const [checkout, setCheckout] = useState(false);
  const [donationAmount, setDonationAmount] = useState(10);
  const router = useRouter();
  const currentPage = router.pathname;


  const closeCheckoutAndNav = () => {
    setNavOpen(false);
    setCheckout(false);
  }


  return (
    <Header currentPage={currentPage}>
      <Head>
        <link rel="preload" href="/fonts/Oceanside-Typewriter.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/PrequelDemo-Regular.ttf" as="font" crossOrigin=""/>
        <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=CAD`}></script>
        <link rel="shortcut icon" href="/EuniceKeitan-LYWD.ico" />
        <title>Eunice Keitan</title>
      </Head>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} closeCheckoutAndNav={closeCheckoutAndNav} />
      <Link href="/" onClick={() => setNavOpen(false)}>
        <Logo>
          <h1>Eunice Keitan</h1>
          <h2>Musician | Singer-Songwriter</h2>
        </Logo>
      </Link>
      <DesktopNav>
        <ul>
          {menuItems.map((item, index) => {
            // console.log("item", item) 
            return (
              <Link href={item.url} key={index}>
                <DesktopNavItem onClick={() => { setSelectedNavItem(item.url); setCheckout(false) }} key={item.index} selected={selectedNavItem === item.url ? true : false}>
                  <h2>
                    {item.name}
                  </h2>
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
            Donate
          </Link>
        </button>
      )}
    </Header>
  )
}

export default Navigation
