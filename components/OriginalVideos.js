import YoutubePlaylist from "./YoutubePlaylist";

const OriginalVideos = ({ originalsData }) => {
  return (
    <article>
      <h2>videos</h2>
      <YoutubePlaylist videos={originalsData} />

    </article>
  )
};

export default OriginalVideos;