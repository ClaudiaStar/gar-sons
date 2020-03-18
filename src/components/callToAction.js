import React from "react"
import TransitionImg2 from "../components/TransitionImg2"
import Button from "../components/button"
import callToActionStyles from "./calltoActionStyles.module.css"
import { FiFacebook } from "react-icons/fi"
import { IconContext } from "react-icons"

const CallToAction = () => {
  return (
    <React.Fragment>
      <TransitionImg2 />
      <div className={callToActionStyles.callToAction}>
        <IconContext.Provider
          value={{
            size: "2em",
            style: { margin: "10px 20px 0" },
          }}
        >
          <a href="https://www.facebook.com/Garsons.Construction/">
            <FiFacebook />
          </a>
        </IconContext.Provider>
        <h2 className={callToActionStyles.callToActionText}>
          Let us know how can we be of service to you!
        </h2>
        <p>503-709-4046</p>
        <p>garsons.construction@gmail.com</p>
        <br />
        <div className={callToActionStyles.callToActionButton}>
          <Button innerText="Get a quote!" link="/contact" />
        </div>
        <br />
      </div>
    </React.Fragment>
  )
}

export default CallToAction
