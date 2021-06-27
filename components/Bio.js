import styled from "@emotion/styled";
import SoundCloudPlayer from "./SoundCloudPlayer"


const BioContainer = styled.article`
  display: flex;
  position: relative;
  /* margin-bottom: 2rem; */
  padding: 2rem;
  .bio {
    width: 50%;      
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
    display: flex;
    align-items: flex-end;

  }
  @media (max-width: 950px) {
    flex-direction: column;
    .soundCloud {
      /* width: 100%; */
      margin: 1rem 0;
    }
    .bio {
      width: 100%;
      border-right: none;

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
          <p>
            Eunice Keitan's soft, soulful melodious voice is entrancing. Her international upbringing and her eclectic musical background are unmistakable in this Canadian singer-songwriter's work, which tastefully blends R&B/Acoustic Soul and World Folk influences.
          </p>
          <br />
          <p>
            While traveling and moving often with her family in simple circumstances throughout her childhood, Eunice noticed the often harsh realities of everyday people. The observance of these struggles uncovered her awareness of the effectuating force of political and social issues on people's lives. These issues surface as themes in many of her songs, where she explores mental health, equality and social change.
          </p>
          <br />
          <p>
            Eunice was nominated for a Toronto Independent Music Award for her EP, “Where The Road Begins” and is set to release her new single "Lay Your Weapons Down" on July 23rd.
          </p>
        </span>
      </div>
      <div className="soundCloud">
        <SoundCloudPlayer />
      </div>
    </BioContainer>
  )
};

export default Bio;
