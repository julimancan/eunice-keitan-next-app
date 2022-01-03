import BlockContent from "@sanity/block-content-to-react"
import { urlFor } from "../lib/api"

const serializers = {
  types: {
    image: ({node: {asset, alt, position = "center"}}) => (
      <picture className={`bio-image-${position}`}>
        <img src={urlFor(asset).height(300).fit("max").url()} alt={alt}/>
      </picture>
    )
  }
}

const TextContent = ({content}) => {
  return (
    <BlockContent
      serializers={serializers}
      blocks={content}
    />
      
  )
}

export default TextContent
