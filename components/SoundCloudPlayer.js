import ReactPlayer from 'react-player';

const SoundCloudPlayer = () => {
  return (
      <ReactPlayer 
        className="react-player"
        url="https://soundcloud.com/eunicekeitan/sets/eunice-keitan-top-tracks"
        // width="400px"
        width="100%"
        height="100%"
      />
  )
};

export default SoundCloudPlayer;
