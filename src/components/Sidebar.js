import React, { useState } from "react";
import { SideNav, NavLink, Bars } from "./NavbarElements";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => { setIsOpen(!isOpen); };

  return (
    <div className="sidebar-container">
      <Bars onClick={() => toggleSidebar()} />
      <div className="sidebar" style={{ display: isOpen ? "block" : "none" }}>
        <SideNav>
          <h3 class="sidebar-header" style={{color: '#fff'}}> 🔥 Deals: </h3>
          <ul>
            <li>
              <NavLink to="/wolt" activeStyle>
                <b>Wolt</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/uber-eats" activeStyle>
                <b>Uber Eats</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/gorillas" activeStyle>
                <b>Gorillas</b>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/etoro" activeStyle>
                <b>eToro</b>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/trade-republic" activeStyle>
                <b>Trade Republic</b>
              </NavLink>
            </li> */}
          </ul>
        </SideNav>
      </div>
    </div>
  );
}

