import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/head"

import contactStyles from "./contactStyles.module.css"
import ContactForm from "../components/contactForm"
import ContactImg from "../components/contactImg"

const Services = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Head title="Contact" />
      <div className={contactStyles.main}>
        <div>
          <ContactImg />
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Services
