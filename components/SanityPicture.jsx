import styled from "@emotion/styled";
import { urlFor } from "../lib/api";


const SanityPicture = ({ url, alt, sm = [100, 100], md = [200, 200], lg = [400, 400], classNames, lazyLoading = false }) => {
  const [smWidth, smHeight] = sm;
  const [mdWidth, mdHeight] = md;
  const [lgWidth, lgHeight] = lg;
  return (
    <picture className={`${classNames || ""}`}>
      <source
        media="(max-width: 799px)"
        srcSet={urlFor(url)
          .dataset("production")
          .width(smWidth)
          .height(smHeight)
          .format("webp")
          .url()}
          />
      <source
        media="(min-width: 800px) (max-width: 1199px)"
        srcSet={urlFor(url)
          .dataset("production")
          .width(mdWidth)
          .height(mdHeight)
          .format("webp")
          .url()}
          />
      <source
        media="(min-width: 1200px)"
        srcSet={urlFor(url)
          .dataset("production")
          .width(lgWidth)
          .height(lgHeight)
          .format("webp")
          .url()}
      />

      <img
        src={urlFor(url).dataset("production").width(smWidth || 300).height(smHeight || 450).url()}
        alt={alt}
        loading={lazyLoading ? 'lazy' : undefined}
      />
    </picture>
  );
};

export default SanityPicture;
