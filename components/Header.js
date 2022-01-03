import styled from '@emotion/styled'
import { useState } from 'react'
import menuItems from './menuItems';
import Menu from './BurgerMenu';
import Link from 'next/link';
import Head from 'next/head';
import DonationAmount from './DonationAmount';
import { useRouter } from 'next/router';
import { useGlobalState } from '../state';
import { urlFor } from '../lib/api';


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
  background: ${({ currentPage, colors }) => currentPage === "/" ? "none" : colors.videosPageBackground};
  width: 100vw;
  -webkit-box-shadow: 3px 1px 5px 3px #ccc;  
  -moz-box-shadow:    3px 1px 5px 3px #ccc;  
  box-shadow:         3px 1px 5px 3px #ccc;  
  padding: 2rem;
  position: fixed;
  z-index: 100;
  
  .donate-btn {
    color: ${({colors}) => colors.homePageTextColor};
    padding: 0 .8rem;
    opacity: .7;
    position: absolute;
    right: 2.5rem;
    bottom: .5rem;
    transition: .2s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(.5rem, -0.875rem + 6.333vw, 1rem);
    span {
      font-family: "PrequelDemo";
    }
    &:hover {
      border: 2px solid #755B49;
      /* border-radius: 5px; */
      color: white;
      background: #755B49;
      cursor: pointer;
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
    color: ${({ selected, colors, siteSettings }) => !selected ? siteSettings.menuTextColor || colors.menuBarColor : colors.homePageTextColor};
    &:hover {
      color: ${({colors}) => colors.homePageTextColor};
    }
  }
  transition: font-size .2s;
`;

const Navigation = () => {
  const [siteSettings] = useGlobalState("siteSettings");
  const [colors] = useGlobalState("colors");

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
  // if (siteSettings[0]) 


  return (
    <Header currentPage={currentPage} colors={colors}>
      {/* {siteSettings[0].headingFonts && ( */}
        <Head>
          <link rel="preload" href="/fonts/Oceanside-Typewriter.ttf" as="font" crossOrigin=""/>
          <link rel="preload" href="/fonts/PrequelDemo-Regular.ttf" as="font" crossOrigin=""/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.headingFonts || ""}&display=optional`} rel="stylesheet" />
          <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.menuFont}&display=optional`} rel="stylesheet" />
          <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.paragraphFonts}&display=optional`} rel="stylesheet" />
          <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.subtitleFonts}&display=optional`} rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
          <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=CAD`}></script>
          <title>{siteSettings.title}</title>
          <link rel="shortcut icon" href={siteSettings.favicon && urlFor(siteSettings.favicon).width(10).url()} />
        </Head>
      {/* )} */}
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} closeCheckoutAndNav={closeCheckoutAndNav} />
      <Link href="/" onClick={() => setNavOpen(false)}>
        <Logo>
          <h1>{siteSettings.title}</h1>
          <h2>{siteSettings.description}</h2>
        </Logo>
      </Link>
      <DesktopNav>
        <ul>
          {menuItems.map((item, index) => {
            // console.log("item", item) 
            return (
              <Link href={item.url} key={index}>
                <DesktopNavItem colors={colors} siteSettings={siteSettings} onClick={() => { setSelectedNavItem(item.url); setCheckout(false) }} key={item.index} selected={selectedNavItem === item.url ? true : false}>
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
        </div>
      ) : (
        <button className="donate-btn">
          <Link href="/donate">
            <span>
              {siteSettings.ctaDonation}
            </span>
          </Link>
        </button>
      )}
    </Header>
  )
}

export default Navigation
