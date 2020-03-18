import React from "react"
import Layout from "../components/layout"
import GarSonsLogo from "../components/GarSonsLogo"
import Button from "../components/button"

const ThanksPage = () => (
  <Layout>
    <h3 style={{ paddingTop: "20vh", textAlign: "center" }}>
      Thank you for reaching out! We will get in touch with you shortly.
    </h3>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GarSonsLogo />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button link="/" innerText="Back To Home" />
    </div>
  </Layout>
)

export default ThanksPage
