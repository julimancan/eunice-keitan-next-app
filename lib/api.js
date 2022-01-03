import client from "./sanity";
import  imageUrlBuilder from "@sanity/image-url";


export const getSiteSettings = async () => {
  const results = await client.fetch(`*[_type == "siteSettings"]`);
  return results;
};

const builder = imageUrlBuilder(client);


export function urlFor(source) {
  return builder.image(source);
};

const homepageItems = `
  title,
  subtitle,
  subtitle2,
  ctaText,
  "bgVideo": bgVideo{"main": webm.asset->url, "fallback": fallback.asset->url, alt}
`;

export const getHomePageContent = async () => {
  const results = await client.fetch(`*[_type == "homepage"] {
    ${homepageItems}
  }`);
  return results[1];
};

const videosPageItems = `
  title, 
  pageBgColor,
  pageTextColor,
  soundcloudTopTracksLink,
  youtubeOriginals,
  youtubeTooBroke,
`;

export const getVideosPageContent = async () => {
  const results = await client.fetch(`*[_type == "videosPage"] {
    ${videosPageItems}
  }`);
  return results[0];
};
const epkPageItems = `
  title, 
  pageBgColor,
  pageTextColor,
  epkLock,
  epkLockPwTitle,
  epkLockPw,
  epkLockPwCtaText,
  releaseType,
  youtubeSingleLink,
  youtubePlaylistId,
  releaseDate,
  releaseNotesTitle,
  releaseNotes,
  otherNotestitle,
  otherNotes,
  artistInfo,
  recentPress,
  "bioImage": bioImage{alt, "url": asset->url},
  soundCloudEpkLink,
  lyrics,
  "photosSection": photosSection.photosGallery[]{alt, "url": asset->url},
  "photosSectionTitle": photosSection.photosTitle
  `;
  // "photosSectionTitle": photosSection.photosTitle
  // "photosSection": photosSection->{photosTitle, "photosGallery": photosGallery.asset->url}

export const getEpkPageContent = async () => {
  const results = await client.fetch(`*[_type == "epkPage"] {
    ${epkPageItems}
  }`);
  return results[0];
};