import styled from "@emotion/styled";
import Header from "./Header";

const LayoutWrapper = styled.div`
  main {
    padding-top: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin-bottom: 3rem;
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
