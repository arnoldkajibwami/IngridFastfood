import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import Brandlogo from "./images/logo.png"
import { Button } from 'react-bootstrap'


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <Fragment >

      <nav className="navbar navallcolor">
        <div className='container '>
          <div className=" Navcontainer">
            <div className="logo d-flex">
              <img style={{ height: "30px", width: "30px", borderRadius: "259px", marginRight: "5px", background: "#f1f2f3" }} src={Brandlogo} alt='logo' />
              <Link to="/" style={{ textDecoration: "none", color: "white" }}><h4 style={{ color: "white" }}>Ingrid Fast Food</h4></Link>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              {/* <button className='btn btn-danger'>Back</button> */}
              <span> </span>
              <span id="spanleft"></span>
              <span> </span>
            </div>
            <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`}>
              <div className='menu-closed' onClick={handleShowNavbar}>
                <span>Close</span>
              </div>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/map">Map</NavLink>
                </li> */}

                <hr />
                <div className='tonone'>
                  <li id='socialnet'>
                    <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
                    <i className='socialnetwork'><BiLogoFacebook /></i>
                    <i className='socialnetwork'><BiLogoTwitter /></i>
                  </li>
                  <button className='buttonorange'id="buttonid" style={{ marginLeft: "15px" }}>
                    <NavLink  to="contact" style={{ textDecoration: "none", color: "white"}}>Order Online</NavLink>
                  </button>

                </div>
              </ul>

            </div>

            <div className='d-flex socialbukavu flexnone'>
              <div>

                <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
                <i className='socialnetwork'><BiLogoFacebook /></i>
                <i className='socialnetwork'><BiLogoTwitter /></i>
                <button className='buttonorange' style={{ marginLeft: "15px" }}>
                  <NavLink  to="contact" style={{ textDecoration: "none", color: "white" }}>Order Online</NavLink>
                </button>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header