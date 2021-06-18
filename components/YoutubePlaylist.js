import styled from "@emotion/styled";
import { useState } from "react";


const YoutubeContainer = styled.section`
  /* background: red; */
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    /* background: yellow; */
    gap: 1rem;
    padding: 0;
    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* background: red; */
    }
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`;


const VideoModal = styled.div`
  background: black;
  display: ${({ isModalOpen }) => isModalOpen ? "flex" : "none"};
  position: fixed ;
  min-height: 100vh;
  width: 100vw;
  top: 0rem;
  z-index: 100;
  /* opacity: .8; */
  left: 0;
  align-items: center;
  justify-content: center;
  article {
    
    /* background: red; */
    /* height: 100px; */
    display: flex;
    width: 100%;
    padding: 1rem;
    /* background: red; */
    opacity: 1;
    overflow: hidden;
    section {
      width: 40%;
      margin-left: 1rem;
      overflow-y: auto;   
      h1, p {
        color: white;
      }
      p {
        overflow-wrap: anywhere;
      }
    }
    iframe {
      align-self: center;
      
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  .close-btn {
    background: white;
    width: 30px;
    height: 5px;
    position: absolute;
    right: 2rem;
    top: 2rem;
    transform: rotate(-45deg) ;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    &:after {
      content: "";
      cursor: pointer;
      border-radius: 5px;
      border: none;
      position: absolute;
      width: 30px;
      height: 5px;
      background: white;
      transform: rotate(90deg);
    }
  }
`;


export default function YoutubePlaylist({ videos }) {
  // console.log(videos)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ });


  const modalClickHandler = () => {
    setIsModalOpen(!isModalOpen)
    if (modalInfo) {
      setModalInfo({})
    }
  };

  const getLinksFromDescription = string => string.match(/(\bhttp\S+\b)/ig);
  
  const getArtistName = string => string.split("-")[1];
  
  const getFirstParagraph = string => string.split("**")[0];


  return (
    <YoutubeContainer>

      <ul>

        {videos.items && videos.items.map((item, index) => {
          console.log(item)
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId, description } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <li key={index} onClick={() => {
              modalClickHandler();
              setModalInfo({ 
                title: title,
                videoId: resourceId.videoId,
                description: description
              });
             }
            }
            >
              {/* <a  
               href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
            > */}

              <img width={medium.width} height={medium.height} src={medium.url} alt="" />
              <h3>
                {title}
              </h3>
              {/* </a> */}
            </li>
          )
        })}
      </ul>
      <VideoModal isModalOpen={isModalOpen}>
        <div className="close-btn" onClick={modalClickHandler}></div>
        {modalInfo && (
          <article>
            <iframe width="100%" height="500px"  src={`https://www.youtube.com/embed/${modalInfo.videoId}`}></iframe>
            <section>
              {modalInfo.description && console.log("here", getLinksFromDescription(modalInfo.description))}
              <h1>{modalInfo.title && getArtistName(modalInfo.title)}</h1>
              <p>{modalInfo.title && getFirstParagraph(modalInfo.description)}</p>
              {/* <p>{modalInfo.description}</p> */}
            </section>
          </article>
        )}
      </VideoModal>
    </YoutubeContainer>
  )
}

