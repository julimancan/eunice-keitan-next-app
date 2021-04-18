import styled from '@emotion/styled'
import { useState } from 'react'
import menuItems from './menuItems';
import { stylingVariables } from './stylingVariables';
import Menu from './BurgerMenu';
import Link from 'next/link'

const DesktopNav = styled.nav`
  /* background: red; */
  /* width: fit-content; */
  /* position: absolute; */
  display: none;
  ul {
    display: flex;
    list-style: none;
    /* margin-right: 2rem; */
    li {
      cursor: pointer;
      margin-left: 1rem;
      text-transform: uppercase;
    }
  }
  @media (min-width: 900px) {
    display: block;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 100vw;
  -webkit-box-shadow: 3px 1px 5px 3px #ccc;  
  -moz-box-shadow:    3px 1px 5px 3px #ccc;  
  box-shadow:         3px 1px 5px 3px #ccc;  
  padding: 2rem;
  position: fixed;
  z-index: 100;

  @media (min-width: 900px) {
    padding: 2rem 12% 2rem 10%;
  }

`;

const Logo = styled.div`
  cursor: pointer;
`;

const DesktopNavItem = styled.li`
  color: ${stylingVariables.menuTextColor};
  transition: font-size .2s;
  border-bottom:  ${({ selected }) => !selected ? "none" : stylingVariables.menuBottomBorder};
  &:hover {
    border-bottom: ${stylingVariables.menuBottomBorder};
  }
`;

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("/")
  return (
      <Header>
        <Menu navOpen={navOpen} setNavOpen={setNavOpen}/>
        <Link href="/" onClick={() => setNavOpen(false)}>
          <Logo>
            <h1>Eunice Keitan</h1>
            <h5>Musician | Singer-Songwriter</h5>
          </Logo>
        </Link>
        <DesktopNav>
          <ul>
            {menuItems.map((item) => {
              // console.log("item", item) 
            return (
              <Link href={item.url} >
                <DesktopNavItem onClick={() => {setSelectedNavItem(item.url); console.log(selectedNavItem)}} key={item.index} selected={selectedNavItem === item.url ? true : false}>
                  <h3>
                    {item.name}
                  </h3>
                </DesktopNavItem>
              </Link>

            )})}
          </ul>
        </DesktopNav>
      </Header>
  )
}

export default Navigation
