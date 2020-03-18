import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import indexStyles from "./indexStyles.module.css"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/head"

import WhoWeAre from "../components/whoweare"
import TransitionImg1 from "../components/TransitionImg1"
import Services from "../components/services"
import CallToAction from "../components/callToAction"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Head title="Home" />
      <Img
        fluid={data.file.childImageSharp.fluid}
        className={indexStyles.heroImg}
        alt="rustic wood"
      />
      <motion.div
        className={indexStyles.heroText}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 variants={item}>Repair - Remodel - Rebuild</motion.h3>
        <motion.h1 variants={item} className={indexStyles.companyName}>
          Gar-Sons Construction
        </motion.h1>
        <motion.p variants={item}>Licensed | Bonded | Insured</motion.p>
      </motion.div>
      <WhoWeAre />
      <TransitionImg1 />
      <Services />
      <CallToAction />
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
