import styled from "@emotion/styled"

const InstaContainer = styled.div`
  display: flex;
  flex-direction: column;
    h2 {
      align-self: center;
    }
  ul {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
    li {
      /* background: red; */
      a {
        /* background: blue; */
        img {
          width: 100%;
        }
      }
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
 }
`;


const InstagramFeed = ({ instagramPosts }) => {
  return (
    <InstaContainer>

      <h2>
        <a href="https://www.instagram.com/yourinstagramhandle/">
          Follow my journey on Instagram
        </a>

      </h2>
      <ul>
        {/* let's iterate through each of the
         instagram posts that were returned
         from the Instagram API*/}
        {instagramPosts.map(({ node }, i) => {
          console.log("node", node)
          return (
            // let's wrap each post in an anchor tag
            // and construct the url for the post using
            // the shortcode that was returned from the API
            <li>
              <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label="view image on Instagram"
                target="_blank"
              >
                {/* set the image src equal to the image
                url from the Instagram API*/}
 

                  <img
                    src={node.thumbnail_src}
                    alt={
                      // the caption with hashtags removed
                      node.edge_media_to_caption.edges[0].node.text
                        .replace(/(#\w+)+/g, "")
                        .trim()
                    }
                  />
                <span>{node.edge_media_to_caption.edges[0].node.text}</span>
              </a>
            </li>
          )
        })}
      </ul>

    </InstaContainer>
  )
}

export default InstagramFeed
