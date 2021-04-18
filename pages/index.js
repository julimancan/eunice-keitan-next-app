import styled from '@emotion/styled';
import Head from 'next/head'
import InstaFeed from '../components/InstaFeed';
import SocialIcons from '../components/SocialIcons';
import SoundCloudPlayer from '../components/SoundCloudPlayer';


const HomeContainer = styled.main`

 
  article {
    /* background: red; */
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h3 {
      font-style: italic;
      font-size: 2rem;
    }
    h2 {
      font-size: 3rem;
      color: #766D64;
      font-weight: 900;
    }
    span {

    }
    img {

    }
    .line {

    }
  }
  section {
    display: flex;
    position: relative;
    /* margin-bottom: 2rem; */
    padding: 2rem;
    .bio {
      width: 50%;      
      margin: 0 0 0 2rem;
      border-left: 3px solid black;
      padding-left: 2rem;
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  grid-area: center;
  @media (min-width: 800px) {
    width: 80%;
  }
`;


export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Eunice Keitan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer>
        <HeroImage src="https://static.wixstatic.com/media/14399d_f2a42798778e44ee9de65b66e04877f1~mv2.jpg/v1/fill/w_1225,h_650,al_c,q_85,usm_0.66_1.00_0.01/14399d_f2a42798778e44ee9de65b66e04877f1~mv2.webp" />
        <article>
          <h3>
            New Single
        </h3>
          <h2>
            Standing With You
        </h2>
          <span>Now available on all platforms</span>
          <img src="https://static.wixstatic.com/media/14399d_15c0631230cd478990b16124f1fb795d~mv2.jpg/v1/fill/w_245,h_265,al_c,q_80,usm_0.66_1.00_0.01/StandingWIthYou-1080x1080.webp" />
          <div className="line"></div>
          <SocialIcons />

          <div className="video"></div>
        </article>
        <section>
          <div className="soundCloud">
            <SoundCloudPlayer/>
          </div>
          <div className="bio">
            <h3>
              BIO
          </h3>
            <span>
              <p>
                Eunice Keitan's soulful voice makes a big impression on listeners. Both her international upbringing and her eclectic music background show in this Canadian singer-songwriter's work which mixes R&B/Acoustic Soul and World Folk influences.
          </p>
              <br />
              <p>Eunice Keitan's soulful voice makes a big impression on listeners. Both her international upbringing and her eclectic music background show in this Canadian singer-songwriter's work which mixes R&B/Acoustic Soul and World Folk influences.
          </p>
              <br />
              <p>Eunice was nominated for a Toronto Independent Music Award for her last EP, 'Where The Road Begins'. The songwriter's latest offering, "Standing With You" is an uplifting anthem of hope and solidarity that makes a bold and moving statement for a better future of true justice and equality.
          </p>
            </span>
          </div>
        </section>
        <InstaFeed />
        <SocialIcons />
      </HomeContainer>


    </div>
  )
}
