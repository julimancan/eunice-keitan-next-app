import styled from '@emotion/styled';
import SocialIcons from '../components/SocialIcons';
import Tbft from '../components/Tbft';
import Bio from '../components/Bio';


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const tooBrokePlaylistId = "PLpkedUE5iQ2c-QMpY4hOZnll1yE2hUZLT";

export async function getServerSideProps() {
  // fetch too broke for therapy (tbft) youtube playlist
  const tbftRes = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${tooBrokePlaylistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const tbftData = await tbftRes.json();

  return {
    props: {
      tbftData
    }
  }
}

const VideosPageContainer = styled.main`
 h2 {
      position: relative;
      width: fit-content;
      &:before {
        content: "{";
        left: -.7ch;
      }
      &:after {
        content: "}";
        right: -.7ch;
      }
      &:after, &:before {
        position: absolute;
        top: -15%;
        font-family: "PrequelDemo";
      }
    }
    .youtube-wrapper {
      height: 30vw;
      margin: 1rem 0;
    }
/* background: red; */
@media (max-width: 800px) {
  padding: 0 1rem;
}
`;


const videos = ({ tbftData }) => {
  return (
    <VideosPageContainer>
      <Bio />
      <article>
        <h2>videos</h2>
        {/* <iframe controls width="250"
          src="https://www.youtube.com/watch?v=teJlgs1vnw0"
            // type="iframe/webm" 
            width="420" height="315"

        /> */}
        <div className="youtube-wrapper">
          <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/teJlgs1vnw0"
            title="Standing With You by Eunice Keitan"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>


        <Tbft tbftData={tbftData} />
        <SocialIcons />
      </article>
    </VideosPageContainer>
  )
}

export default videos
