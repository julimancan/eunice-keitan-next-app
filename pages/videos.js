import styled from '@emotion/styled';
import SocialIcons from '../components/SocialIcons';
import Tbft from '../components/Tbft';
import Bio from '../components/Bio';
import OriginalVideos from '../components/OriginalVideos';


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const tooBrokePlaylistId = "PLpkedUE5iQ2c-QMpY4hOZnll1yE2hUZLT";
const originalsListId = "PLpkedUE5iQ2dahlWY_NcihoalzwU0Z7QE"

export async function getServerSideProps() {
  // fetch too broke for therapy (tbft) youtube playlist
  const tbftRes = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${tooBrokePlaylistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const tbftData = await tbftRes.json();
  const originalsRes = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${originalsListId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const originalsData = await originalsRes.json();

  return {
    props: {
      tbftData,
      originalsData
    }
  }
}

const VideosPageContainer = styled.main`
* {
  /* border: 1px solid */
}
 h2 {
      position: relative;
      width: fit-content;
      margin-left: .5ch;
      margin-bottom: .5rem;
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
    article {
      margin: 1rem 0;
    }
/* background: red; */
@media (max-width: 800px) {
  padding: 0 1rem;
}
`;


const videos = ({ tbftData, originalsData }) => {
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

        <OriginalVideos originalsData={originalsData}/>
        <Tbft tbftData={tbftData} />
        <SocialIcons />
      </article>
    </VideosPageContainer>
  )
}

export default videos
