import styled from '@emotion/styled';
import { FaBandcamp, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { stylingVariables } from './stylingVariables';


const SocialIconsContainer = styled.div`
  svg {
    font-size: 3rem;
    margin: 1rem .5rem;
    color: ${stylingVariables.menuTextColor}
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
  return (
    <SocialIconsContainer>
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
