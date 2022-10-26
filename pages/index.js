import styled from "@emotion/styled";
import { useEffect } from "react";
import { getHomePageContent, getSiteSettings } from "../lib/api";
import { useGlobalState } from "../state";
import Head from "next/head";
import Button from "./../components/Button";
import SongLinks from "../components/SongLinks";
import Link from "next/link";
import SocialIcons from "../components/SocialIcons";

const HomeContainer = styled.main`
  display: grid;
  place-content: center;
  justify-content: center;
  position: relative;
  article {
    position: relative;
    display: grid;
    place-content: center;
    padding: 0 !important;
    translate: 0 -50%;
    * {
      margin: 0.3rem 0;
      color: ${({ colors }) => colors.menuTextColor};
    }
    h1 {
      position: relative;
      overflow: hidden;
      font-size: minmax(1.5rem, 3rem);
    }
    .social-wrapper {
      /* background-color: red; */
      width: fit-content;
      margin: 0 auto 1rem;
      .social-icons {
        width: 100%;
        gap: 1rem;
      }
    }
    h2 {
      font-family: "Oceanside-Typewriter";
      font-size: 1rem;
      /* background-color: violet; */
      text-align: center;
      @media (min-width: 800px) {
        font-size: 1rem;
      }
    }
    a {
      margin: 1rem auto 0;
      height: fit-content;
      cursor: pointer;
    }
  }
`;

const HeroImage = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  @media (min-width: 1350px) {
    width: 100vw;
  }
`;

export default function Home({ siteConfig, homepageContent }) {
  const setSiteSettings = useGlobalState("siteSettings")[1];
  const [colors, setColors] = useGlobalState("colors");

  const { title, subtitle, subtitle2, showLink, button, bgVideo, songLinks } =
    homepageContent;
  // console.log({songLinks});
  useEffect(() => {
    setSiteSettings(siteConfig[0]);
    setColors({
      ...colors,
      menuBackgroundColor: siteConfig[0].menuBgColor,
      menuTextColor: siteConfig[0].menuTextColor,
      menuBarColor: siteConfig[0].menuTextColor,
    });
  }, []);
  return (
    <HomeContainer colors={colors}>
      <Head>
        <title>{title}</title>
      </Head>
      <HeroImage autoPlay loop muted alt={bgVideo.alt}>
        <source src={bgVideo.main} type="video/webm" />
        <source src={bgVideo.fallback} type="video/mp4" />
        {bgVideo.alt}
      </HeroImage>
      <article>
        <h1>{subtitle}</h1>
        <div className="social-wrapper">
        <SocialIcons insta={false} facebook={false} />
        </div>

        <h2>{subtitle2}</h2>
        {showLink && (
          <Link href={button.linkUrl} passHref>
            <a target="_blank">
              <Button>{button.linkText}</Button>
            </a>
          </Link>
        )}
        {songLinks && <SongLinks songLinks={songLinks} />}
      </article>
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const siteConfig = await getSiteSettings(); 
  const homepageContent = await getHomePageContent();
  return {
    props: {
      siteConfig,
      homepageContent,
    },
  };
}
