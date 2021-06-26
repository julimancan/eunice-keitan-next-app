import styled from "@emotion/styled";
import Header from "./Header";
import { stylingVariables } from "./stylingVariables";

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
h1 {
  font-family: "PrequelDemo";
  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
  font-weight: 400;
  color: ${stylingVariables.menuBarColor};
  white-space: nowrap;
}
h2 {
  font-family: "Oceanside-Typewriter";
  font-size: clamp(.7rem, -0.875rem + 5.333vw, 1.5rem);
  color: ${stylingVariables.menuBarColor};
}
main {
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* background: red; */
  /* margin-bottom: 3rem; */
  article, section {
    width: 100%;
    @media (min-width: 800px) {
      width: 80%
    }
  }
}
  `;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      { children}
    </LayoutWrapper>
  )
}

export default Layout
