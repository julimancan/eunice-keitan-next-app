import styled from "@emotion/styled";
import { useState } from "react";

const YoutubeContainer = styled.section`
  /* background: red; */
  * {
    /* border: 1px solid; */
  }
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
      margin-bottom: 2rem;
      /* align-items: center; */
      /* background: red; */
      h3 {
        font-size: 1rem;
      }
      .image-wrapper {
        width: 100%;
        overflow: hidden;
        /* 16:9 aspect ratio */
        padding-top: 56.25%;
        position: relative;
        img {
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 800px) {
    padding-top: 0 !important;
    /* background-color: violet; */
  }
`;

const VideoModal = styled.div`
  /* * { border: 1px solid } */
  background: black;
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};

  position: fixed;
  height: 100vh;
  width: 100vw;

  top: 0rem;
  z-index: 100;
  /* opacity: .8; */
  left: 0;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 0 1rem;
  /* overflow-y: scroll; */
  .modal-info {
    /* background: red; */
    /* height: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* padding: 1rem; */
    /* background: red; */
    /* opacity: 1; */
    /* overflow: scroll; */
    .container-for-container {
      /* max-height: 100px; */
      /* background: red; */
      width: 100%;
      /* overflow: hidden; */
      /* padding: 0 15rem; */
      /* max-height: 100px; */

      .video-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        width: 100%;
        /* height: 600px; */
        /* max-width: 600px; */
        /* max-height: 400px; */

        /* height: 30px; */
        /* background: red; */
        .youtube-video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border: 0;
          /* max-height: 400px; */
        }
      }
    }
    section {
      width: 100%;
      h4,
      p {
        color: white;
      }
    }
    @media (min-width: 800px) {
      .container-for-container {
        width: 80%;
      }
    }
    @media (min-width: 1000px) {
      flex-direction: row;

      /* .video { */
      /* position: relative; */
      .container-for-container {
        padding: 2rem;
      }
      /* } */
    }
  }
  .close-btn {
    background: white;
    width: 30px;
    height: 5px;
    position: absolute;
    right: 2rem;
    top: 2rem;
    transform: rotate(-45deg);
    cursor: pointer;
    border-radius: 5px;
    border: none;
    z-index: 110;
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

export default function YoutubePlaylist({ videos, current }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const modalClickHandler = () => {
    setIsModalOpen(!isModalOpen);
    if (modalInfo) {
      setModalInfo({});
    }
  };

  const getLinksFromDescription = (string) => string.match(/(\bhttp\S+\b)/gi);

  const getArtistName = (string) => string.split("-")[1];

  const getFirstParagraph = (string) => string.split("**")[0];
  // console.log({ videos });
  return (
    <YoutubeContainer>
      <ul>
        {videos &&
          Array.isArray(videos) &&
          videos.map((item, index) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId, description } = snippet;
            const { medium = {} } = thumbnails;

            if (title === "Deleted video") return;
            return (
              <li
                key={index}
                onClick={() => {
                  modalClickHandler();
                  setModalInfo({
                    title: title,
                    videoId: resourceId.videoId,
                    description: description,
                  });
                }}
              >
                <h3>{title}</h3>
                <div className="image-wrapper">
                  <img src={medium.url} alt={medium.title} />
                </div>
              </li>
            );
          })}
      </ul>
      <VideoModal isModalOpen={isModalOpen}>
        <div className="close-btn" onClick={modalClickHandler}></div>
        {modalInfo && (
          <div className="modal-info">
            <div className="container-for-container">
              <div className="video-container">
                <iFrame
                  className="youtube-video"
                  src={`https://www.youtube.com/embed/${modalInfo.videoId}`}
                ></iFrame>
              </div>
            </div>
            <section>
              <h4>
                {
                  (current = "tbft"
                    ? modalInfo.title && getArtistName(modalInfo.title)
                    : modalInfo.title)
                }
              </h4>
              <br />
              <p>
                {modalInfo.title && getFirstParagraph(modalInfo.description)}
              </p>
              {/* <p>{modalInfo.description}</p> */}
              <br />
            </section>
          </div>
        )}
      </VideoModal>
    </YoutubeContainer>
  );
}
