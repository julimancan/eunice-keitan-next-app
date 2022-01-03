import styled from '@emotion/styled';
import { useEffect } from 'react';
import SocialIcons from '../components/SocialIcons';
import { getHomePageContent, getSiteSettings, urlFor } from '../lib/api';
import { useGlobalState } from '../state';
import Head from 'next/head';

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
    color: ${({colors}) => colors.homePageTextColor};
  }
  h1 {
    position: relative;
    overflow: hidden;
  }
  h2 {
    font-size: 2.5vw;
  }  
  button {
    font-family: "PrequelDemo";
    opacity: .8;
    padding: .5rem 1rem;
    transition: .2s;
    &:hover {
      border: 2px solid #755B49;
      /* border-radius: 5px; */
      color: white;
      background: #755B49;
    }
  }
}


`;

const HeroImage = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;


export default function Home({ siteConfig, homepageContent }) {
  const setSiteSettings = useGlobalState("siteSettings")[1];
  const [colors] = useGlobalState("colors");

  const { title, subtitle, subtitle2, ctaText, bgVideo } = homepageContent;

  console.log(`homepageContent`, homepageContent)
  useEffect(() => {
    setSiteSettings(siteConfig[0]);
  }, []);


  return (
    <HomeContainer colors={colors}>
      <Head>
        <title>{title}</title>
      </Head>
      <HeroImage autoPlay loop muted>
        <source src="/LYWD-websiteloop.mp4" type="video/mp4" />
      </HeroImage>
      <article>
        <h1>{subtitle}</h1>
        <h2>{subtitle2}</h2>
        <button>{ctaText}</button>
      </article>
      <SocialIcons />
    </HomeContainer>
  )
}


export async function getStaticProps(context) {
  const siteConfig = await getSiteSettings();
  const homepageContent = await getHomePageContent();
  return {
    props: {
      siteConfig,
      homepageContent
    }
  }
}
