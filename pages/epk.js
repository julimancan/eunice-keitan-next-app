import styled from "@emotion/styled";
import { useState } from "react";
import { bioDetails, lywdLyrics } from "../components/content";
import SocialIcons from "../components/SocialIcons";
import { stylingVariables } from "../components/stylingVariables";

const pressPassword = "E"


const EpkWrap = styled.main`
position: relative;
  /* background: red; */
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
  const [pageLock, setPageLock] = useState(false);
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
      <article>
        <h1>lay your weapons down [single]</h1>
        <h2>Release Date: Fri, July 23rd. 2021</h2>
        <iframe width="484" height="478" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1068347344&amp;show_artwork=true&amp;auto_play=false&amp;show_playcount=true&amp;show_comments=true&amp;color=%23ff5500&amp;height=478&amp;width=484&amp;secret_token=s-0k4fZo2YNeU" class="embed-code-player__frame"></iframe>
        <h3>Notes:</h3>
        <h4>Lay Your Weapons Down</h4>
        <p>With the political/social unrest we have seen throughout this year in Myanmar, Colombia, The Gaza Strip, and more, this track explores the relationship between civilians/refugees, soldiers that are fighting someone else's war, and the political agenda of the powers that be. The initial spark of inspiration came from conversations with friends. Some of them had been refugees and others were imprisoned for more than 10 years for protesting and fighting for their freedom and human rights.
          I wanted to tell the story from that perspective as a reminder that it could happen to any one of us and to stay informed about what is happening around the world as wars are prolonged by the powers that are profiting from it.
        </p>
        <p><strong>Eunice Keitan:</strong>Songwriter, Producer, Vocals, Acoustic Guitar</p>
        <p><strong>Kevin Howley:</strong>Producer, Drum & Percussion, Bass, Electric Guitar</p>
        <p><strong>Sivasilan Muniandy:</strong>Gendang Traditional Drum</p>
        <p><strong>Josh Bowman:</strong>Mixing</p>
        <p><strong>Mojito Studios/Reuben Ghose:</strong>Mastering</p>
        <h3>Music Video Notes:</h3>
        <p>I chose to mix in archival footage from the Vietnam war and to tell the story through that lens because it’s a part of history that we have the benefit of hindsight. At the same time, it is also a story that remains relevant through the centuries. When creating the video I wanted the grunge and vintage treatment to reflect a sense of nostalgia (like memories of home) but also the grit and emotional tone of the track.</p>
        <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/Szt77S6NfZ0?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.eunice-keitan.com&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2"></iframe>
      </article>
      <article>
        <div>
          <h3>Artist Information:</h3>
          <p><strong>Label:</strong>Self Released</p>
          <p><strong>Genre:</strong>Alternative R&B/Gritty Neo-Soul</p>
          <p><strong>Home Town:</strong>Toronto, Singapore, Malaysia</p>
          <p><strong>Sounds Like:</strong>Emily King, Hiatus Kaiyote, Erykah Badu</p>
        </div>
        <div>
          <h3>Recent Press:</h3>
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
        <img src="" alt="" />
        <h3>Bio</h3>
        {bioDetails.map((parag, index) => (
          <p key={index}>{parag}</p>
        ))}
      </article>
      <article>
        <h3>Photos</h3>
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