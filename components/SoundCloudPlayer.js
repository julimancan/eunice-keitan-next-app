import ReactPlayer from 'react-player';

const SoundCloudPlayer = () => {
  return (
      <ReactPlayer 
        className="react-player"
        url="https://soundcloud.com/eunicekeitan/sets/eunice-keitan-top-tracks"
        width="400px"
        height="500px"
      />
  )
};

export default SoundCloudPlayer;
