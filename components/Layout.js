import styled from "@emotion/styled";
import { useGlobalState } from "../state";
import Header from "./Header";

const LayoutWrapper = styled.div`

  @font-face {
    font-family: "Oceanside-Typewriter";
    src: url("/fonts/Oceanside-Typewriter.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "PrequelDemo";
    src: url("/fonts/PrequelDemo-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "American-Typewriter";
    src: url("/fonts/American-Typewriter-Regular.ttf");
    font-display: swap;
  }

  h1 {
    font-family: ${({headingFonts}) => headingFonts || "PrequelDemo"};
    font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
    font-weight: 400;
    color: ${({colors}) => colors.menuBarColor};
    white-space: nowrap;
  }
  h2 {
    font-family: ${({subtitleFonts}) => subtitleFonts || "PrequelDemo"};
    font-size: clamp(.7rem, -0.875rem + 5.333vw, 1.5rem);
    color: ${({colors}) => colors.menuBarColor};
  }
  h3 {
    font-family: ${({subtitleFonts}) => subtitleFonts || "Oceanside-Typewriter"};
    font-size: 1.5rem;
    color: ${({colors}) => colors.menuBarColor};
    margin: 1rem 0;
  }

  p {
    font-family: ${({paragraphFonts}) => paragraphFonts || "American-Typewriter"};
    font-size: clamp(.7rem, -0.875rem + 5.333vw, 1rem);
    color: ${({colors}) => colors.menuBarColor}; 
    min-height: .5rem;
  }
  main {
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    max-width: 1500px;
    margin: 0 auto;
    article, section {
      width: 100%;
      @media (min-width: 800px) {
        padding-top: 4rem;
      }
    }
  }
  `;

const Layout = ({ children }) => {
  const [siteSettings] = useGlobalState("siteSettings");
  const [colors] = useGlobalState("colors");
  const { headingFonts, menuFont, paragraphFonts, subtitleFonts } = siteSettings;
  return (
    <LayoutWrapper colors={colors} 
      headingFonts={headingFonts} menuFont={menuFont} paragraphFonts={paragraphFonts} subtitleFonts={subtitleFonts} siteSettings={siteSettings}
    >
      <Header />
      { children}
    </LayoutWrapper>
  )
}

export default Layout
