import YoutubePlaylist from "./YoutubePlaylist";



const OriginalVideos = ({ originalsData }) => {
  console.log(originalsData.items);

  // const liveMusicVideos = originalsData.items.filter(item => item.snippet.title.includes("LIVE") || item.snippet.title.includes("Live") || item.snippet.title.includes("live"))

  // const musicVideos = originalsData.items.filter(item => !item.snippet.title.includes("LIVE") || !item.snippet.title.includes("Live") || !item.snippet.title.includes("live"))

  const splitIntoLiveAndMusicVideos = (videosArr) => {
    const liveMusicVideos = []
    const musicVideos = []

    videosArr.forEach(video => {
      if (video.snippet.title.includes("LIVE") || video.snippet.title.includes("Live") || video.snippet.title.includes("live")) {
        liveMusicVideos.push(video)
      } else {
        musicVideos.push(video)
      }
    });
    return {
      liveMusicVideos,
      musicVideos
    }
  }
  const {liveMusicVideos, musicVideos} = splitIntoLiveAndMusicVideos(originalsData.items)

  // console.log({liveMusicVideos, musicVideos});
  return (
    <article>
      <h2>live videos</h2>
      <YoutubePlaylist videos={liveMusicVideos} />
      <h2>music videos</h2>
      <YoutubePlaylist videos={musicVideos} />

    </article>
  )
};

export default OriginalVideos;