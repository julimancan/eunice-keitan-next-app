import styled from '@emotion/styled';
import { useEffect } from 'react';
import SocialIcons from '../components/SocialIcons';
import { getHomePageContent, getSiteSettings } from '../lib/api';
import { useGlobalState } from '../state';
import Head from 'next/head';
import Button from './../components/Button';
import SongLinks from '../components/SongLinks';

const HomeContainer = styled.main`
display: flex;
justify-content: center;
position: relative;
article {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-50%);
  
  * {
    margin: .3rem 0;
    color: ${({ colors }) => colors.menuTextColor};
  }
  h1 {
    position: relative;
    overflow: hidden;
    font-size: minmax(1.5rem, 3rem);

  }
  h2 {
    font-family:'Oceanside-Typewriter';
    font-size: 1rem;
    @media (min-width: 800px) {
      font-size: 2rem;
    }
  }  
}
`;

const HeroImage = styled.video`
  object-fit: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  @media (min-width:1350px) {
    width: 100vw;
  }
`;


export default function Home({ siteConfig, homepageContent }) {
  const setSiteSettings = useGlobalState("siteSettings")[1];
  const [colors, setColors] = useGlobalState("colors");

  const { title, subtitle, subtitle2, ctaText, bgVideo, songLinks } = homepageContent;

  useEffect(() => {
    setSiteSettings(siteConfig[0]);
    setColors({
      ...colors,
      menuBackgroundColor: siteConfig[0].menuBgColor,
      menuTextColor: siteConfig[0].menuTextColor,
      menuBarColor: siteConfig[0].menuTextColor
    })
  }, []);
  console.log('songLinks', songLinks)
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
        <h2>{subtitle2}</h2>
        {ctaText && (
          <Button>{ctaText}</Button>
        )}
        <SongLinks songLinks={songLinks} />
      </article>
      <SocialIcons />
    </HomeContainer>
  )
}


export async function getServerSideProps(context) {
  const siteConfig = await getSiteSettings();
  const homepageContent = await getHomePageContent();
  return {
    props: {
      siteConfig,
      homepageContent
    }
  }
}
