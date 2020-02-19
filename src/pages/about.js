import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyles from "./aboutStyles.module.css"

import AboutImg from "../components/aboutImg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <AboutImg />
    <div className={aboutStyles.aboutDescription}>
      <h2>ABOUT GAR-SONS</h2>
      <p>
        My name is Ismael Garcia and I am the owner of Gar-Sons Construction. I
        have over 15 years of experience in residential remodeling. I love
        working with homeowners to find ways to repurpose and improve spaces in
        their homes. I welcome projects ranging from patching up drywall and
        floor installation to a full bathroom remodel or new porch addition. I
        can also help with landscape design.
      </p>
      <p>
        I began working in construction as a laborer during high school. Then,
        while I was a college student at the University of Oregon, I worked on
        remodeling projects for larger companies to gain experience. After
        college, I continued to work on small projects and enrolled in
        construction classes at Portland Community College. When my teaching
        position became part-time due to budget cuts, I decided to start my own
        business.
      </p>
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
  </Layout>
)

export default SecondPage
