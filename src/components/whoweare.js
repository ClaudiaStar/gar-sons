import React from "react"
import whoweareStyles from "./whoweareStyles.module.css"
import GarSonsLogo from "./GarSonsLogo"
import Button from "./button"

const WhoWeAre = () => {
  return (
    <div className={whoweareStyles.Main}>
      <div className={whoweareStyles.text}>
        <h2 className={whoweareStyles.title}>WHO WE ARE</h2>
        <p className={whoweareStyles.paragraph}>
          We love working with homeowners to find ways to repurpose and improve
          spaces in their homes. We welcome projects ranging from patching up
          drywall and floor installation to a full bathroom remodel or new porch
          addition. We can also help with landscape design.
        </p>
        <Button innerText="Learn More" />
      </div>

      <GarSonsLogo style={{ width: "300px" }} />
    </div>
  )
}

export default WhoWeAre
