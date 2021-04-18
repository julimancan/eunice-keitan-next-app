import ReactPlayer from 'react-player'

const SoundCloudPlayer = () => {
  return (
    <div>
      <ReactPlayer 
        className="react-player"
        url="https://soundcloud.com/eunicekeitan/sets/eunice-keitan-top-tracks"
        width="30vw"
      />
    </div>
  )
}

export default SoundCloudPlayer;
