import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #28a124cb;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start;  */
`;

export const SideNav = styled.nav`
         background: #28a124;
         display: flex;
         justify-content: space-between;
         z-index: 13;
         position: fixed;
         top: 0;
         right: 0;
         width: 50%;
         height: 100%;
         color: #00000000;
         display: none;
         @media screen and (max-width: 768px) {
           display: block;
         }
       `;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
margin: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #9e2c2e;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #112211;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  align-self: center;
  z-index: 15;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -24px; */
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
  	display: none;
  }
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
