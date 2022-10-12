export const imageObject = `
imageObject {
  alt, 
  "url": image.asset->url, 
  "height": image.asset -> metadata.dimensions.height,
  "width": image.asset -> metadata.dimensions.width,
  "aspectRatio": image.asset -> metadata.dimensions.aspectRatio
}
`

