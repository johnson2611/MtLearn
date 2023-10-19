import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import {AiOutlineSearch} from "react-icons/ai"
// import {useScroll} from 'scroll-behavior';

const Navbar = ({ handleClick }) => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [Mobile, setMobile] = useState(false);

  const checkWinSize = () => {
    setWinSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWinSize);
  }, [winSize]);
  const handleClick1 = (e) => {
    const name = e.target.getAttribute("name");
    if (name !== undefined || name !== null) {
      setMobile(false);
    }
  };
  return (
    <nav className="navbar">
      <h3 className="logo">
        <span className="mt">Mt</span>
        <span className="learn">Learn</span>
      </h3>

      <ul
        className={
          winSize <= 760
            ? Mobile
              ? "nav-links-mobile"
              : "nav-links"
            : "nav-links"
        }
        onClick={handleClick1}
      >
        <div class="box">
          {/* search icon */}
          {/* <AiOutlineSearch className="scr"/> */}
          <input className="search" placeholder="search..." spellcheck="false" />
        </div>
        <NavLink
          exact
          activeClassName="active"
          to="/"
          name="home"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/Courses" name="Courses">
          <li>Courses</li>
        </NavLink>
        <NavLink activeClassName="active" to="Tutorial" name="Tutorial">
          <li>Tutorial</li>
        </NavLink>
        <NavLink activeClassName="active" to="/Services" name="Services">
          <li>Services</li>
        </NavLink>
        <button className="btn">Log In </button>
        {/* <button className="btn">Sign Up</button> */}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
export default Navbar;
