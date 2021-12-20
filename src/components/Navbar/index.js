import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Plants</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>  
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>  
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>  
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar;
