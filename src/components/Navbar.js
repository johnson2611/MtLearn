import React, { useState, useEffect } from "react";
import { NavLink, useHistory} from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {AiOutlineSearch} from "react-icons/ai"

// import { useMediaQuery } from "react-responsive";
// import Toggle from "react-toggle";

// import {useScroll} from 'scroll-behavior';


const Navbar = ({ handleClick }) => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [Mobile, setMobile] = useState(false);

  // const [isDark, setIsDark] = useState(true);

  const checkWinSize = () => {
    setWinSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWinSize);
  }, [winSize]);

  const history = useHistory();
  const homeButtonClick = () =>{
    history.push('/');
  }
  const logButtonClick = () =>{
    history.push("/Login");
  }

  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (isSystemDark) => setIsDark(isSystemDark)
  // );
  const handleClick1 = (e) => {
    const name = e.target.getAttribute("name");
    if (name !== undefined || name !== null) {
      setMobile(false);
    }
  };
  return (
    <nav className="navbar">
      <h3 className="logo" onClick={homeButtonClick}>
        <span className="mt">Mt</span>
        <span className="learn">Learn</span>
      </h3>
      {/* <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    /> */}
     <div class="box">
          {/* search icon */}
          <AiOutlineSearch className="scr"/>
          <input className="search" placeholder="search..." spellcheck="true"  type="text"/>
      </div>
      
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
        <NavLink activeClassName="active" to="/Tutor" name="Tutor">
          <li>Become a Tutor</li>
        </NavLink>
        <button className="btn" onClick={logButtonClick}>Log In </button>
        {/* <button className="btn">Sign Up</button> */}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
export default Navbar;
