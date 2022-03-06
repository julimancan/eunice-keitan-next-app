import { SiTidal, SiSpotify, SiBandcamp } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import styled from "@emotion/styled";
import SongLink from "./SongLink";


const SongLinksWrapper = styled.div`
display: flex;
gap: 1rem;
a {
  font-size: 2rem;
  
}
`;
const SongLinks = ({ songLinks }) => {
  const { tidal, youtube, bandcamp, spotify } = songLinks;
  console.log({ tidal, youtube, bandcamp, spotify });
  return (
    <SongLinksWrapper>
      {tidal && (
        <SongLink link={tidal} name="tidal" icon={<SiTidal />} />
      )}
      {youtube && (
        <SongLink link={youtube} name="youtube" icon={<AiFillYoutube />} />
      )}
      {bandcamp && (
        <SongLink link={bandcamp} name="bandcamp" icon={<SiBandcamp />} />
      )}
      {spotify && (
        <SongLink link={spotify} name="spotify" icon={<SiSpotify />} />
      )}
    </SongLinksWrapper>
  )
}

export default SongLinks