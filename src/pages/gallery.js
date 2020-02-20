import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import galleryStyles from "./galleryStyles.module.css"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className={galleryStyles.gallery}>
      <h2>OUR WORK</h2>
      <div className={galleryStyles.galleryImages}></div>
    </div>
  </Layout>
)

export default GalleryPage
