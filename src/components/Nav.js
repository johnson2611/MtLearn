// import React, { useState,useEffect } from "react";
// import { NavLink } from "react-router-dom"
// import "./nav.css"
// import {FaBars} from "react-icons/fa";
// import {ImCross} from "react-icons/im";
// // import {useScroll} from 'scroll-behavior';

// const Navbar = ({handleClick}) => {
//     const [winSize, setWinSize] =useState(window.innerWidth)
//     const [Mobile, setMobile] = useState(false)

//     const checkWinSize = ()=>{
//         setWinSize(window.innerWidth)
//     }
//     useEffect(()=>{
//         window.addEventListener('resize', checkWinSize)
//     },[winSize])
//     const handleClick1 =(e)=>{
//         const name = e.target.getAttribute('name')
//         if (name!==undefined || name!==null){
//             setMobile(false)
//         }
//     }
//     return(
//        <nav className="navbar">
            
//             <h3 className="logo"> AJAY </h3>

//             <ul className={winSize<=760 ? Mobile?"nav-links-mobile":"nav-links" : "nav-links"} onClick={handleClick1}>
//                 <NavLink  exact activeClassName="active" to='/' name='home' onClick={()=>{window.scrollTo(0,0)}}>
//                     <li>Home</li>
//                 </NavLink>
//                 <NavLink activeClassName="active" to = '/about' name='about'>
//                     <li>About</li>
//                 </NavLink>
//                 <NavLink activeClassName="active" to='/skills' name='skills'>
//                     <li>Skills</li>
//                 </NavLink>
//                 <NavLink activeClassName="active" to='/portfolio' name='portfolio'>
//                     <li>Portfolio</li>
//                 </NavLink>
//                 <NavLink activeClassName="active" to='/contact' name='portfolio'>
//                     <li>Contact</li>
//                 </NavLink>
//                 <button className="resume">Download Resume</button>
//             </ul>
//             <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
//                 {Mobile ? <ImCross/> : <FaBars/>}
                
//             </button>
//        </nav> 
//     )
// }
// export default Navbar



