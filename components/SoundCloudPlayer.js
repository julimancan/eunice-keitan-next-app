import ReactPlayer from 'react-player';



const SoundCloudPlayer = ({ source }) => {
  return (
      <ReactPlayer 
        className="react-player"
        url={source}
        // width="400px"
        width="100%"
        height="100%"
      />
  )
};

export default SoundCloudPlayer;
