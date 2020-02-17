import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import indexStyles from "./indexStyles.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
