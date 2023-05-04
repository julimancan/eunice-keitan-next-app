import styled from "@emotion/styled";
import TextContent from "./TextContent";

const BioContainer = styled.article`
  display: flex;
  position: relative;
  columns: 2;
  .bio {
    margin: 0 2rem 0 0;
    border-right: 3px solid black;
    padding-right: 2rem;

    h2 {
      position: relative;
      width: fit-content;
      &:before {
        content: "{";
        left: -0.7ch;
      }
      &:after {
        content: "}";
        right: -0.7ch;
      }
      &:after,
      &:before {
        position: absolute;
        top: -15%;
        font-family: "PrequelDemo";
      }
    }
  }
  .spotify {
    margin-top: 3rem;
    min-width: 50%;
    display: flex;
    .spotify-player {
      /* background-color: yellow; */
      height: 100%;
      position: relative;
      width: 100%;

      iframe {
        width: 100%;
      }
    }
  }
  @media (max-width: 950px) {
    flex-direction: column;
    /* padding: 1rem; */
    .soundCloud {
      /* margin: 1rem 0; */
    }
    .bio {
      /* width: 100%; */
      border-right: none;
      padding-right: 0rem;
      margin: 0;
      /* padding: 2rem; */
    }
  }
`;

const Bio = ({ bioTitle, bioText, spotifyPlaylist }) => {
  // console.log({spotifyPlaylist});
  return (
    <BioContainer>
      <div className="bio">
        <h2>{bioTitle}</h2>
        <TextContent content={bioText} />
      </div>
      <div className="spotify">
        <div
          dangerouslySetInnerHTML={{ __html: spotifyPlaylist }}
          className="spotify-player"
        ></div>
      </div>
    </BioContainer>
  );
};

export default Bio;
