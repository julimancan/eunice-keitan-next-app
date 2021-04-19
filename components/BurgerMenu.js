import styled from '@emotion/styled'
import Link from 'next/link';
import menuItems from './menuItems';
import { stylingVariables } from './stylingVariables';

const transitionDuration = ".4s";

const BurgerContainer = styled.div`
  top: 3rem;
  right: 2rem;
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
  width: 40px;
  height: 3px;
  background: ${({ open }) => open ? stylingVariables.menuBackgroundColor : stylingVariables.menuBarColor};
  border-radius: 5px;
  align-self: center;
  transition: width ${transitionDuration}, background ${transitionDuration};  
  &:before, &:after {
    content: "";
    border-radius: 5px;
    width: ${({ open }) => open ? "40px" : "50px"};
    height: 5px;
    background: ${stylingVariables.menuTextColor};
    position: absolute;
    transition: background ${transitionDuration}, top ${transitionDuration}, bottom ${transitionDuration} , transform ${transitionDuration}, width ${transitionDuration};  
  }
  &:before {
    top: ${({ open }) => open ? "1.5rem" : 0};
    transform: ${({ open }) => open ? "rotate(45deg) translateY(-15px)" : ""}
  }
  &:after {
    bottom: ${({ open }) => open ? "1.5rem" : 0};
    transform: ${({ open }) => open ? "rotate(-45deg) translateY(15px)" : ""}
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

const NavContainer = styled.nav`
  background:${stylingVariables.menuBackgroundColor};
  opacity: .95;
  position: fixed;
  width: ${({ open }) => open ? "100vw" : 0};
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width ${transitionDuration};
   h1 {
    text-decoration: none;
    color: ${stylingVariables.menuTextColor};
    margin-left: 1rem;
    /* position: absolute; */
    /* top: 1.75rem; */
    /* left: 5rem; */
    font-size: 3rem;
    transition: color ${transitionDuration};
  }
`;


const NavigationList = styled.ul`
  display: ${({ open }) => open ? "flex" : "none"};
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
  animation-delay: calc(${({ index }) => index === 0 ? 1 : index + 1} * 400ms);  
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
    h3 {
      display: ${({ open }) => open ? "block" : "none"};
      color: ${stylingVariables.menuTextColor};
      text-transform: uppercase;
      font-weight: bold;
      margin: 0.3rem;
      cursor: pointer;
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




const Menu = ({ navOpen, setNavOpen }) => {

  return (
    <NavContainer open={navOpen}>
      <BurgerContainer open={navOpen} >
        <Burger open={navOpen} onClick={() => setNavOpen(!navOpen)} />
      </BurgerContainer>
   
      <NavigationList open={navOpen}>
        {menuItems.map((item) => (
          <NavigationItem key={item.index} open={navOpen} index={item.index}>
            <Link href={item.url}>
              <h3 onClick={() => setNavOpen(false)}>
                {item.name}
              </h3>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavContainer>
  )
}

export default Menu;
