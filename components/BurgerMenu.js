import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalState } from "../state";
import menuItems from "./menuItems";

const transitionDuration = ".4s";

const BurgerContainer = styled.div`
  top: 2rem;
  right: 3rem;
  position: fixed;
  color: white;
  cursor: pointer;
  height: auto;
  width: auto;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const Burger = styled.div`
  display: block;
  width: ${({open}) => open ? "1px" : "40px"};
  height: 3px;
  background: ${({ open, colors }) =>
    open ? colors.menuBackgroundColor : colors.menuBarColor};
  border-radius: 5px;
  align-self: center;
  transition: width ${transitionDuration}, background ${transitionDuration};
  &:before,
  &:after {
    content: "";
    border-radius: 5px;
    width: ${({ open }) => (open ? "40px" : "50px")};
    height: 5px;
    background: ${({ colors, inVideos, open }) => inVideos ?  open ? colors.videosPageBackground : colors.menuBackgroundColor : colors.menuBarColor};
    position: absolute;
    transition: background ${transitionDuration}, top ${transitionDuration},
      bottom ${transitionDuration}, transform ${transitionDuration},
      width ${transitionDuration};
    right: 0;
  }
  &:before {
    top: ${({ open }) => (open ? "1.5rem" : 0)};
    transform: ${({ open }) => (open ? "rotate(45deg) translateY(-15px)" : "")};
  }
  &:after {
    bottom: ${({ open }) => (open ? "1.5rem" : 0)};
    transform: ${({ open }) => (open ? "rotate(-45deg) translateY(15px)" : "")};
  }
  @media (min-width: 1068px) {
    display: none;
  }
`;

const NavContainer = styled.nav`
  background: ${({ colors }) => colors.menuBackgroundColor};
  opacity: 0.95;
  position: fixed;
  width: ${({ open }) => (open ? "100vw" : 0)};
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width ${transitionDuration};
  h1 {
    text-decoration: none;
    color: ${({ colors }) => colors.menuTextColor};
    margin-left: 1rem;
    /* position: absolute; */
    /* top: 1.75rem; */
    /* left: 5rem; */
    font-size: 3rem;
    transition: color ${transitionDuration};
  }
`;

const NavigationList = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  line-height: 3rem;
  `;

const NavigationItem = styled.li`
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: calc(${({ index }) => (index === 0 ? 1 : index + 1)} * 400ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  h2 {
    display: ${({ open }) => (open ? "block" : "none")};
    color: ${({ colors, inVideos }) => inVideos ? colors.videosPageBackground : colors.menuBarColor};
    text-transform: uppercase;
    /* font-weight: bold; */
    margin: 0.3rem;
    cursor: pointer;
    font-size: 3rem;
    line-height: 5rem;
  }
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: scale(0.6) translateY(-8px);
    }

    100% {
      opacity: 1;
    }
  }
`;

const Menu = ({ navOpen, setNavOpen, closeCheckoutAndNav }) => {
  const [colors] = useGlobalState("colors");
  const [siteSettings] = useGlobalState("siteSettings");
  const router = useRouter();
  const { route } = router;
  console.log('colors', colors);
  
  return (
    <NavContainer open={navOpen} colors={colors} siteSettings={siteSettings}>
      <BurgerContainer open={navOpen} onClick={() => setNavOpen(!navOpen)} inVideos={route === "/videos"}>
        <Burger open={navOpen} colors={colors} siteSettings={siteSettings} inVideos={route === "/videos"}/>
      </BurgerContainer>

      <NavigationList open={navOpen}>
        {menuItems.map((item, index) => (
          <NavigationItem
            key={index}
            open={navOpen}
            index={item.index}
            colors={colors}
            inVideos={route === "/videos"}
          >
            <Link href={item.url}>
              <h2 onClick={() => closeCheckoutAndNav()}>{item.name}</h2>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavContainer>
  );
};

export default Menu;
