import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { FaBandcamp, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { stylingVariables } from './stylingVariables';


const SocialIconsContainer = styled.div`
  width: fit-content;
  position: ${({ currentPage }) => currentPage === "/" ? "absolute" : "" };
  display: flex;
  flex-direction: ${({ currentPage }) => currentPage === "/" ? "column" : "" };
  right: 1rem;
  transform: ${({ currentPage }) => currentPage === "/" ? "translateY(-50%)" : "" };
  margin: ${({ currentPage }) => currentPage === "/" ? "" : "2rem 0" };
  svg {
    font-size: clamp(2rem, -0.875rem + 5.333vw, 2rem);
    margin: ${({ currentPage }) => currentPage === "/" ? ".5rem 0" : "0 .5rem" };
    color: ${stylingVariables.homePageTextColor};
  }
`;
const socialLinkList = {
  spotify: "https://open.spotify.com/artist/18JNzHrZSTRipGMO4JMXhD?autoplay=true",
  instagram: "https://www.instagram.com/eunicekeitan/",
  bandcamp: "https://eunicekeitan.bandcamp.com/",
  facebook: "https://www.facebook.com/eunicekeitan/",
  youtube: "https://www.youtube.com/ekeitan",
}

const SocialIcons = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <SocialIconsContainer className="social-icons" currentPage={currentPage}>
      <a href={socialLinkList.spotify}
        target="_blank"
      >
        <FaSpotify />
      </a>
      <a href={socialLinkList.instagram}
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a href={socialLinkList.bandcamp}
        target="_blank"
      >
        <FaBandcamp />
      </a>
      <a href={socialLinkList.facebook}
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a href={socialLinkList.youtube}
        target="_blank"
      >
        <FaYoutube />
      </a>
    </SocialIconsContainer>

  )
}

export default SocialIcons;
