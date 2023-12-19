import './navbar.scss'
import Logo from '../../assets/Logo/qzseeker-logo-zip-file/png/qzseeker-high-resolution-logo-transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faTimes,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleClick() {
    // window.location.reload();
    setNav(!nav)
  }
  
  function closeMenu() {
    setNav(false)
  }
  return (
    <>
      <div className="nav-bar">
        {/* Humbureger */}
        <div onClick={handleClick} className="humburger">
          {!nav ? (
            <FontAwesomeIcon
              icon={faBars}
              color="#000"
              style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              color="#000"
              style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
            />
          )}
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
        {/* Menu */}
        <nav className="menu">
          <ul>
            <li>
              <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>Skills</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Search Bar */}
        <div className="search-bar">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: '20px', cursor: 'pointer' }}
          />
        </div>
        {/* Mobile Menu */}
        <nav className={!nav ? 'hidden' : 'mobile-menu'}>
        <div onClick={handleClick} className="humburger">
          {!nav ? (
            <FontAwesomeIcon
              icon={faBars}
              color="#000"
              style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              color="#000"
              style={{ zIndex: '20', fontSize: '20px', cursor: 'pointer' }}
            />
          )}
        </div>
        <div className="logo-2">
          <img src={Logo} />
        </div>
          <ul>
            <li>
              <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
            <hr/>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
            <hr/>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skills</Link>
            <hr/>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>Contact</Link>
            <hr/>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons">
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/arpit-yadav-29b5a0257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#000" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/arpityadv_?igshid=NzZlODBkYWE4Ng=="
                >
                  <FontAwesomeIcon icon={faInstagram} color="#000" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/arpityadv_?t=cHZVjiDOPwESuHtLPyT2Ag&s=09"
                >
                  <FontAwesomeIcon icon={faXTwitter} color="#000" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/qzSeeker"
                >
                  <FontAwesomeIcon icon={faGithub} color="#000" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="bottom-icons">
        <ul>
          <li
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/"
          >
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
              <p>Home</p>
            </Link>
          </li>

          <li
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#4d4d4e" />
              <p>Find</p>
            </Link>
          </li>
          <li
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <Link to="contact" spy={true} smooth={true} offset={-10} >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
