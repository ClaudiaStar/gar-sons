import React from "react"
import { Link } from "gatsby"

import classes from "./headerStyles.module.css"

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: 800,
}

const activeLinkStyle = {
  fontSize: "1.2em",
  textDecoration: "underline",
}

const toggleMenuClasses = () => {
  let burgerIcon = document.getElementById("burger")
  burgerIcon.classList.toggle(classes.isActive)
  let mobileMenu = document.getElementById("menu-container")
  mobileMenu.classList.toggle(classes.Opened)
}

const handleMenuClicked = () => {
  let burgerIcon = document.getElementById("burger")
  burgerIcon.classList.toggle(classes.isActive)
  let mobileMenu = document.getElementById("menu-container")
  mobileMenu.classList.toggle(classes.Opened)
}

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Burger} id="burger" onClick={toggleMenuClasses}>
        <div className={classes.Lines}>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
        </div>
      </div>

      <div
        className={classes.Menu}
        id="menu-container"
        onClick={handleMenuClicked}
      >
        <div className={classes.Name}>
          <Link
            to="/"
            exact={true}
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Gar-Sons Construction
          </Link>
        </div>
        <div className={classes.HomeLink}>
          <Link
            to="/about"
            exact={true}
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            About Us
          </Link>
        </div>
        <div className={classes.ProgramsLink}>
          <Link to="/gallery" style={linkStyle} activeStyle={activeLinkStyle}>
            Gallery
          </Link>
        </div>
        <div className={classes.ContactLink}>
          <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
