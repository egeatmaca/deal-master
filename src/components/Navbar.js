import React from 'react';
import {
Nav,
NavLink,
NavMenu,
} from './NavbarElements';
import logo from '../assets/logo.png';

const Navbar = () => {
	return (
		<>
			<Nav> 
				<NavMenu>
					<NavLink to='/' activeStyle>
						<img id='logo' alt='logo' src={logo}/>
					</NavLink>
					<NavLink to='/' activeStyle>
						<b>Home</b>
					</NavLink>
					<NavLink to='/wolt' activeStyle>
						<b>Wolt</b>
					</NavLink>
					<NavLink to='/uber-eats' activeStyle>
						<b>Uber Eats</b>
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
	};

export default Navbar;
