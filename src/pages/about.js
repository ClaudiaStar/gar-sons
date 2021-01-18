import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyles from "./aboutStyles.module.css"
import Head from "../components/head"

import AboutImg from "../components/aboutImg"
import CallToAction from "../components/callToAction"

const AboutPage = () => (
  <Layout>
    <SEO title="About Gar-Sons" />
    <Head title="About" />
    <AboutImg />
    <div className={aboutStyles.aboutDescription}>
      <h3>Some of the renovation and home addition services provided are:</h3>
      <ul>
        <li>Deck construction</li>
        <li>Finishing basements</li>
        <li>Bedroom additions</li>
        <li>Fence installation</li>
        <li>Flooring replacement</li>
        <li>Kitchen and bathroom fixture installation/remodel</li>
      </ul>
    </div>
    <CallToAction />
  </Layout>
)

export default AboutPage
