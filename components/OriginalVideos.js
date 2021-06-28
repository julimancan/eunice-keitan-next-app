import YoutubePlaylist from "./YoutubePlaylist";

const OriginalVideos = ({ originalsData }) => {
  return (
    <article>
      <h2>Originals</h2>
      <YoutubePlaylist videos={originalsData} />

    </article>
  )
};

export default OriginalVideos;