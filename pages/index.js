import styled from '@emotion/styled';
import InstagramFeed from '../components/InstagramFeed';
import SocialIcons from '../components/SocialIcons';
import SoundCloudPlayer from '../components/SoundCloudPlayer';
import { stylingVariables } from '../components/stylingVariables';
// import Instagram from "instagram-web-api";


// export async function getStaticProps(context) {
//   const client = new Instagram({
//     username: process.env.IG_USERNAME,
//     password: process.env.IG_PASSWORD,
//   });


//   let posts = [];

//   let images = [];

//   try {
//     await client.login()
//     const instagram = await client.getPhotosByUsername({
//       username: process.env.IG_USERNAME,
//     })

//     if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
//       // if we receive timeline data back
//       //  update the posts to be equal
//       // to the edges that were returned from the instagram API response
//       posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
//     }
//   } catch (err) {
//     console.log("Something went wrong while logging into Instagram", err)
//   }

//   return {
//     props: {
//       instagramPosts: posts,
//     }
//   }
// }


const HomeContainer = styled.main`
display: flex;
justify-content: center;
position: relative;
article {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-50%);
  
  * {
    margin: .3rem 0;
    color: ${stylingVariables.homePageTextColor};
  }
  h1 {
    position: relative;
    overflow: hidden;
  }
  h2 {
    font-size: 2.5vw;
  }  
  button {
    font-family: "PrequelDemo";
    opacity: .8;
    padding: .5rem 1rem;
    transition: .2s;
    &:hover {
      border: 2px solid #755B49;
      /* border-radius: 5px; */
      color: white;
      background: #755B49;
    }
  }
}


`;

const HeroImage = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;


export default function Home({ instagramPosts }) {
  // console.log(`instagramPosts`, instagramPosts)
  // const posts = instagramPosts;
  return (
    <HomeContainer>
      <HeroImage autoPlay loop muted>
        <source src="/LYWD-websiteloop.mp4" type="video/mp4" />
      </HeroImage>
      <article>

        <h1>New Single</h1>
        <h2>July23rd</h2>
        <button>PRE-SAVE NOW</button>

      </article>
      <SocialIcons />
    </HomeContainer>
  )
}
