import React from "react"
import classes from "./footerStyles.module.css"

import { FiPhoneCall } from "react-icons/fi"
import { GoMail } from "react-icons/go"
import { FiFacebook } from "react-icons/fi"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.SocialIcons}>
        <IconContext.Provider
          value={{
            size: "2em",
            style: { margin: "10px 20px 0" },
          }}
        >
          <FiPhoneCall />
          <GoMail />
          <FiFacebook />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Footer
