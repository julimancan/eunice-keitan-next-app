// import { useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import SanityPicture from "../../components/SanityPicture";
import Seo from "../../components/Seo";
import {
  getAllSongReleaseSlugs,
  getReleasePageContent,
  // getSiteSettings,
} from "../../lib/api";
// import { useGlobalState } from "../../state";
import * as fbq from "../../lib/fpixel";

export const getStaticPaths = async () => {
  const allSlugs = await getAllSongReleaseSlugs();
  const paths = allSlugs.map((slug) => ({
    params: { song: slug.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { song } = params;
  const pageContent = await getReleasePageContent(song);
  // const siteConfig = await getSiteSettings();

  return {
    props: {
      // siteConfig,
      pageContent,
    },
  };
};

const Song = ({ pageContent }) => {
  // console.log({ pageContent, siteConfig });
  // const [siteSettings, setSiteSettings] = useGlobalState("siteSettings");
  // const [colors, setColors] = useGlobalState("colors");

  // useEffect(() => {
  //   setSiteSettings(siteConfig[0]);
  // }, []);

  const triggerSpotifyClick = () => {
    fbq.event("Spotify-view");
  };

  const { name, description, image, songLink, preSaveLink } = pageContent;

  const today = new Date(Date.now());
  const releaseDate = new Date(pageContent.releaseDate);

  const isReleaseDateInFuture = releaseDate > today;
  console.log(name.split(" ").join("-"))
  return (
    <StyledReleasePage>
      <SanityPicture
        alt={image.alt}
        url={image.url}
        sm={[500, 600]}
        md={[1000, image.height / 1.5]}
        lg={[image.width, image.height]}
        // width={image.width}
        // height={image.height}
      />
      <Seo 
        title={`Eunice Keitan - ${name}`}
      />
      <article>
        <h2>Eunice Keitan</h2>
        <h1>{name}</h1>

        <section className="spotify-link">
          <img
            src="/spotify-logo-white.png"
            alt="spotify logo"
            className="spotify-logo"
          />
          {isReleaseDateInFuture
            ? preSaveLink && (
                <Link href={preSaveLink} passHref>
                  <a className={`umami--click--spotify-${name.split(" ").join("-")}`} target="_blank" onClick={triggerSpotifyClick}>
                    <p>Pre Save</p>
                  </a>
                </Link>
              )
            : songLink && (
                <Link href={songLink} passHref>
                  <a className={`umami--click--spotify-${name.split(" ").join("-")}`} target="_blank" onClick={triggerSpotifyClick}>
                    <p>Listen</p>
                  </a>
                </Link>
              )}
        </section>
      </article>
    </StyledReleasePage>
  );
};

const StyledReleasePage = styled.main`
  position: relative;
  display: grid !important;
  place-content: center;
  background-color: red;
  padding: 0 !important;
  z-index: 100;
  max-width: unset !important;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  article {
    /* color: #fdeadb; */
    /* background-color: red; */
    height: fit-content;
    display: grid;
    place-content: center;
    h2 {
      color: white;
      display: none;
    }
    h1 {
      color: white;
      margin: 0 auto;
    }
    .spotify-link {
      margin: 2rem auto 0;
      /* background-color: green; */
      width: fit-content;
      /* height: fit-content; */
      display: flex;
      align-items: center;
      gap: 1ch;
      .spotify-logo {
        width: 10ch;
        /* background-color: red; */
      }
      a {
        padding: 0.5rem 2rem;
        position: relative;
        width: fit-content;
        cursor: pointer;
        border: 1px solid white;
        p {
          /* background-color: red; */
          font-size: 1rem;
          line-height: 1rem;
          font-family: "Oceanside-Typewriter";
        }
        &:after {
          content: "";
          background-color: white;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.8;
          z-index: -1;
        }
      }
    }
  }
  picture {
    position: absolute;
    background-color: gray;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    /* object-position: top left; */
    /* translate: 0 -10rem; */
    z-index: -1;
    img {
      width: 100%;
      min-height: 100vh;
      height: 100%;
      object-fit: cover;
      object-position: right center;
    }
  }
`;

export default Song;
