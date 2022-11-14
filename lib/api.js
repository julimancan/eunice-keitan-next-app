import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import { imageObject } from "./objects";

export const getSiteSettings = async () => {
  const results = await client.fetch(`*[_type == "siteSettings"]`);
  return results;
};

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

const homepageItems = `
  title,
  subtitle,
  subtitle2,

  showLink,
  "button": link {
    linkText,
    linkUrl
  },
  "bgVideo": bgVideo{"main": webm.asset->url, "fallback": fallback.asset->url, alt},
  songLinks
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
  youtubeSingleEmbed,
  "youtubeVideoArray": youtubeVideoArray[] {name, youtubeEmbed},
  youtubePlaylistId,
  soundCloudEpkEmbed,
  releaseDate,
  releaseNotesTitle,
  releaseNotes,
  otherNotestitle,
  otherNotes,
  artistInfo,
  recentPress,
  "bioImage": bioImage{alt, "url": asset->url},
  lyrics,
  "photosSection": photosSection.photosGallery[]{alt, "url": asset->url},
  "photosGallery1": photosSection.photosGallery1[],
  "photosSectionTitle": photosSection.photosTitle
  `;

export const getEpkPageContent = async () => {
  const results = await client.fetch(`*[_type == "epkPage"] {
    ${epkPageItems}
  }`);
  return results[0];
};

export const getAllSongReleaseSlugs = async () => {
  const results = await client.fetch(`*[_type == "releaseLandingPage"]{
    "slug": slug.current
  }`);
  return results;
};

const songReleaseItems = `
  name,
  description,
  songLink,
  "image": ${imageObject},
  preSaveLink,
  releaseDate

`;
export const getReleasePageContent = async (slug) => {
  const results = await client.fetch(`*[_type == "releaseLandingPage" && slug.current == $slug] {
    ${songReleaseItems}
  }`, {slug});
  
  return results[0]
};
