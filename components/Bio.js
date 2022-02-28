import styled from "@emotion/styled";
import SoundCloudPlayer from "./SoundCloudPlayer"
import TextContent from "./TextContent";



const BioContainer = styled.article`
  display: flex;
  position: relative;
  columns: 2;
  .bio {
    margin: 0 2rem 0 0 ;
    border-right: 3px solid black;
    padding-right: 2rem;
    
    h2 {
      position: relative;
      width: fit-content;
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

  }
  .soundCloud {
    margin-top: 3rem;
    min-width: 50%;
    display: flex;
    .react-player {
      height: 100%;
      overflow: hidden;
      /* overflow: hidden; */
      padding-top: 56.25%;
      position: relative;
      iframe {
      /* max-height: 500px; */
      border: 0;
      /* height: 100%; */
      left: 0;
      position: absolute;
      top: 0;
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


const Bio = ({ bioTitle, bioText, soundcloudTopTracksLink }) => {
  return (
    <BioContainer>

      <div className="bio">
        <h2>
          {bioTitle}
        </h2>
          <TextContent content={bioText}/>
      </div>
      <div className="soundCloud">
        <SoundCloudPlayer source={soundcloudTopTracksLink} />
      </div>
    </BioContainer>
  )
};

export default Bio;
