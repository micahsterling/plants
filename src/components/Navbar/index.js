import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Plants
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>  
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar
