import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { bioDetails, lywdLyrics } from "../components/content";
import SocialIcons from "../components/SocialIcons";
import TextContent from "../components/TextContent";
import { getEpkPageContent, getSiteSettings } from "../lib/api";
import { useGlobalState } from "../state";


const epkImages = [
  {
    name: "Eunice Keitan Lay Your Weapons Down image 1",
    path: "/images/EuniceKeitan-LYWD-Photo1.jpg",
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down image 2",
    path: "/images/EuniceKeitan-LYWD-Photo2.jpg",
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down image 3",
    path: "/images/EuniceKeitan-LYWD-Photo3.jpg",
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down Album Art",
    path: "/images/LayYourWeaponsDown-EuniceKeitan-AlbumArt.jpg",
  },
];

const EpkWrap = styled.main`
  position: relative;
  margin-bottom: 2rem;
  /* height: 80vh; */
  /* max-height: 50vh; */
  color: black;
  h1 {
    color: inherit;
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.8rem);
  }
  h2 {
    color: inherit;
  }
  h3,
  h4 {
    font-style: italic;
    font-weight: 600;
    font-size: 2rem;
  }
  h4 {
    font-weight: 400;
    font-size: 1.6rem;
  }
  p {
    color: black;
  }
  .song-name {
    font-style: normal;
  }
  article {
    padding: 0 0.5rem;
  }
  .iframe-wrapper {
    width: 100%;
    @media (min-width: 700px) {
      min-width: 400px;
    }
  }

  .top-article {
    /* background: red; */
    .soundcloud-notes {
      /* background: yellow; */
      display: flex;
      flex-direction: column;
      padding-top: 0;
      .soundcloud-player {
        width: 100%;
        height: 100%;
        min-height: 300px;
        max-height: 400px;
        aspect-ratio: 1/1;
      }

      .notes {
        display: flex;
        flex-direction: column;
        /* padding: 0 1rem; */
        p{
          margin: .2rem 0;
        }
        .song-desc {
          margin: 1rem 0;
        }
      }
    }
    .video-notes {
      /* background: red; */
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        align-self: flex-start;
      }
      p {
        margin: 1rem 0;
      }
      iframe {
        aspect-ratio: 16/9;
        max-height: 400px;
        max-width: 800px;
      }
    }
  }
  .artInfo-press {
    /* background: red; */
    display: flex;
    flex-direction: column;
    h4 {
      border-bottom: 5px dotted;
    }
  }
  .desktop-bio-img {
    display: none;
  }
  img {
    aspect-ratio: 1 / 1.3;
    max-height: 80vh;
    width: 100%;
    object-fit: cover;
  }
  .bio-text {
    p {
      margin: 1.5rem 0;
    }
  }
  @media (min-width: 440px) {
    h1 {
      margin-top: 1rem;
    }
  }
  @media (min-width: 540px) {
    h1 {
      margin-top: 2rem;
    }
  }
  @media (min-width: 640px) {
    .epk-bio {
      display: flex;
    }
    .desktop-bio-img {
      display: inline;
      max-width: 30%;
    }
    .bio-text {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: flex-start; */
      /* background: red; */
      padding-top: 0;
      h3 {
        justify-self: flex-start;
      }
      .mobile-bio-img {
        display: none;
      }
    }
    h1 {
      margin-top: 4rem;
    }
  }
  @media (min-width: 800px) {
    h1 {
      margin-top: 0rem;
    }
    .top-article {
      .soundcloud-notes {
        flex-direction: row;
        margin: 1rem 0;
        .notes {
          padding-left: 1rem;
        }
      }
      .video-notes {
        margin-top: 0;
      }
    }
    .artInfo-press {
      padding-top: 0;
      flex-direction: row;
      justify-content: space-evenly;
      div {
        width: 30%;
      }
      ul {
        list-style: none;
      }
    }
  }
`;
const LockPage = styled.form`
  position: sticky;
  inset: 0;
  background: ${({ colors }) => colors.videosPageBackground};
  /* width: 99vw; */
  /* height: 100vh; */
  /* background: red; */
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  padding: 10rem 0.5rem;
  max-width: 80%;
  input {
    max-width: 80%;
    height: 3rem;
    font-size: 3rem;
    margin: 1.5rem;
  }
  input[type="submit"] {
    /* background: red; */
    font-size: 2rem;
    /* padding:  0 2rem 3rem 2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .password-checker {
    border: 1px solid;
    border-radius: 5px;
    padding: 0.5rem 1rem 1rem 1rem;
    width: 588px;
  }
`;

const WrongPassword = styled.div`
  position: absolute;
  /* inset: 1rem 0; */
  transform: translateY(150%);
`;
export async function getServerSideProps() {
  const siteConfig = await getSiteSettings();
  const epkPageContent = await getEpkPageContent();

  return {
    props: {
      siteConfig,
      epkPageContent
    },
  };
}

const epk = ({ siteConfig, epkPageContent }) => {
  const [pageLock, setPageLock] = useState(false);
  const [password, setPassword] = useState("no password set");
  const [wrongPassword, setWrongPassword] = useState(false);

  const [siteSettings, setSiteSettings] = useGlobalState("siteSettings");
  const [colors] = useGlobalState("colors");

  const {
    title,
    pageBgColor,
    pageTextColor,
    epkLock,
    epkLockPwTitle,
    epkLockPw,
    epkLockPwCtaText,
    releaseType,
    soundCloudEpkLink,
    youtubeSingleLink,
    youtubePlaylistId,
    releaseDate,
    releaseNotesTitle,
    releaseNotes,
    photosSection,
    // 0: {alt: 'Eunice Keitan Lay Your Weapons Down Image', url: 'https://cdn.sanity.io/images/qo6vhcd5/production/a…9cc80275dd7186c5aeada545b820ed25f894-1000x667.jpg'}
    // 1: {alt: 'Eunice Keitan Lay Your Weapons Down Image', url: 'https://cdn.sanity.io/images/qo6vhcd5/production/d…4489632bc8ab49696e007e0b0f915b5e3ec8-667x1000.jpg'}
    // 2: {alt: 'Eunice Keitan Lay Your Weapons Down Image', url: 'https://cdn.sanity.io/images/qo6vhcd5/production/2…9faec51f341b8d80e00057300be6dd593413-667x1000.jpg'}
    // 3: {alt: 'Eunice Keitan Lay Your Weapons Down Album Artwork', url: 'https://cdn.sanity.io/images/qo6vhcd5/production/a…e20d373df8e26a220678317310d35c60c26-1400x1400.jpg'}
    // length: 4
    // [[Prototype]]: Array(0)
    photosSectionTitle,

    otherNotestitle,
    otherNotes,
    artistInfo,
    recentPress,
    bioImage,
    lyrics,
  } = epkPageContent;
  console.log({ epkPageContent });
  useEffect(() => {
    setPageLock(epkLock);
    setSiteSettings(siteConfig[0]);
  }, []);

  console.log({ epkPageContent });
  const passwordCheck = (event) => {
    event.preventDefault();
    if (password === epkLockPw) {
      setPageLock(false);
    } else {
      setWrongPassword(true);
      setTimeout(() => {
        setWrongPassword(false);
      }, 2500);
    }
  };

  return (
    <EpkWrap>
      {pageLock && (
        <LockPage onSubmit={passwordCheck} colors={colors}>
          <label htmlFor="epk-password">
            <h2>{epkLockPwTitle}</h2>
          </label>
          <input
            type="text"
            id="epk-password"
            name="epk-password"
            required
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{epkLockPwCtaText || "submit"}</button>

          {wrongPassword && (
            <WrongPassword>
              You have entered a wrong password please try again!
            </WrongPassword>
          )}
        </LockPage>
      )}
      {!pageLock && (
        <section>
          <article className="top-article">
            <h1>
              {title} {`(${releaseType})`}
            </h1>
            <h2>Release Date: {releaseDate}</h2>
            <section className="soundcloud-notes">
              <div className="iframe-wrapper">
                <iframe
                  className="soundcloud-player"
                  scrolling="no"
                  frameBorder="0"
                  src={soundCloudEpkLink}
                  className="embed-code-player__frame"
                ></iframe>
              </div>
              <div className="notes">
                <h3>{releaseNotesTitle}</h3>
                <h3 className="song-name">{title}</h3>
                <TextContent content={releaseNotes}/>
              </div>
            </section>
            <section className="video-notes">
              <h3>{otherNotestitle}</h3>
              <TextContent content={otherNotes}/>
              <iframe
                frameBorder="0"
                allowFullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                width="100%"
                height="100%"
                src={youtubeSingleLink}
                id="widget2"
              ></iframe>
            </section>
          </article>
          <article className="artInfo-press">
            <div>
              <h4>Artist Information:</h4>
              <TextContent content={artistInfo}/>
            </div>
            <div>
              <h4>Recent Press:</h4>
              <TextContent content={recentPress}/>
              
            </div>
          </article>
          <SocialIcons />
          <article className="epk-bio">
            <img
              className="desktop-bio-img"
              src={bioImage.url}
              alt={bioImage.alt}
            />
            <section className="bio-text">
              <h3>Bio</h3>
              <img
                className="mobile-bio-img"
                src={bioImage.url}
                alt={bioImage.alt}
              />
              {bioDetails.map((parag, index) => (
                <p key={index}>{parag}</p>
              ))}
            </section>
          </article>
          <article>
            <h3>{photosSectionTitle}</h3>
            {photosSection.map((item, index) => (
              <div className="image-wrapper" key={index}>
                <img src={item.url} alt={item.alt} />
              </div>
            ))}
          </article>
          <article>
            <TextContent content={lyrics}/>
          </article>
        </section>
      )}
    </EpkWrap>
  );
};

export default epk;
