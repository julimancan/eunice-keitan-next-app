import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { FaBandcamp, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { useGlobalState } from '../state';


const SocialIconsContainer = styled.div`
  width: fit-content;
  display: flex;
  right: 1rem;
  svg {
    font-size: clamp(2rem, -0.875rem + 5.333vw, 2rem);
    margin: ${"0 .5rem" };
    color: ${({colors}) => colors.menuTextColor};
  }
`;
let socialLinkList = {
  spotify: "https://open.spotify.com/",
  instagram: "https://www.instagram.com/",
  bandcamp: "https://www.bandcamp.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
}

const SocialIcons = () => {
  const [colors] = useGlobalState("colors")
  const [siteSettings] = useGlobalState("siteSettings")
  const router = useRouter();
  const currentPage = router.pathname;

  socialLinkList = {
    spotify: siteSettings.spotifyArtistLink,
    instagram: siteSettings.instagramAccountLink,
    bandcamp: siteSettings.bandcampArtistLink,
    facebook: siteSettings.facebookArtistLink,
    youtube: siteSettings.youtubeArtistLink
  }

  return (
    <SocialIconsContainer className="social-icons" currentPage={currentPage} colors={colors}>
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
