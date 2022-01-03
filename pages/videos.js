import styled from '@emotion/styled';
import SocialIcons from '../components/SocialIcons';
import Tbft from '../components/Tbft';
import Bio from '../components/Bio';
import OriginalVideos from '../components/OriginalVideos';
import { getSiteSettings, getVideosPageContent } from '../lib/api';
import { useGlobalState } from '../state';
import { useEffect } from 'react';


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const originalsListId = "PLpkedUE5iQ2dahlWY_NcihoalzwU0Z7QE"

export async function getServerSideProps() {

  const videosPageContent = await getVideosPageContent();
  // fetch too broke for therapy (tbft) youtube playlist
  const tbftRes = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${videosPageContent.youtubeTooBroke.youtubePlaylist}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const tbftData = await tbftRes.json();
  const originalsRes = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${videosPageContent.youtubeOriginals.youtubePlaylist}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const originalsData = await originalsRes.json();
  const siteConfig = await getSiteSettings();

  return {
    props: {
      tbftData,
      originalsData,
      siteConfig,
      videosPageContent
    }
  }
}

const VideosPageContainer = styled.main`
 padding: 0 .5rem;
 margin-bottom: 2rem;
 h2 {
      position: relative;
      width: fit-content;
      margin-left: .5ch;
      margin-bottom: .5rem;
      font-size: 2rem;
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
      /* height: 30vw; */
      margin: 1rem 0;
      overflow: hidden;
      /* 16:9 aspect ratio */
      padding-top: 56.25%;
      position: relative;
      iframe {
        border: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    article {
      margin: 1rem 0;
      width: 100%;
    }
    .social-icons {
      margin: 0 auto;
    }
`;


const videos = ({ tbftData, originalsData, siteConfig, videosPageContent }) => {
  const [siteSettings, setSiteSettings] = useGlobalState("siteSettings");
  
  useEffect(() => {
    setSiteSettings(siteConfig[0]);
  }, []);
  
  const { soundcloudTopTracksLink } = videosPageContent;
  const { bioTitle, bioText } = siteSettings;

  return (
    <VideosPageContainer>
      <Bio bioTitle={bioTitle} bioText={bioText} soundcloudTopTracksLink={soundcloudTopTracksLink} />
      <OriginalVideos originalsData={originalsData} current="videos" />
      <Tbft tbftData={tbftData} current="tbft" />
      <SocialIcons />
    </VideosPageContainer>
  )
}

export default videos
