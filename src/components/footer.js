import React from "react"
import classes from "./footerStyles.module.css"

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.SocialIcons}>
        <i class="fab fa-facebook-square fa-2x"></i>

        <i class="fas fa-phone fa-2x"></i>

        <i class="far fa-envelope fa-2x"></i>
      </div>
    </div>
  )
}

export default Footer
