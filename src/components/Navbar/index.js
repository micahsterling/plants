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
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar
