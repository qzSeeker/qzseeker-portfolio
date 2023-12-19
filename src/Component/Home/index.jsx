import './index.scss'
import MyProfile from '../../assets/Logo/qzseeker-logo-zip-file/png/MyProfile.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <>
      <div className="topContent" id='hero'>
        <div className="maintext">
          <div className="aboutMe">
            <h2>
              Hey There! <br />
              I'm Arpit Yadav, A Front-End{' '}
              <span className="dev">
                Developer <span className="wave">👋</span>
              </span>
            </h2>
            <p>
              Passionate <span> React </span> developer crafting seamless user
              experiences.
            </p>
            <Link to="contact" spy={true} smooth={true} offset={50}>
              <button className="btn connect-btn">Contact me</button>
            </Link>
          </div>
        </div>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          {' '}
          <defs>
            {' '}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {' '}
              <stop
                id="stop1"
                stopColor="rgba(176.138, 176.138, 176.138, 1)"
                offset="0%"
              ></stop>{' '}
              <stop
                id="stop2"
                stopColor="rgba(176.138, 176.138, 176.138, 1)"
                offset="100%"
              ></stop>{' '}
            </linearGradient>{' '}
          </defs>{' '}
          <mask id="mask1" mask-type="alpha">
            <path
              fill="url(#sw-gradient)"
              d="M30.7,-17.5C36.2,-8.2,34.6,5.4,28.3,16.1C22,26.8,11,34.6,-1.1,35.3C-13.1,35.9,-26.2,29.3,-32.6,18.6C-38.9,7.8,-38.4,-7,-31.9,-16.9C-25.3,-26.7,-12.6,-31.5,0,-31.5C12.6,-31.5,25.3,-26.7,30.7,-17.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: 'all 0.3s ease 0s' }}
              stroke="url(#sw-gradient)"
            ></path>{' '}
            <image
              className="imageOfMine img-responsive"
              xlinkHref={MyProfile}
              filter="url(#drop-shadow)"
            ></image>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M30.7,-17.5C36.2,-8.2,34.6,5.4,28.3,16.1C22,26.8,11,34.6,-1.1,35.3C-13.1,35.9,-26.2,29.3,-32.6,18.6C-38.9,7.8,-38.4,-7,-31.9,-16.9C-25.3,-26.7,-12.6,-31.5,0,-31.5C12.6,-31.5,25.3,-26.7,30.7,-17.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: 'all 0.3s ease 0s' }}
              stroke="url(#sw-gradient)"
            ></path>{' '}
            <image
              className="imageOfMine img-responsive"
              xlinkHref={MyProfile}
              x="8"
              y="15"
              height="80"
              width="80"
            ></image>
          </g>
        </svg>
      </div>
    </>
  )
}

export default Home;
