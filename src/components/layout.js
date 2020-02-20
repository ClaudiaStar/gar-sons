import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <TransitionPortal>
        <Header siteTitle={data.site.siteMetadata.title} />
      </TransitionPortal>

      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <TransitionPortal>
          <Footer />
        </TransitionPortal>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
