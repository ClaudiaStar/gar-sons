import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TransitionImg2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "constructionworker.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ height: "40vh", opacity: "0.5" }}
      />
    </React.Fragment>
  )
}

export default TransitionImg2
