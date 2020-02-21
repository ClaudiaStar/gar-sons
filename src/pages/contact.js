import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "./contactStyles.module.css"
import ContactForm from "../components/contactForm"
import ContactImg from "../components/contactImg"

const Services = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <div className={contactStyles.main}>
        <div className={contactStyles.imageGradient}>
          <ContactImg />
        </div>

        <ContactForm />
      </div>
    </Layout>
  )
}

export default Services
