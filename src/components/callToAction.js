import React from "react"
import TransitionImg2 from "../components/TransitionImg2"
import Button from "../components/button"
import callToActionStyles from "./calltoActionStyles.module.css"

const CallToAction = () => {
  return (
    <React.Fragment>
      <TransitionImg2 />
      <div className={callToActionStyles.callToAction}>
        <h2 className={callToActionStyles.callToActionText}>
          Let us know how can we be of service to you!
        </h2>
        <div className={callToActionStyles.callToActionButton}>
          <Button innerText="Contact us!" link="/contact" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default CallToAction
