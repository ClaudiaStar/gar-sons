import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import contactImgStyles from "./contactImgStyles.module.css"

const ContactImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "woodbeams.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      // style={{
      //   width: "50vw",
      //   height: "100vh",
      // }}
      className={contactImgStyles.ContactImg}
    />
  )
}

export default ContactImg
