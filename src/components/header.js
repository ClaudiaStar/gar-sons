import { Link } from "gatsby"
import React from "react"
import headerStyles from "./headerStyles.module.css"

const Header = () => (
  <header className={headerStyles.navbar}>
    <div className={headerStyles.logo}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Gar-Sons Constrution
      </Link>
    </div>

    <div className={headerStyles.about}>
      <Link to="/about">About Us</Link>
    </div>
    <div className={headerStyles.gallery}>
      <Link to="/gallery">Visit Gallery</Link>
    </div>
    <div className={headerStyles.contact}>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

export default Header
