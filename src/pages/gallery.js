import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import galleryStyles from "./galleryStyles.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import CallToAction from "../components/callToAction"

const GalleryPage = props => {
  const [period, setPeriod] = useState("after")

  return (
    <Layout>
      <SEO title="Gallery" />
      <div className={galleryStyles.gallery}>
        <h2>OUR WORK</h2>
        <p>
          Whether you are ready for a change, need more space, or want cosmetic
          updates, we can help. If you are preparing your home to sell, we'll
          work with you to fit your budget. We're also available for emergency
          projects. Take a look at our before & after photos!
        </p>
        <div className={galleryStyles.bathroomImages}>
          <h3>Bathroom & Kitchen remodels</h3>
          {period === "after" ? (
            <Img
              fixed={props.data.imageOne.childImageSharp.fixed}
              onMouseover={setPeriod("before")}
            />
          ) : (
            <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
          )}

          <Img fixed={props.data.imageThree.childImageSharp.fixed} />
          <Img fixed={props.data.imageFour.childImageSharp.fixed} />
          <Img fixed={props.data.imageSeventeen.childImageSharp.fixed} />
        </div>
        <div className={galleryStyles.diningRooms}>
          <h3>Dining Rooms Remodels</h3>
          <Img fixed={props.data.imageThirteen.childImageSharp.fixed} />
          <Img fixed={props.data.imageFourteen.childImageSharp.fixed} />
          <Img fixed={props.data.imageFifteen.childImageSharp.fixed} />
        </div>
        <div className={galleryStyles.backyards}>
          <h3>Backyard Remodels</h3>
          <Img fixed={props.data.imageNineteen.childImageSharp.fixed} />
          <Img fixed={props.data.imageEighteen.childImageSharp.fixed} />
          <Img fixed={props.data.imageTwenty.childImageSharp.fixed} />
          <Img fixed={props.data.imageTwentyOne.childImageSharp.fixed} />
          <Img fixed={props.data.imageTwentyTwo.childImageSharp.fixed} />
        </div>
        <div className={galleryStyles.stairsAndRailings}>
          <h3>Stairs & Railings</h3>
          <Img fixed={props.data.imageFive.childImageSharp.fixed} />
          <Img fixed={props.data.imageSix.childImageSharp.fixed} />
          <Img fixed={props.data.imageSeven.childImageSharp.fixed} />
          <Img fixed={props.data.imageEight.childImageSharp.fixed} />
        </div>
        <div className={galleryStyles.decks}>
          <h3>Decks</h3>
          <Img fixed={props.data.imageTen.childImageSharp.fixed} />
          <Img fixed={props.data.imageEleven.childImageSharp.fixed} />
          <Img fixed={props.data.imageTwelve.childImageSharp.fixed} />
        </div>
        <div className={galleryStyles.fences}>
          <h3>Fences</h3>
          <Img fixed={props.data.imageSixteen.childImageSharp.fixed} />
        </div>
      </div>
      <CallToAction />
    </Layout>
  )
}

export default GalleryPage

export const fluidImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "photos/bathroom1.jpeg" }) {
      ...fixedImage
    }
    imageTwo: file(relativePath: { eq: "photos/bathroom2.jpeg" }) {
      ...fixedImage
    }
    imageThree: file(relativePath: { eq: "photos/bathroom3.jpeg" }) {
      ...fixedImage
    }
    imageFour: file(relativePath: { eq: "photos/bathroom4.jpeg" }) {
      ...fixedImage
    }
    imageFive: file(relativePath: { eq: "photos/stairs1.jpeg" }) {
      ...fixedImage
    }
    imageSix: file(relativePath: { eq: "photos/stairs2.jpeg" }) {
      ...fixedImage
    }
    imageSeven: file(relativePath: { eq: "photos/railing1.jpeg" }) {
      ...fixedImage
    }
    imageEight: file(relativePath: { eq: "photos/railing2.jpeg" }) {
      ...fixedImage
    }
    imageNine: file(relativePath: { eq: "photos/railing3.jpeg" }) {
      ...fixedImage
    }
    imageTen: file(relativePath: { eq: "photos/deck1.jpeg" }) {
      ...fixedImage
    }
    imageEleven: file(relativePath: { eq: "photos/deck2.jpeg" }) {
      ...fixedImage
    }
    imageTwelve: file(relativePath: { eq: "photos/deck3.jpeg" }) {
      ...fixedImage
    }
    imageThirteen: file(relativePath: { eq: "photos/dining1.jpeg" }) {
      ...fixedImage
    }
    imageFourteen: file(relativePath: { eq: "photos/dining2.jpeg" }) {
      ...fixedImage
    }
    imageFifteen: file(relativePath: { eq: "photos/dining3.jpeg" }) {
      ...fixedImage
    }
    imageSixteen: file(relativePath: { eq: "photos/fences.jpeg" }) {
      ...fixedImage
    }
    imageSeventeen: file(relativePath: { eq: "photos/kitchen1.jpeg" }) {
      ...fixedImage
    }
    imageEighteen: file(relativePath: { eq: "photos/landscaping.jpeg" }) {
      ...fixedImage
    }
    imageNineteen: file(relativePath: { eq: "photos/landscaping1.jpeg" }) {
      ...fixedImage
    }
    imageTwenty: file(relativePath: { eq: "photos/landscaping2.jpeg" }) {
      ...fixedImage
    }
    imageTwentyOne: file(relativePath: { eq: "photos/landscaping3.jpeg" }) {
      ...fixedImage
    }
    imageTwentyTwo: file(relativePath: { eq: "photos/landscaping4.jpeg" }) {
      ...fixedImage
    }
  }
`
