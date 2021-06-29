import styled from "@emotion/styled";
import { soundCloudTopTracks } from "../utils/constants";
import { bioDetails } from "./content";
import SoundCloudPlayer from "./SoundCloudPlayer"


const BioContainer = styled.article`
  display: flex;
  position: relative;
  /* margin-bottom: 2rem; */
  /* padding: 2rem; */
  columns: 2;
  /* max-height: 300px; */
  .bio {
    /* width: 50%;       */
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
    /* width: 80%; */
    /* height: 500px; */
    min-width: 50%;
    /* min-height: 500px; */
    /* max-height: 100px; */
    display: flex;
    /* align-items: flex-end; */
    /* background: red; */
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
      /* width: 100%; */
      margin: 1rem 0;
      /* min-height: 700px; */
      /* background: red; */
      
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


const Bio = () => {
  return (
    <BioContainer>

      <div className="bio">
        <h2>
          bio
        </h2>
        <span>
          {bioDetails.map((parag, index) => (
            <p key={index}>{parag}</p>
          ))}
        </span>
      </div>
      <div className="soundCloud">
        <SoundCloudPlayer source={soundCloudTopTracks} />
      </div>
    </BioContainer>
  )
};

export default Bio;
