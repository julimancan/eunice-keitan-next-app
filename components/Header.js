import styled from "@emotion/styled";
import { useState } from "react";
import menuItems from "./menuItems";
import Menu from "./BurgerMenu";
import Link from "next/link";
import Head from "next/head";
import DonationAmount from "./DonationAmount";
import { useRouter } from "next/router";
import { useGlobalState } from "../state";
import { urlFor } from "../lib/api";
import { StyledButton } from "./StyledButton";

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
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ currentPage, colors }) =>
    currentPage === "/" ? "none" : colors.videosPageBackground};
  width: 100vw;
  padding: 2rem 3rem 2rem 2rem;
  position: fixed;
  z-index: 100;
  .nav {
    display: flex;
    margin-top: 3rem;
    align-items: center;
  }
  .donate-btn {
    right: 2.5rem;
    bottom: 0.5rem;
    span {
      font-family: "PrequelDemo";
    }
  }
  @media (min-width: 600px) {
    .donate-btn {
      bottom: 2rem;
    }
  }
  @media (min-width: 1068px) {
    align-items: center;
    padding: 2rem 4% 2rem 3%;
    .nav {
      margin-top: 0;
    }
    .donate-btn {
      bottom: 4.3rem;
      right: 4.5rem;
    }
    .donation-container {
      position: absolute;
      left: 0;
      top: 12rem;
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;
  color: ${({ colors, siteSettings, inHome }) =>
    (!inHome && siteSettings.menuTextColor) || colors.menuBarColor};
  /* font-weight: 100; */
  #logo-desc {
    font-family: "Oceanside-Typewriter";
    /* color: black; */
  }
`;

const DesktopNavItem = styled.li`
  cursor: pointer;
  margin-left: 1rem;
  text-transform: uppercase;
  margin: 0 2rem;
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ selected, colors }) =>
      !selected
        ? colors.menuBarColor || colors.homePageTextColor
        : colors.homePageTextColor};
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  transition: font-size 0.2s;
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
  };
  // if (siteSettings[0])

  const { route } = router;
  console.log({ colors });

  return (
    <Header
      currentPage={currentPage}
      colors={colors}
      siteSettings={siteSettings}
      inHome={route === "/"}
    >
      <Head>
        <link
          rel="preload"
          href="/fonts/Oceanside-Typewriter.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PrequelDemo-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=${
            siteSettings.headingFonts || ""
          }&display=optional`}
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${siteSettings.menuFont}&display=optional`}
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${siteSettings.paragraphFonts}&display=optional`}
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${siteSettings.subtitleFonts}&display=optional`}
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=CAD`}
        ></script>
        <title>{siteSettings.title}</title>
        <link
          rel="shortcut icon"
          href={
            siteSettings.favicon && urlFor(siteSettings.favicon).width(10).url()
          }
        />
        <script
          async
          defer
          data-website-id="4f284092-ca72-4596-aaf3-3b075a73abf1"
          src="https://analytics-julimancan.vercel.app/umami.js"
        ></script>
      </Head>

      <Link href="/" onClick={() => setNavOpen(false)}>
        <Logo
          siteSettings={siteSettings}
          inHome={route === "/"}
          colors={colors}
        >
          <h1>{siteSettings.title}</h1>
          <h2 id="logo-desc">{siteSettings.description}</h2>
        </Logo>
      </Link>
      <div className="nav">
        <Menu
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          closeCheckoutAndNav={closeCheckoutAndNav}
        />
        <DesktopNav>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <DesktopNavItem
                    colors={colors}
                    siteSettings={siteSettings}
                    onClick={() => {
                      setSelectedNavItem(item.url);
                      setCheckout(false);
                    }}
                    key={item.index}
                    selected={selectedNavItem === item.url ? true : false}
                  >
                    <h2>{item.name}</h2>
                  </DesktopNavItem>
                </Link>
              );
            })}
          </ul>
        </DesktopNav>
        {checkout ? (
          <div className="donation-container">
            <DonationAmount
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
              setCheckout={setCheckout}
            />
          </div>
        ) : (
          <StyledButton
            className="donate-btn"
            colors={colors}
            siteSettings={siteSettings}
            inHome={route === "/"}
          >
            <Link href="/donate">
              <span>{siteSettings.ctaDonation}</span>
            </Link>
          </StyledButton>
        )}
      </div>
    </Header>
  );
};

export default Navigation;
