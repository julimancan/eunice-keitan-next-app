import Head from "next/head";

const Seo = ({ title, description, favicon, pageBgColor, siteUrl = "www.rasavineyards.com" }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta key="og_type" property="og:type" content={"website"} />
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index,follow" />

      {favicon && (
        <>
          <link rel="shortcut icon" href={favicon} />
          <meta property="og:image" content={favicon} />
        </>
      )}
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="og_title" />
          <meta property="og:site_name" content={title} key="og_sitename" />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} key="og_desc" />
        </>
      )}
      {siteUrl && <meta property="og:url" content={siteUrl}  key="og_url"/>}
      {pageBgColor && (
        <meta
          name="apple-mobile-web-app-status-bar"
          content={pageBgColor || "#ffffff"}
        />
      )}
    </Head>
  );
};

export default Seo;
