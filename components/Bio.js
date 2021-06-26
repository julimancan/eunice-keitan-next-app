import styled from "@emotion/styled";


const BioContainer = styled.section`

section {
  display: flex;
  position: relative;
  /* margin-bottom: 2rem; */
  padding: 2rem;
  @media (max-width: 800px) {
   flex-direction: column; 
   /* background: red; */
  .soundCloud { 
    width: 100%;
  }
  }
    /* background: red; */
  }
  .bio {
    width: 50%;      
    margin: 0 0 0 2rem;
    border-left: 3px solid black;
    padding-left: 2rem;
  }
  @media (max-width: 800px) {
  .soundCloud {
    width: 30%;
    margin-bottom: 1rem;
  }
  .bio {
    width: 80%;
  }
}
`;


const Bio = () => {
  return (
    <BioContainer>
          <div className="soundCloud">
            <SoundCloudPlayer />
          </div>
          <div className="bio">
            <h3>
              BIO
          </h3>
            <span>
              <p>
                Eunice Keitan's soulful voice makes a big impression on listeners. Both her international upbringing and her eclectic music background show in this Canadian singer-songwriter's work which mixes R&B/Acoustic Soul and World Folk influences.
          </p>
              <br />
              <p>Eunice Keitan's soulful voice makes a big impression on listeners. Both her international upbringing and her eclectic music background show in this Canadian singer-songwriter's work which mixes R&B/Acoustic Soul and World Folk influences.
          </p>
              <br />
              <p>Eunice was nominated for a Toronto Independent Music Award for her last EP, 'Where The Road Begins'. The songwriter's latest offering, "Standing With You" is an uplifting anthem of hope and solidarity that makes a bold and moving statement for a better future of true justice and equality.
          </p>
            </span>
          </div>
        </BioContainer>
  )
};

export default Bio;
