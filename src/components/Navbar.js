import React from 'react';
import {
Nav,
NavLink,
NavMenu
} from './NavbarElements';
import logo from '../assets/logo.png';

const Navbar = () => {
	return (
    <div id="navbar">
      <Nav>
        <NavLink to="/" activeStyle>
          <img id="logo" alt="logo" src={logo} />
        </NavLink>
        <NavMenu>
          <NavLink to="/wolt" activeStyle>
            <b>Wolt</b>
          </NavLink>
          <NavLink to="/uber-eats" activeStyle>
            <b>Uber Eats</b>
          </NavLink>
          <NavLink to="/gorillas" activeStyle>
            <b>Gorillas</b>
          </NavLink>
          {/* <NavLink to="/etoro" activeStyle>
            <b>eToro</b>
          </NavLink> */}
          {/* <NavLink to="/trade-republic" activeStyle>
            <b>Trade Republic</b>
          </NavLink> */}
        </NavMenu>
      </Nav>
    </div>
  );
	};

export default Navbar;
