import YoutubePlaylist from "./YoutubePlaylist";

const Tbft = ({ tbftData }) => {
  return (
    <article>
        <h2>
          Too Broke for Therapy
        </h2>
        <p>
          What do you do when you're too broke to afford therapy? You ask a friend how they are keeping their shi...stuff together. When your friends are other artists they can get creative! This series explores the challenges that musicians face in the industry and how it affects their mental health. They share their top tips on how they stay balanced on zero budget in an industry that can easily burn you out and make you feel that big 'D' word. Depressed.
        </p>
      <YoutubePlaylist videos={tbftData} />
      </article>
  )
};

export default Tbft;
