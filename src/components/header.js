import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import classes from "./headerStyles.module.css"

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: 800,
}

const contactLinkStyle = {
  textDecoration: "none",
  color: "#000000",
  backgroundColor: "#ffffff",
  fontWeight: 900,
  padding: "10px",
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
          <AniLink fade to="/" duration={1} style={linkStyle}>
            Gar-Sons Construction
          </AniLink>
        </div>
        <div className={classes.HomeLink}>
          <AniLink
            fade
            to="/about"
            exact={true}
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            About Us
          </AniLink>
        </div>
        <div className={classes.ProgramsLink}>
          <AniLink
            fade
            to="/gallery"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Gallery
          </AniLink>
        </div>
        <div className={classes.ContactLink}>
          <AniLink
            fade
            to="/contact"
            style={contactLinkStyle}
            activeStyle={activeLinkStyle}
          >
            Get a quote!
          </AniLink>
        </div>
      </div>
    </header>
  )
}

export default Header
