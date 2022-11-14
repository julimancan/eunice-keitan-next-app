import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import SocialIcons from "../components/SocialIcons";
import { StyledButton } from "../components/StyledButton";
import TextContent from "../components/TextContent";
import { getEpkPageContent, getSiteSettings } from "../lib/api";
import { useGlobalState } from "../state";
import { saveAs } from "file-saver";
import { BsDownload } from "react-icons/bs";

const LockPage = styled.form`
  position: sticky;
  inset: 0;
  background: ${({ colors }) => colors.videosPageBackground};
  /* width: 99vw; */
  /* height: 100vh; */
  /* background: red; */
  color: black !important;
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
  button {
    font-size: 1.5rem;
  }
  .password-checker {
    border: 1px solid;
    border-radius: 5px;
    padding: 0.5rem 1rem 1rem 1rem;
    width: 588px;
  }
`;

const EpkWrap = styled.main`
  position: relative;
  margin-bottom: 2rem;
  color: black;
  padding: 0 2rem;
  * {
    /* border: 1px solid black; */
  }
  h1 {
    color: inherit;
  }
  h2 {
    color: inherit;
  }
  h3 {
    color: black;
  }
  h4 {
    font-style: italic;
    font-weight: 400;
    font-size: 1.6rem;
  }
  p {
    color: black;
    line-height: 24px;
    letter-spacing: 1px;
  }
  strong {
    font-family: "Oceanside-Typewriter";
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

    .release-date {
      /* background: yellow; */
      font-size: 1rem;
      color: black;
      margin: 0.2rem;
    }

    .soundcloud-notes {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      padding-top: 0;
      height: 100%;
      .soundcloud-player {
        width: 100%;
        height: 100%;
        min-height: 300px;
        max-height: 400px;
        aspect-ratio: 1/1;
        iframe {
          height: 350px;
          width: 85vw;
          margin: 0 auto 1rem;
          @media (min-width: 800px) {
            height: 550px;
            width: 100%;
          }
          @media (min-width: 900px) {
            height: 500px;
          }
          @media (min-width: 980px) {
            height: 450px;
          }
          @media (min-width: 1280px) {
            height: 350px;
          }
          @media (min-width: 1380px) {
            height: 350px;
          }
        }
      }

      .notes {
        display: flex;
        flex-direction: column;
        /* padding: 0 1rem; */

        p {
          margin: 0.2rem 0;
        }
        .song-desc {
          margin: 1rem 0;
        }
        h3 {
          margin-top: 0;
        }
      }
    }
    .video-notes {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        align-self: flex-start;
      }
      p {
        margin-bottom: 1rem;
      }
      div {
        width: 100%;
        aspect-ratio: 16/9;
        iframe {
          aspect-ratio: 16/9;
          width: 100%;
          height: 100%;
        }
      }
      .video-list {
        /* background-color: red; */
        display: grid;
        /* grid-template-columns: repeat(3, 1fr); */
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1rem;
      }
    }
  }
  .artInfo-press {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    div {
      min-width: 400px;
      div {
        width: 100%;
        p {
          margin: 0.2rem auto;
        }
      }
      ul {
        margin: 1rem 0;
        list-style: none;

        li {
          font-family: "American-Typewriter";
          line-height: 24px;
        }
      }
    }
    h4 {
      border-bottom: 5px dotted;
    }
  }
  .desktop-bio-img {
    display: none;
  }
  .mobile-bio-img,
  .desktop-bio-img {
    aspect-ratio: 1 / 1.3;
    max-height: 80vh;
    width: 100%;
    object-fit: cover;
  }
  .photos-section {
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      .image-wrapper {
        position: relative;
        svg {
          position: absolute;
          z-index: 20;
          top: 1rem;
          left: 1rem;
          cursor: pointer;
          transform: scale(1.25);
          color: white;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .bio-text {
    margin-bottom: 2rem;
    p {
      margin: 1.5rem 0;
    }
  }
  .lyrics-section {
    h5 {
      margin-top: 1rem;
      text-transform: uppercase;
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
      /* justify-content: space-evenly; */
      gap: 5%;
      div {
        width: 45%;
      }
      ul {
        list-style: none;
      }
    }
  }
`;

const WrongPassword = styled.div`
  position: absolute;
  /* inset: 1rem 0; */
  transform: translateY(150%);
`;
export async function getStaticProps() {
  const siteConfig = await getSiteSettings();
  const epkPageContent = await getEpkPageContent();

  return {
    props: {
      siteConfig,
      epkPageContent,
    },
  };
}

const epk = ({ siteConfig, epkPageContent }) => {
  const [pageLock, setPageLock] = useState(false);
  const [password, setPassword] = useState("no password set");
  const [wrongPassword, setWrongPassword] = useState(false);

  const [siteSettings, setSiteSettings] = useGlobalState("siteSettings");
  const [colors, setColors] = useGlobalState("colors");

  const {
    title,
    epkLock,
    epkLockPwTitle,
    epkLockPw,
    epkLockPwCtaText,
    releaseType,
    soundCloudEpkEmbed,
    youtubeSingleEmbed,
    releaseDate,
    releaseNotesTitle,
    releaseNotes,
    photosSection,
    photosSectionTitle,
    otherNotestitle,
    otherNotes,
    artistInfo,
    recentPress,
    bioImage,
    lyrics,
    youtubeVideoArray,
  } = epkPageContent;
  useEffect(() => {
    // setPageLock(epkLock);
    setSiteSettings(siteConfig[0]);
    setColors({
      ...colors,
      menuBackgroundColor: siteConfig[0].menuBgColor,
      menuBarColor: siteConfig[0].menuBgColor,
    });
  }, []);
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
  console.log({ youtubeVideoArray });

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
          <StyledButton
            colors={colors}
            siteSettings={siteSettings}
            inHome={false}
            type="submit"
          >
            {epkLockPwCtaText || "submit"}
          </StyledButton>

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
            <h2>
              {title} {`(${releaseType})`}
            </h2>
            <h3 className="release-date">Release Date: {releaseDate}</h3>
            <section className="soundcloud-notes">
              <div
                dangerouslySetInnerHTML={{ __html: soundCloudEpkEmbed }}
                className="soundcloud-player"
              ></div>

              <div className="notes">
                <h3>
                  {releaseNotesTitle} {title}
                </h3>
                <TextContent content={releaseNotes} />
              </div>
            </section>
            <section className="video-notes">
              <h3>{otherNotestitle}</h3>
              <TextContent content={otherNotes} />
              {releaseType === "single" ? (
                <div
                  dangerouslySetInnerHTML={{ __html: youtubeSingleEmbed }}
                ></div>
              ) : (
                <section className="video-list">
                  {youtubeVideoArray.map((video, index) => (
                    <div key={index}>
                      <h3>{video.name}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: video.youtubeEmbed }}
                      ></div>
                    </div>
                  ))}
                </section>
              )}
            </section>
          </article>
          <article className="artInfo-press">
            <div>
              <h3>Artist Information:</h3>
              <TextContent content={artistInfo} />
            </div>
            <div>
              <h3>Recent Press:</h3>
              <TextContent content={recentPress} />
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
              <TextContent content={siteSettings.bioText} />
            </section>
          </article>
          <article className="photos-section">
            <h3>{photosSectionTitle}</h3>
            <ul>
              {photosSection.map((item, index) => (
                <li className="image-wrapper" key={index}>
                  <BsDownload
                    onClick={() =>
                      saveAs(item.url, `eunice-keitan-img-${index}.jpg`)
                    }
                  />
                  <img src={item.url} alt={item.alt} />
                </li>
              ))}
            </ul>
          </article>
          <article className="lyrics-section">
            <TextContent content={lyrics} />
          </article>
          <SocialIcons />
        </section>
      )}
    </EpkWrap>
  );
};

export default epk;
