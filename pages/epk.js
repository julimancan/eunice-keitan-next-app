import styled from "@emotion/styled";
import { useState } from "react";
import { bioDetails, lywdLyrics } from "../components/content";
import SocialIcons from "../components/SocialIcons";
import { stylingVariables } from "../components/stylingVariables";

const pressPassword = "E"

const epkImages = [
  {
    name: "Eunice Keitan Lay Your Weapons Down image 1",
    path: "/images/EuniceKeitan-LYWD-Photo1.jpg"
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down image 2",
    path: "/images/EuniceKeitan-LYWD-Photo2.jpg"
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down image 3",
    path: "/images/EuniceKeitan-LYWD-Photo3.jpg"
  },
  {
    name: "Eunice Keitan Lay Your Weapons Down Album Art",
    path: "/images/LayYourWeaponsDown-EuniceKeitan-AlbumArt.jpg"
  },
]

const EpkWrap = styled.main`
position: relative;
margin-bottom: 2rem;
    color: black;
  h1 {
    color: inherit;
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.8rem);
  }
  h2 {
    color: inherit
  }
  h3, h4 {
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
    padding: 0 .5rem;
  }
  .iframe-wrapper {
        width: 100%;
        min-width: 400px; 
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
        .song-desc {
          margin: 1rem 0;
        }
      }
    }
    .video-notes {
      /* background: red; */
      margin: 1rem 0 ;
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
  @media(min-width: 540px) {
    h1 {
      margin-top: 2rem;
    }
  }
  @media(min-width: 640px) {
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
      h3{
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
        width: 30%
      }
      ul {
        list-style: none;
      }
    }
  }

`
const LockPage = styled.form`
  position: absolute;
  inset: 0;
  background: ${stylingVariables.videosPageBackground};
  width: 100vw;
  height: 100vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  input {
    height: 3rem;
    font-size: 3rem;
    margin: 1.5rem;
  }
  input[type="submit"] {
    /* background: red; */
    font-size: 2rem;
    padding:  0 2rem 3rem 2rem;
  }
  .password-checker {
    border: 1px solid;
    border-radius: 5px;
    padding: .5rem 1rem 1rem 1rem;
    width: 588px;
  }
`;

const WrongPassword = styled.div`
  position: absolute;
  /* inset: 1rem 0; */
  transform: translateY(150%);
  
`;

const epk = () => {
  const [pageLock, setPageLock] = useState(true);
  const [password, setPassword] = useState("no password set");
  const [wrongPassword, setWrongPassword] = useState(false);


  const passwordCheck = event => {
    event.preventDefault();

    if (password === pressPassword) {
      setPageLock(false);
      console.log(`page has been unlocked`);
    } else {
      setWrongPassword(true);
      setTimeout(() => {
        setWrongPassword(false);
      }, 2500);
    }
  }
  return (
    <EpkWrap>
      {pageLock && (
        <LockPage onSubmit={passwordCheck}>
          <label for="epk-password">enter epk-password below</label>

          <input
            type="text"
            id="epk-password"
            name="epk-password"
            required
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />


          {wrongPassword && (
            <WrongPassword>You have entered a wrong password please try again!</WrongPassword>
          )}
        </LockPage>
      )}
      <article className="top-article">
        <h1>lay your weapons down (single)</h1>
        <h2>Release Date: Fri, July 23rd. 2021</h2>
        <section className="soundcloud-notes">
          <div className="iframe-wrapper">
            <iframe className="soundcloud-player" scrolling="no" frameborder="0" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1068347344&amp;show_artwork=true&amp;auto_play=false&amp;show_playcount=true&amp;show_comments=true&amp;color=%23ff5500&amp;height=478&amp;width=484&amp;secret_token=s-0k4fZo2YNeU" class="embed-code-player__frame"></iframe>
          </div>
          <div className="notes">
            <h3>Notes:</h3>
            <h3 className="song-name">Lay Your Weapons Down</h3>
            <p className="song-desc">With the political/social unrest we have seen throughout this year in Myanmar, Colombia, The Gaza Strip, and more, this track explores the relationship between civilians/refugees, soldiers that are fighting someone else's war, and the political agenda of the powers that be. The initial spark of inspiration came from conversations with friends. Some of them had been refugees and others were imprisoned for more than 10 years for protesting and fighting for their freedom and human rights.
              I wanted to tell the story from that perspective as a reminder that it could happen to any one of us and to stay informed about what is happening around the world as wars are prolonged by the powers that are profiting from it.
            </p>
            <p><strong>Eunice Keitan:</strong>Songwriter, Producer, Vocals, Acoustic Guitar</p>
            <p><strong>Kevin Howley:</strong>Producer, Drum & Percussion, Bass, Electric Guitar</p>
            <p><strong>Sivasilan Muniandy:</strong>Gendang Traditional Drum</p>
            <p><strong>Josh Bowman:</strong>Mixing</p>
            <p><strong>Mojito Studios/Reuben Ghose:</strong>Mastering</p>
          </div>
        </section>
        <section className="video-notes">
          <h3>Music Video Notes:</h3>
          <p>I chose to mix in archival footage from the Vietnam war and to tell the story through that lens because it’s a part of history that we have the benefit of hindsight. At the same time, it is also a story that remains relevant through the centuries. When creating the video I wanted the grunge and vintage treatment to reflect a sense of nostalgia (like memories of home) but also the grit and emotional tone of the track.</p>
          <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/Szt77S6NfZ0?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.eunice-keitan.com&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2"></iframe>
        </section>
      </article>
      <article className="artInfo-press">
        <div>
          <h4>Artist Information:</h4>
          <p><strong>Label:</strong>Self Released</p>
          <p><strong>Genre:</strong>Alternative R&B/Gritty Neo-Soul</p>
          <p><strong>Home Town:</strong>Toronto, Singapore, Malaysia</p>
          <p><strong>Sounds Like:</strong>Emily King, Hiatus Kaiyote, Erykah Badu</p>
        </div>
        <div>
          <h4>Recent Press:</h4>
          <ul>
            <li>
              <p>
                Canadian Beats
              </p>
            </li>
            <li>
              <p>
                Tinnitis
              </p>
            </li>
            <li>
              <p>
                The House That Soul Built
              </p>
            </li>
            <li>
              <p>
                Record World
              </p>
            </li>
            <li>
              <p>
                Cold Tea Collective
              </p>
            </li>
            <li>
              <p>
                From The Intercom
              </p>
            </li>
            <li>
              <p>
                Ride The Tempo
              </p>
            </li>
          </ul>
        </div>
      </article>
      <SocialIcons />
      <article className="epk-bio">
        <img className="desktop-bio-img" src={epkImages[1].path} alt={epkImages[1].name} />
        <section className="bio-text">       
          <h3>Bio</h3>
          <img className="mobile-bio-img" src={epkImages[1].path} alt={epkImages[1].name} />
          {bioDetails.map((parag, index) => (
            <p key={index}>{parag}</p>
          ))}
        </section>
      </article>
      <article>
        <h3>Photos</h3>
        {epkImages.map((item, index) => (
          <div className="image-wrapper">
            <img key={index} src={item.path} alt={item.name} />
          </div>
        ))}
      </article>
      <article>
        <h3>Lyrics</h3>
        {Object.keys(lywdLyrics).map((keyName, i) => (
          <div key={i}>
            {keyName}
            {lywdLyrics[keyName].map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ))}
      </article>

    </EpkWrap>
  )
};

export default epk;