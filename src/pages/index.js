import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import indexStyles from "./indexStyles.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoWeAre from "../components/whoweare"
import TransitionImg1 from "../components/TransitionImg1"
import Services from "../components/services"
import TransitionImg2 from "../components/TransitionImg2"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Img
        fluid={data.file.childImageSharp.fluid}
        className={indexStyles.heroImg}
        alt="rustic wood"
      />
      <div className={indexStyles.heroText}>
        <h3>Repair - Remodel - Rebuild</h3>
        <h1>Gar-Sons Construction</h1>
        <p>Licensed | Bonded | Insured</p>
      </div>
      <WhoWeAre />
      <TransitionImg1 />
      <Services />
      <TransitionImg2 />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "bricklight.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
