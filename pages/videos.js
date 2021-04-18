import styled from '@emotion/styled';
import YoutubePlaylist from '../components/YoutubePlaylist';


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const TooBrokePlaylistId = "PLpkedUE5iQ2c-QMpY4hOZnll1yE2hUZLT";

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${TooBrokePlaylistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

const VideosPageContainer = styled.main``;


const videos = ({ data }) => {
  return (
    <VideosPageContainer>
      <article>
        <h2>
          Too Broke for Therapy
        </h2>
        <p>
          What do you do when you're too broke to afford therapy? You ask a friend how they are keeping their shi...stuff together. When your friends are other artists they can get creative! This series explores the challenges that musicians face in the industry and how it affects their mental health. They share their top tips on how they stay balanced on zero budget in an industry that can easily burn you out and make you feel that big 'D' word. Depressed.
        </p>
      </article>
      <YoutubePlaylist videos={data} />

    </VideosPageContainer>
  )
}

export default videos
