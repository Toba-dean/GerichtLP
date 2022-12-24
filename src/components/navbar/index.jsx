import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import "./navbar.styles.css";
import { images } from '../../constants/images';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const navData = [
    {
      name: "Home",
      path: "#home"
    },
    {
      name: "About",
      path: "#about"
    },
    {
      name: "Menu",
      path: "#menu"
    },
    {
      name: "Awards",
      path: "#awards"
    },
    {
      name: "Contact",
      path: "#contact"
    }
  ]

  return (
    <nav className="app__navbar">

      {/* Desktop Nav */}

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        {
          navData.map((item, idx) => (
            <li className="p__opensans" key={idx}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>

      {/* End */}

      {/* =============================================================================== */}
      
      {/* Mobile nav */}

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          style={{ cursor: 'pointer' }}
        />

        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="app__navbar-smallscreen_link">
                {
                  navData.map((item, idx) => (
                    <li 
                      className="p__opensans" 
                      key={idx} 
                      onClick={() => setToggleMenu(false)}
                    >
                      <a href={item.path}>{item.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>

      {/* End */}
    </nav>
  )
}

export default Navbar
