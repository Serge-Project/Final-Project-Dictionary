import React from 'react'
import {
    Nav, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink, 
    NavLink 
  } from './NavbarElements';

const Navbar = ( {color }) => {
  return (
   <>
    <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>

            <NavLink to="/home"
              activestyle = {{color: color}}>
                Home
            </NavLink>
            <NavLink to="/Dictionary"
              activestyle = {{color: 'black'}}>
                Dictionary
            </NavLink>
              <NavLink to="/Examples" 
              activestyle = {{color: 'black'}}>
                Examples
            </NavLink>
            <NavLink to="/Sign-up" 
              activestyle = {{color: 'black'}}>
                Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='sign-up'> Sign In</NavBtnLink>
          </NavBtn>
    </Nav>
   </>
  );
}

export default Navbar;
